import { Link } from "react-router-dom";
import FadeInUp from "../components/FadeInUp";

// Written against what the site actually does. If you add analytics, a new
// form, or another service, update the matching section and the date.
const updated = "September 17, 2026";

const sections = [
  {
    heading: "What I collect, and why",
    body: (
      <>
        <p>
          <strong className="font-normal">Contact form.</strong> Your name,
          email, and message, so I can reply. Submissions are stored by Netlify,
          which hosts this site.
        </p>
        <p>
          <strong className="font-normal">Mailing list.</strong> Your email
          address, if you join the list. It&rsquo;s held by Mailchimp and used
          only to send news about new work and markets. Every email has an
          unsubscribe link.
        </p>
        <p>
          <strong className="font-normal">Commission deposits.</strong> Payments
          go through Stripe. Stripe collects your payment details, name, email,
          phone number, and your note about the piece you&rsquo;d like. I never
          see or store your card number. I use the rest to contact you about
          your commission and to keep a record of the sale.
        </p>
      </>
    ),
  },
  {
    heading: "What happens automatically",
    body: (
      <>
        <p>
          This site doesn&rsquo;t use analytics, advertising trackers, or
          cookies.
        </p>
        <p>
          Like any website, the servers that deliver it (Netlify) and its fonts
          (Google Fonts) receive standard technical information such as your IP
          address and browser type in order to load the page.
        </p>
        <p>
          If you close the market announcement, your browser remembers that on
          your own device so it doesn&rsquo;t show again. That note never
          leaves your browser.
        </p>
      </>
    ),
  },
  {
    heading: "Who else sees it",
    body: (
      <>
        <p>
          Only the services named above, each handling your information under
          its own privacy policy:{" "}
          <a href="https://www.netlify.com/privacy/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:opacity-60 transition-opacity">Netlify</a>,{" "}
          <a href="https://www.intuit.com/privacy/statement/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:opacity-60 transition-opacity">Mailchimp</a>,{" "}
          <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:opacity-60 transition-opacity">Stripe</a>, and{" "}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:opacity-60 transition-opacity">Google</a>.
        </p>
        <p>I don&rsquo;t sell or rent your information to anyone.</p>
      </>
    ),
  },
  {
    heading: "Your choices",
    body: (
      <p>
        You can unsubscribe from the mailing list at any time. To see, correct,
        or delete what I have about you, send a note through the{" "}
        <Link to="/contact" className="underline underline-offset-4 hover:opacity-60 transition-opacity">
          contact form
        </Link>
        . Payment records may need to be kept for tax and accounting purposes.
      </p>
    ),
  },
  {
    heading: "Changes",
    body: (
      <p>
        If this policy changes, the updated version will be posted here with a
        new date.
      </p>
    ),
  },
];

export default function Privacy() {
  return (
    <section className="pt-28 md:pt-32 pb-24 px-6">
      <div className="max-w-[640px] mx-auto">
        <FadeInUp>
          <p className="mb-4 text-[11px] uppercase tracking-[0.4em] text-[#2C2C2C]/40">
            Tella Ceramics &middot; New York
          </p>
          <h1 className="text-3xl font-light tracking-wide mb-4">
            Privacy policy
          </h1>
          <p className="text-sm font-light text-[#2C2C2C]/50 mb-14">
            Last updated {updated}
          </p>
        </FadeInUp>

        {sections.map((section) => (
          <FadeInUp key={section.heading}>
            <div className="border-t border-[#E0DBD3] pt-8 mb-12">
              <h2 className="text-lg font-light tracking-wide mb-4">
                {section.heading}
              </h2>
              <div className="flex flex-col gap-4 font-light leading-[1.8] text-[#2C2C2C]/75">
                {section.body}
              </div>
            </div>
          </FadeInUp>
        ))}
      </div>
    </section>
  );
}
