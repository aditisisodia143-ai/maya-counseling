import { content } from "@/data/content";

export default function Hero() {
  const { tagline, h1, subtext, cta, images } = content.hero;
  return (
    <section className="bg-secondary">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">{tagline}</p>
          <h1 className="font-heading text-4xl leading-tight text-primary md:text-5xl">{h1}</h1>
          <p className="mt-6 text-lg">{subtext}</p>
          <a href="#contact" className="mt-8 inline-block rounded-full bg-primary px-8 py-3 text-white transition hover:bg-ink">
            {cta}
          </a>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {images.map((src, i) => (
            <img key={src} src={src} alt="" className={`h-72 w-full rounded-2xl bg-primary/10 object-cover md:h-96 ${i === 1 ? "mt-8" : ""}`} />
          ))}
        </div>
      </div>
    </section>
  );
}