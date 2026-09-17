import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import market from "../data/market";
import marketTable from "../assets/MarketTable.jpg";

const storageKey = `tella-market-dismissed:${market.id}`;

function alreadyDismissed() {
  try {
    return localStorage.getItem(storageKey) === "1";
  } catch {
    return false;
  }
}

// Shown once per visitor, on any page but the post-payment one, until the
// market closes. Dismissal is remembered per market, so the next one shows
// again without anyone clearing anything.
export default function MarketPopup() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const closeRef = useRef(null);

  useEffect(() => {
    if (Date.now() > new Date(market.endsAt).getTime()) return;
    if (location.pathname.startsWith("/commissions/thanks")) return;
    if (alreadyDismissed()) return;
    const timer = setTimeout(() => setOpen(true), 900);
    return () => clearTimeout(timer);
    // Only decide on first load — navigating shouldn't re-trigger it.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!open) return;
    const previouslyFocused = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (event) => event.key === "Escape" && dismiss();
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus?.();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  function dismiss() {
    setOpen(false);
    try {
      localStorage.setItem(storageKey, "1");
    } catch {
      // Private mode or blocked storage — it just shows again next visit.
    }
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-end sm:items-center justify-center bg-[#2C2C2C]/40 backdrop-blur-[2px] p-0 sm:p-6 animate-fade-in-up"
      onClick={dismiss}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="market-title"
        onClick={(event) => event.stopPropagation()}
        className="relative w-full sm:max-w-[460px] max-h-[92vh] overflow-y-auto bg-[#FAF7F2] shadow-[0_20px_60px_rgba(0,0,0,0.18)]"
      >
        <button
          ref={closeRef}
          onClick={dismiss}
          aria-label="Close"
          className="absolute top-3 right-3 z-10 w-9 h-9 flex items-center justify-center bg-[#FAF7F2]/90 text-[#2C2C2C] hover:opacity-60 transition-opacity cursor-pointer"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.25" aria-hidden="true">
            <path d="M1 1l12 12M13 1L1 13" />
          </svg>
        </button>

        <img
          src={marketTable}
          alt="Serie Taína pieces laid out on a studio table — blue and speckled bowls, plates, and lidded jars"
          className="w-full aspect-[4/3] object-cover"
        />

        <div className="px-6 sm:px-8 pt-7 pb-8">
          <p className="text-[11px] uppercase tracking-[0.4em] text-[#2C2C2C]/40">
            Serie Taína
          </p>
          <h2
            id="market-title"
            className="mt-3 text-4xl font-light tracking-tight"
          >
            First market.
          </h2>

          <div className="mt-6 border-t border-[#E0DBD3] pt-5">
            <p className="font-light">
              {market.dateLabel} &middot; {market.hoursLabel}
            </p>
            <p className="mt-1 text-sm font-light leading-[1.7] text-[#2C2C2C]/60">
              {market.name} &middot; {market.where}
            </p>
            <p className="mt-3 text-sm font-light text-[#2C2C2C]/60">
              Forecast: {market.forecast.charAt(0).toLowerCase() + market.forecast.slice(1)} &mdash; a good day to walk over from the park.
            </p>
          </div>

          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <a
              href={market.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center bg-[#2C2C2C] text-[#FAF7F2] px-5 py-3 text-sm tracking-wide font-light hover:bg-[#2C2C2C]/85 transition-colors"
            >
              Get directions &uarr;
            </a>
            <Link
              to="/shop"
              onClick={dismiss}
              className="flex-1 text-center border border-[#2C2C2C] px-5 py-3 text-sm tracking-wide font-light hover:bg-[#2C2C2C] hover:text-[#FAF7F2] transition-colors"
            >
              Commissions open
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
