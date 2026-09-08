// Adds an email to the Mailchimp audience. Kept server-side so the API key
// never reaches the browser.
//
// Required Netlify environment variables:
//   MAILCHIMP_API_KEY      — Mailchimp API key (ends in something like -us21)
//   MAILCHIMP_AUDIENCE_ID  — the audience's List ID
// Optional:
//   MAILCHIMP_SERVER_PREFIX — e.g. "us21"; derived from the API key if unset
//   MAILCHIMP_STATUS        — "pending" (double opt-in, default) or "subscribed"

export const config = { path: "/api/subscribe" };

const json = (status, body) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });

// Deliberately loose — Mailchimp is the real validator. This just catches
// obvious typos before we spend a round trip on them.
const looksLikeEmail = (value) =>
  typeof value === "string" &&
  value.length <= 254 &&
  /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim());

export default async function handler(request) {
  if (request.method !== "POST") {
    return json(405, { error: "Method not allowed." });
  }

  const apiKey = process.env.MAILCHIMP_API_KEY;
  const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;
  const serverPrefix =
    process.env.MAILCHIMP_SERVER_PREFIX || apiKey?.split("-")[1];

  if (!apiKey || !audienceId || !serverPrefix) {
    console.error("Mailchimp env vars missing or malformed.");
    return json(500, { error: "Signup isn't configured yet." });
  }

  let payload;
  try {
    payload = await request.json();
  } catch {
    return json(400, { error: "Expected a JSON body." });
  }

  // Honeypot — real people leave this empty. Report success so bots don't
  // learn they were caught.
  if (payload["bot-field"]) return json(200, { ok: true });

  const email = String(payload.email ?? "").trim();
  if (!looksLikeEmail(email)) {
    return json(400, { error: "That email doesn't look right." });
  }

  const status = process.env.MAILCHIMP_STATUS === "subscribed"
    ? "subscribed"
    : "pending";

  let response;
  let result;
  try {
    response = await fetch(
      `https://${serverPrefix}.api.mailchimp.com/3.0/lists/${audienceId}/members`,
      {
        method: "POST",
        headers: {
          Authorization: `Basic ${Buffer.from(`anystring:${apiKey}`).toString("base64")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email_address: email,
          status,
          tags: ["website"],
        }),
      }
    );
    result = await response.json().catch(() => ({}));
  } catch (error) {
    console.error("Mailchimp request failed:", error);
    return json(502, { error: "Couldn't reach the mailing list. Try again?" });
  }

  if (response.ok) {
    return json(200, { ok: true, status });
  }

  // Mailchimp signals an existing member with a 400 and this exact title.
  if (result.title === "Member Exists") {
    return json(200, { ok: true, alreadySubscribed: true });
  }

  if (result.title === "Invalid Resource") {
    return json(400, {
      error: "Mailchimp rejected that address. Mind double-checking it?",
    });
  }

  console.error("Mailchimp error:", response.status, result);
  return json(502, { error: "Something went wrong signing you up." });
}
