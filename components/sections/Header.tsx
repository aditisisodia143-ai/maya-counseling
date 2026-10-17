"use client";
import { useState } from "react";
import { content } from "@/data/content";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-secondary bg-surface/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="font-heading text-xl text-primary">{content.brand}</a>
        <nav className="hidden gap-8 md:flex">
          {content.nav.map((n) => (
            <a key={n.href} href={n.href} className="text-sm hover:text-accent">{n.label}</a>
          ))}
        </nav>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">☰</button>
      </div>
      {open && (
        <nav className="flex flex-col gap-4 border-t border-secondary px-6 py-4 md:hidden">
          {content.nav.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)}>{n.label}</a>
          ))}
        </nav>
      )}
    </header>
  );
}