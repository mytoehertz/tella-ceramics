// Stand-in image for the commission listing: there's no photo of a piece that
// doesn't exist yet, so it's a large grey ?! set in the site's own type.
export default function CommissionMark({ className = "" }) {
  return (
    <div
      role="img"
      aria-label="A large grey question mark and exclamation point"
      className={`aspect-square flex items-center justify-center bg-[#EFEBE4] select-none ${className}`}
    >
      <span
        aria-hidden="true"
        className="font-extralight leading-none tracking-[-0.14em] pr-[0.14em] text-[#A39E96] text-[9rem] sm:text-[12rem] lg:text-[14rem]"
      >
        ?!
      </span>
    </div>
  );
}
