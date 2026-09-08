import { useState } from "react";

// Posts to the Netlify function in netlify/functions/subscribe.js, which holds
// the Mailchimp credentials. Stays on the page so the signup doesn't interrupt
// whatever the visitor was looking at.
export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [botField, setBotField] = useState("");
  const [state, setState] = useState("idle"); // idle | sending | done | error
  const [message, setMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    if (state === "sending") return;

    setState("sending");
    setMessage("");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, "bot-field": botField }),
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        setState("error");
        setMessage(result.error || "Something went wrong. Try again?");
        return;
      }

      setState("done");
      setEmail("");
      setMessage(
        result.alreadySubscribed
          ? "You’re already on the list."
          : result.status === "pending"
            ? "Almost there — check your inbox to confirm."
            : "You’re on the list. Thank you."
      );
    } catch {
      setState("error");
      setMessage("Couldn’t connect. Try again?");
    }
  }

  return (
    <div className="max-w-[420px] mx-auto text-center">
      <p className="text-sm tracking-wide mb-2">Join the list</p>
      <p className="text-sm font-light text-[#2C2C2C]/60 mb-5 leading-[1.7]">
        New pieces, kiln results, and word when the shop opens. A few times a
        year, nothing more.
      </p>

      {state === "done" ? (
        <p
          className="text-sm font-light text-[#2C2C2C]/70 py-3"
          role="status"
          aria-live="polite"
        >
          {message}
        </p>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          <div className="flex flex-col sm:flex-row gap-3">
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              type="email"
              id="newsletter-email"
              name="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              autoComplete="email"
              placeholder="you@email.com"
              disabled={state === "sending"}
              className="flex-1 min-w-0 border border-[#E0DBD3] bg-transparent px-4 py-3 text-sm font-light placeholder:text-[#2C2C2C]/35 focus:outline-none focus:border-[#2C2C2C] transition-colors disabled:opacity-50"
            />

            {/* Honeypot — hidden from people, tempting to bots. */}
            <p className="hidden" aria-hidden="true">
              <label>
                Don’t fill this out:{" "}
                <input
                  name="bot-field"
                  tabIndex={-1}
                  value={botField}
                  onChange={(event) => setBotField(event.target.value)}
                />
              </label>
            </p>

            <button
              type="submit"
              disabled={state === "sending"}
              className="bg-[#2C2C2C] text-[#FAF7F2] px-6 py-3 text-sm tracking-wide font-light hover:bg-[#2C2C2C]/85 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-default"
            >
              {state === "sending" ? "Joining…" : "Join"}
            </button>
          </div>

          {state === "error" && (
            <p
              className="text-sm font-light text-[#2C2C2C]/70 mt-3"
              role="alert"
            >
              {message}
            </p>
          )}
        </form>
      )}
    </div>
  );
}
