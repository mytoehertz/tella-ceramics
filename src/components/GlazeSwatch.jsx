// Renders a glaze test tile — the real photo if it's been added to
// src/assets/glaze-tiles/, otherwise a color placeholder in the glaze's
// hue with the light-slit motif that ties the shop together.
export default function GlazeSwatch({ glaze, className = "" }) {
  if (glaze.image) {
    return (
      <div className={`overflow-hidden ${className}`}>
        <img
          src={glaze.image}
          alt={`${glaze.name} glaze — ${glaze.color} test tile`}
          className="w-full aspect-square object-cover"
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div
      className={`relative aspect-square overflow-hidden ${className}`}
      style={{
        background: `linear-gradient(150deg, ${glaze.tone[0]}, ${glaze.tone[1]})`,
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(55% 45% at 62% 68%, ${glaze.sheen}, transparent 70%)`,
        }}
      />
      <div
        className="absolute inset-y-0 left-[38%] w-[2px]"
        style={{
          background: "rgba(255,255,255,0.55)",
          filter: "blur(3px)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 25%, black 75%, transparent)",
          maskImage:
            "linear-gradient(to bottom, transparent, black 25%, black 75%, transparent)",
        }}
      />
      <span className="absolute bottom-3 left-3 rounded-full bg-black/25 px-2 py-1 text-[9px] uppercase tracking-[0.2em] text-white/90">
        Photo soon
      </span>
    </div>
  );
}
