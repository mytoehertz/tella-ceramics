import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import FadeInUp from "../components/FadeInUp";

export default function Contact() {
  const [searchParams] = useSearchParams();
  const piece = searchParams.get("piece");
  const prefill = piece
    ? `Hi! I'm interested in ${piece} from Serie Taína. Could you send me details?\n\n`
    : "";

  const [state, setState] = useState("idle"); // idle | sending | done | error

  // Submitted over fetch rather than as a native POST: this is an SPA, so a
  // native submit would hand the visitor Netlify's generic thank-you page.
  // Netlify still picks it up via the hidden twin form in index.html.
  async function handleSubmit(event) {
    event.preventDefault();
    if (state === "sending") return;

    setState("sending");
    const body = new URLSearchParams(new FormData(event.target)).toString();

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });
      setState(response.ok ? "done" : "error");
    } catch {
      setState("error");
    }
  }

  return (
    <section className="pt-28 md:pt-32 pb-24 px-6">
      <div className="max-w-[560px] mx-auto">
        <FadeInUp>
          <h1 className="text-3xl font-light tracking-wide mb-4">
            Get in touch
          </h1>
          <p className="font-light text-[#2C2C2C]/60 mb-12">
            {piece
              ? `Inquiring about "${piece}" — just add your details below.`
              : "For commissions, purchases, or just to say hello."}
          </p>

          {state === "done" ? (
            <div
              className="border border-[#E0DBD3] px-6 py-10 text-center"
              role="status"
              aria-live="polite"
            >
              <p className="font-light mb-2">Thank you — your message is in.</p>
              <p className="text-sm font-light text-[#2C2C2C]/60">
                I read everything myself, so give me a day or two to reply.
              </p>
            </div>
          ) : (
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>
                  Don&rsquo;t fill this out: <input name="bot-field" />
                </label>
              </p>

              <div className="flex flex-col gap-6 mb-8">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-light mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full border border-[#E0DBD3] bg-transparent px-4 py-3 text-sm font-light focus:outline-none focus:border-[#2C2C2C] transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-light mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full border border-[#E0DBD3] bg-transparent px-4 py-3 text-sm font-light focus:outline-none focus:border-[#2C2C2C] transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-light mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    defaultValue={prefill}
                    className="w-full border border-[#E0DBD3] bg-transparent px-4 py-3 text-sm font-light focus:outline-none focus:border-[#2C2C2C] transition-colors resize-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={state === "sending"}
                className="w-full bg-[#2C2C2C] text-[#FAF7F2] py-3 text-sm tracking-wide font-light hover:bg-[#2C2C2C]/90 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-default"
              >
                {state === "sending" ? "Sending…" : "Send Message"}
              </button>

              {state === "error" && (
                <p
                  className="text-sm font-light text-[#2C2C2C]/70 mt-4"
                  role="alert"
                >
                  That didn&rsquo;t go through. Try again, or email me via{" "}
                  <a
                    href="https://www.instagram.com/tellaceramics"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:opacity-60 transition-opacity"
                  >
                    Instagram
                  </a>
                  .
                </p>
              )}
            </form>
          )}

          <div className="border-t border-[#E0DBD3] mt-12 pt-8">
            <p className="text-sm font-light mb-3">
              Instagram:{" "}
              <a
                href="https://www.instagram.com/tellaceramics"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-60 transition-opacity"
              >
                @tellaceramics
              </a>
            </p>
            <p className="text-sm font-light text-[#2C2C2C]/60">
              Purchases can be arranged via PayPal or Venmo &mdash; details on
              request.
            </p>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
