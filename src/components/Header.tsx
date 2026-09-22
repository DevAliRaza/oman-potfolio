"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Achievements", href: "/#achievements" },
  { label: "Contact", href: "/#contact" },
];

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-header-bg backdrop-blur-md border-b border-accent/10">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/923026802896"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent hover:bg-accent/20 transition-all"
            aria-label="WhatsApp"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </a>
          <Link href="/" className="font-[family-name:var(--font-display)] text-lg font-bold text-accent hover:text-accent-light transition-colors tracking-wider">
            OKB
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <button
            className="md:hidden text-text-secondary hover:text-text"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          <ul className="hidden md:flex items-center gap-1">
            {!isHome && (
              <li>
                <Link href="/" className="text-sm text-text-secondary hover:text-accent transition-colors px-3 py-1.5 rounded-full hover:bg-accent/5">
                  Home
                </Link>
              </li>
            )}
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm text-text-secondary hover:text-accent transition-colors px-3 py-1.5 rounded-full hover:bg-accent/5"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="ml-2">
              <a href="#contact" className="text-sm px-5 py-2 rounded-full border border-accent/40 text-accent hover:bg-accent/10 hover:border-accent transition-all">
                GET IN TOUCH
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {menuOpen && (
        <div className="md:hidden bg-header-bg backdrop-blur-md border-b border-accent/10 px-6 pb-4">
          <ul className="flex flex-col gap-3">
            {!isHome && (
              <li>
                <Link href="/" className="text-sm text-text-secondary hover:text-accent" onClick={() => setMenuOpen(false)}>
                  Home
                </Link>
              </li>
            )}
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="text-sm text-text-secondary hover:text-accent" onClick={() => setMenuOpen(false)}>
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <a href="#contact" className="inline-block text-sm px-5 py-2 rounded-full border border-accent/40 text-accent" onClick={() => setMenuOpen(false)}>
                GET IN TOUCH
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
