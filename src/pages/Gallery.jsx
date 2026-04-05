import { useState } from "react";
import pieces, { heroBowl } from "../data/pieces";
import GalleryCard from "../components/GalleryCard";
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
      </div>

      {selected && (
        <Lightbox piece={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
