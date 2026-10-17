import { content } from "@/data/content";

export default function Office() {
  const { tagline, h2, text, address, images } = content.office;
  return (
    <section id="office" className="bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent">{tagline}</p>
          <h2 className="font-heading text-3xl text-primary md:text-4xl">{h2}</h2>
          <p className="mt-5 text-lg leading-relaxed">{text}</p>
          <p className="mt-4 font-semibold text-primary">📍 {address}</p>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {images.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={`Therapy office in Santa Monica, view ${i + 1}`}
              className="h-64 w-full rounded-2xl bg-primary/10 object-cover md:h-80"
            />
          ))}
        </div>
      </div>
    </section>
  );
}