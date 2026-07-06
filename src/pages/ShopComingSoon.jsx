// Vertical beams — light finding its way through slits in a dark room.
// Each beam is a soft warm bar with a vertical fade mask; it breathes on
// its own timing so the whole thing feels alive rather than looped.
const beams = [
  { left: 13, w: 3, blur: 12, delay: 0.4, dur: 7.0, min: 0.28, max: 0.75, tint: "255, 238, 210" },
  { left: 26, w: 5, blur: 20, delay: 1.6, dur: 9.0, min: 0.42, max: 0.95, tint: "255, 244, 222" },
  { left: 40, w: 2, blur: 8, delay: 0.9, dur: 6.2, min: 0.22, max: 0.62, tint: "255, 236, 206" },
  { left: 51, w: 8, blur: 28, delay: 0.0, dur: 8.2, min: 0.5, max: 1.0, tint: "255, 247, 230" },
  { left: 64, w: 3, blur: 12, delay: 2.1, dur: 7.6, min: 0.3, max: 0.82, tint: "255, 242, 218" },
  { left: 77, w: 5, blur: 18, delay: 1.1, dur: 8.6, min: 0.36, max: 0.9, tint: "255, 244, 222" },
  { left: 89, w: 2, blur: 8, delay: 0.6, dur: 6.6, min: 0.2, max: 0.58, tint: "255, 236, 206" },
];

export default function ShopComingSoon() {
  return (
    <div className="fixed inset-0 z-[60] w-full h-full overflow-hidden bg-[#050505]">
      {/* Beams — the container reveals with a slow vertical bloom */}
      <div
        className="absolute inset-0"
        style={{
          transformOrigin: "center",
          animation: "slit-reveal 1.6s cubic-bezier(0.22, 1, 0.36, 1) both",
        }}
      >
        {beams.map((b, i) => (
          <span
            key={i}
            className="absolute top-0 bottom-0 block"
            style={{
              left: `${b.left}%`,
              width: `${b.w}px`,
              background: `rgba(${b.tint}, 0.92)`,
              filter: `blur(${b.blur}px)`,
              transformOrigin: "center",
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
              maskImage:
                "linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)",
              "--slit-min": b.min,
              "--slit-max": b.max,
              animation: `slit-breathe ${b.dur}s ease-in-out ${b.delay}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Warm glow where the light gathers, plus a vignette to deepen the dark */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 45% at 51% 42%, rgba(255, 240, 214, 0.14), transparent 70%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 50% 40%, transparent 55%, rgba(0,0,0,0.85) 100%)",
        }}
      />

      {/* Words */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <p className="mb-6 text-[11px] uppercase tracking-[0.5em] text-[#F5EEE0]/50">
          Serie Taína
        </p>
        <h1
          className="text-4xl md:text-6xl font-extralight tracking-[0.15em] text-[#F5EEE0]"
          style={{ textShadow: "0 0 40px rgba(255,240,214,0.25)" }}
        >
          Coming Soon
        </h1>
      </div>
    </div>
  );
}
