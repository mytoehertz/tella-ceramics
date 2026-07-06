// A loose, hand-drawn underline — like a quick flick from an ink pen.
// Wrap any text: <InkUnderline>View Gallery</InkUnderline>. Pass `color`
// (e.g. white on the dark shop page) to change the ink.
export default function InkUnderline({
  children,
  color = "#2C2C2C",
  className = "",
}) {
  return (
    <span className={`relative inline-block ${className}`}>
      {children}
      <svg
        className="pointer-events-none absolute left-0 w-full overflow-visible"
        style={{ bottom: "-0.22em", height: "0.5em" }}
        viewBox="0 0 100 8"
        preserveAspectRatio="none"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M1.5 5.6 C 18 2.4, 33 7.6, 50 5 C 66 2.7, 82 7.3, 98.5 3.6"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
