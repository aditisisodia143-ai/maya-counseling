import { content } from "@/data/content";

export default function Faqs() {
  return (
    <section id="faqs" className="bg-secondary">
      <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <h2 className="text-center font-heading text-3xl text-primary md:text-4xl">Frequently Asked Questions</h2>
        <div className="mt-10 space-y-4">
          {content.faqs.map((f) => (
            <details key={f.q} className="group rounded-2xl bg-surface p-6 shadow-sm">
              <summary className="flex cursor-pointer list-none items-center justify-between font-semibold text-primary">
                {f.q}
                <span className="ml-4 text-accent transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}