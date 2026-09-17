import { Link } from "react-router-dom";
import FadeInUp from "../components/FadeInUp";

// Where Stripe sends people after the deposit goes through.
export default function CommissionThanks() {
  return (
    <section className="pt-28 md:pt-32 pb-24 px-6">
      <div className="max-w-[560px] mx-auto">
        <FadeInUp>
          <p className="mb-4 text-[11px] uppercase tracking-[0.4em] text-[#2C2C2C]/40">
            Commission
          </p>
          <h1 className="text-3xl font-light tracking-wide mb-8">
            Deposit received.
          </h1>
          <p className="font-light leading-[1.8] mb-6">
            Thank you &mdash; your commission has started. Stripe has emailed
            you a receipt.
          </p>
          <p className="font-light leading-[1.8] text-[#2C2C2C]/70 mb-12">
            I&rsquo;ll reach out by email to talk through your piece. The $100
            comes off the final price once we agree on it.
          </p>
          <div className="flex flex-wrap gap-8">
            <Link
              to="/gallery"
              className="text-sm tracking-wide font-light hover:opacity-60 transition-opacity"
            >
              Browse the gallery &rarr;
            </Link>
            <Link
              to="/shop/collection"
              className="text-sm tracking-wide font-light hover:opacity-60 transition-opacity"
            >
              See the glazes &rarr;
            </Link>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
