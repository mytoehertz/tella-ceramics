import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import FadeInUp from "../components/FadeInUp";
import CommissionMark from "../components/CommissionMark";
import commission, { STRIPE_PAYMENT_LINK } from "../data/commission";

const buttonClass =
  "inline-block w-full sm:w-auto text-center bg-[#2C2C2C] text-[#FAF7F2] px-8 py-3.5 text-sm tracking-wide font-light hover:bg-[#2C2C2C]/85 transition-colors";

export default function Shop() {
  const { hash } = useLocation();

  // The router doesn't jump to anchors, and /shop#terms is linked from the
  // footer and from Stripe's checkout — so scroll there once the page renders.
  useEffect(() => {
    if (!hash) return;
    const target = document.getElementById(hash.slice(1));
    if (target) requestAnimationFrame(() => target.scrollIntoView());
  }, [hash]);

  return (
    <section className="pt-28 md:pt-32 pb-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        <FadeInUp>
          <p className="mb-10 text-[11px] uppercase tracking-[0.4em] text-[#2C2C2C]/40">
            Shop
          </p>
        </FadeInUp>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <FadeInUp>
            <CommissionMark />
          </FadeInUp>

          <FadeInUp>
            <div>
              <p className="text-[11px] uppercase tracking-[0.25em] text-[#2C2C2C]/40">
                Commissions open
              </p>
              <h1 className="mt-2 text-3xl md:text-4xl font-light tracking-wide">
                {commission.title}
              </h1>
              <p className="mt-4 text-xl font-light">
                ${commission.deposit}{" "}
                <span className="text-base text-[#2C2C2C]/50">deposit</span>
              </p>

              <p className="mt-8 font-light leading-[1.8] text-[#2C2C2C]/70">
                {commission.summary}
              </p>

              <ol className="mt-8 flex flex-col gap-3">
                {commission.steps.map((step, i) => (
                  <li key={step} className="flex gap-4 text-sm font-light leading-[1.7]">
                    <span className="text-[#2C2C2C]/35 tabular-nums">{i + 1}</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>

              <div className="mt-10">
                {STRIPE_PAYMENT_LINK ? (
                  <a href={STRIPE_PAYMENT_LINK} className={buttonClass}>
                    Pay ${commission.deposit} deposit
                  </a>
                ) : (
                  <Link
                    to={`/contact?piece=${encodeURIComponent(commission.title)}`}
                    className={buttonClass}
                  >
                    Request a commission
                  </Link>
                )}
                <p className="mt-4 text-sm font-light text-[#2C2C2C]/50">
                  Non-refundable &middot; credited toward your final price &middot;{" "}
                  <a href="#terms" className="underline underline-offset-4 hover:opacity-60 transition-opacity">
                    terms
                  </a>
                </p>
              </div>
            </div>
          </FadeInUp>
        </div>

        {/* Terms — also the terms-of-service URL given to Stripe */}
        <div
          id="terms"
          className="mt-24 border-t border-[#E0DBD3] pt-16 max-w-[640px] scroll-mt-28"
        >
          <FadeInUp>
            <p className="mb-4 text-[11px] uppercase tracking-[0.4em] text-[#2C2C2C]/40">
              Commission terms
            </p>
          </FadeInUp>
          <FadeInUp>
            <ul className="flex flex-col gap-3 font-light leading-[1.8] text-[#2C2C2C]/70">
              {commission.terms.map((term) => (
                <li key={term}>{term}</li>
              ))}
            </ul>
          </FadeInUp>
        </div>

        <div className="mt-16 max-w-[640px]">
          <FadeInUp>
            <Link
              to="/shop/collection"
              className="text-sm tracking-wide font-light hover:opacity-60 transition-opacity"
            >
              See the Serie Taína glazes &rarr;
            </Link>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}
