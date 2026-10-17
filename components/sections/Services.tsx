import { content } from "@/data/content";

export default function Services() {
  const { h2, items } = content.services;
  return (
    <section id="services" className="bg-secondary">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <h2 className="mx-auto max-w-2xl text-center font-heading text-3xl text-primary md:text-4xl">{h2}</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {items.map((s) => (
            <article key={s.title} className="overflow-hidden rounded-2xl bg-surface shadow-sm">
              <img src={s.image} alt={s.title} className="h-56 w-full bg-primary/10 object-cover" />
              <div className="p-6">
                <h3 className="font-heading text-xl text-primary">{s.title}</h3>
                <p className="mt-3 leading-relaxed">{s.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}