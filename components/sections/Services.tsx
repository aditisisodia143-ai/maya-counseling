"use client";
import { useState } from "react";
import { content } from "@/data/content";

const gradients = [
  "from-primary/80 to-secondary",
  "from-accent/70 to-secondary",
  "from-secondary to-primary/60",
];

function CardImage({ src, alt, i }: { src: string; alt: string; i: number }) {
  const [failed, setFailed] = useState(false);
  return (
    <div className={`h-56 w-full bg-gradient-to-br ${gradients[i % 3]}`}>
      {!failed && (
        <img src={src} alt={alt} onError={() => setFailed(true)} className="h-full w-full object-cover" />
      )}
    </div>
  );
}

export default function Services() {
  const { h2, items } = content.services;
  return (
    <section id="services" className="bg-secondary">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <h2 className="mx-auto max-w-2xl text-center font-heading text-3xl text-primary md:text-4xl">{h2}</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {items.map((s, i) => (
            <article key={s.title} className="overflow-hidden rounded-2xl bg-surface shadow-sm">
              <CardImage src={s.image} alt={s.title} i={i} />
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