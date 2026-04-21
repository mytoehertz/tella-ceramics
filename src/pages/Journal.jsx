import entries from "../data/journal";
import FadeInUp from "../components/FadeInUp";

export default function Journal() {
  return (
    <section className="pt-28 md:pt-32 pb-24 px-6">
      <div className="max-w-[680px] mx-auto">
        <FadeInUp>
          <h1 className="text-3xl font-light tracking-wide mb-4">Journal</h1>
          <p className="font-light text-[#2C2C2C]/60 mb-16">
            Notes from the studio.
          </p>
        </FadeInUp>

        {entries.map((entry, index) => (
          <FadeInUp key={entry.id}>
            <article
              className={`${index > 0 ? "border-t border-[#E0DBD3] pt-12 mt-12" : ""}`}
            >
              <p className="text-sm font-light text-[#2C2C2C]/60 mb-3">
                {entry.date}
              </p>
              <h2 className="text-2xl font-light tracking-wide mb-8">
                {entry.title}
              </h2>
              {entry.body.map((paragraph, i) => (
                <p key={i} className="font-light leading-[1.8] mb-6">
                  {paragraph}
                </p>
              ))}
            </article>
          </FadeInUp>
        ))}
      </div>
    </section>
  );
}
