import { content } from "@/data/content";

const CONTACT_EMAIL = "hello@drmayareynolds.com"; // placeholder: not in the profile

export default function Contact() {
  return (
    <>
      <section id="contact" className="bg-primary text-white">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center md:py-24">
          <h2 className="font-heading text-3xl md:text-4xl">Ready to take the first step?</h2>
          <p className="mt-5 text-lg opacity-90">
            Reach out to schedule a consultation with Dr. Maya Reynolds. Sessions are available in person in Santa Monica or by secure telehealth for clients located in California.
          </p>
          <a
            href={`mailto:${CONTACT_EMAIL}?subject=Consultation request`}
            className="mt-8 inline-block rounded-full bg-accent px-8 py-3 font-semibold text-ink transition hover:bg-white"
          >
            Book Now
          </a>
        </div>
      </section>
      <footer className="bg-ink text-sm text-white/80">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 md:flex-row md:justify-between">
          <p>© 2026 {content.brand}</p>
          <p>{content.office.address}</p>
        </div>
      </footer>
    </>
  );
}