import { content } from "@/data/content";

export default function About() {
  const { tagline, h2, paragraphs, image } = content.about;
  return (
    <section id="about" className="bg-surface">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
        <img src={image} alt="Dr. Maya Reynolds" className="h-96 w-full rounded-2xl bg-primary/10 object-cover md:h-[32rem]" />
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-accent">{tagline}</p>
          <h2 className="font-heading text-3xl text-primary md:text-4xl">{h2}</h2>
          {paragraphs.map((p) => (
            <p key={p} className="mt-5 text-lg leading-relaxed">{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}