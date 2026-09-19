"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/profile";
import { useTheme } from "./ThemeProvider";
import { ArrowIcon, MoonIcon, SunIcon } from "./Icons";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#resume", label: "Resume" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-paper/85 backdrop-blur-md border-b border-line"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-5 md:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="font-medium tracking-tight">
          {profile.name}
        </a>
        <div className="hidden lg:flex items-center gap-7 text-[13px] text-muted">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-ink transition-colors">
              {l.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Toggle color theme"
            className="h-9 w-9 rounded-full border border-line flex items-center justify-center hover:bg-accent-soft transition-colors"
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 h-9 px-4 rounded-full bg-ink text-paper text-[13px] hover:opacity-90 transition"
          >
            Let&apos;s Talk <ArrowIcon />
          </a>
          <button
            className="lg:hidden h-9 w-9 rounded-full border border-line flex flex-col items-center justify-center gap-1.5"
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className={`block h-px w-4 bg-ink transition ${open ? "translate-y-[4px] rotate-45" : ""}`} />
            <span className={`block h-px w-4 bg-ink transition ${open ? "opacity-0" : ""}`} />
            <span className={`block h-px w-4 bg-ink transition ${open ? "-translate-y-[4px] -rotate-45" : ""}`} />
          </button>
        </div>
      </nav>

      <div
        className={`lg:hidden fixed inset-0 top-16 bg-paper/95 backdrop-blur-md transition ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="px-6 py-8 flex flex-col gap-5 text-2xl font-display">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex items-center gap-2 text-base"
          >
            Let&apos;s Talk <ArrowIcon />
          </a>
        </div>
      </div>
    </header>
  );
}
