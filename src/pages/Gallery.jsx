import { useState } from "react";
import pieces, { heroBowl } from "../data/pieces";
import glazes from "../data/glazes";
import GalleryCard from "../components/GalleryCard";
import GlazeSwatch from "../components/GlazeSwatch";
import Lightbox from "../components/Lightbox";
import FadeInUp from "../components/FadeInUp";

export default function Gallery() {
  const [selected, setSelected] = useState(null);
  const featured = pieces[0];
  const grid = pieces.slice(1);

  return (
    <section className="pt-28 md:pt-32 pb-24 px-6">
      <div className="max-w-[1200px] mx-auto">
        {/* Featured piece */}
        <FadeInUp>
          <div className="mb-16">
            <div className="overflow-hidden">
              <img
                src={heroBowl}
                alt={featured.name}
                className="w-full h-auto max-h-[900px] object-cover"
              />
            </div>
            <div className="mt-6 flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <h2 className="text-2xl font-light tracking-wide">
                {featured.name}
              </h2>
              <div className="flex items-center gap-6 md:text-right">
                <p className="text-sm font-light text-[#2C2C2C]/60">
                  {featured.description}
                </p>
                <button
                  onClick={() => setSelected(featured)}
                  className="text-sm tracking-wide font-light whitespace-nowrap hover:opacity-60 transition-opacity cursor-pointer"
                >
                  Inquire
                </button>
              </div>
            </div>
          </div>
        </FadeInUp>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
          {grid.map((piece) => (
            <FadeInUp key={piece.id}>
              <GalleryCard piece={piece} onClick={setSelected} />
            </FadeInUp>
          ))}
        </div>

        {/* Serie Taína — first glaze tests */}
        <div className="mt-24 border-t border-[#E0DBD3] pt-16">
          <FadeInUp>
            <p className="mb-3 text-[11px] uppercase tracking-[0.4em] text-[#2C2C2C]/40">
              Serie Taína — first glaze tests
            </p>
          </FadeInUp>
          <FadeInUp>
            <h2 className="mb-4 text-2xl font-light tracking-wide">
              Results from the first batch of testing
            </h2>
          </FadeInUp>
          <FadeInUp>
            <p className="mb-10 max-w-[600px] font-light leading-[1.8] text-[#2C2C2C]/70">
              Five glazes off one base, each pushed somewhere different. These
              test tiles are how I locked in the colors before pulling them onto
              black clay for the shop.
            </p>
          </FadeInUp>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-10">
            {glazes.map((glaze) => (
              <FadeInUp key={glaze.id}>
                <GlazeSwatch glaze={glaze} />
                <div className="mt-3">
                  <h3 className="text-sm font-normal">{glaze.name}</h3>
                  <p className="mt-1 text-xs font-light text-[#2C2C2C]/50">
                    {glaze.color}
                  </p>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </div>

      {selected && (
        <Lightbox piece={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
