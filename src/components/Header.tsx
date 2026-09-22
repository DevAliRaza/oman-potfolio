"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
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
        <Link href="/" className="font-[family-name:var(--font-display)] text-lg font-bold text-accent hover:text-accent-light transition-colors tracking-wider">
          OKB
        </Link>
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
                  className={`text-sm text-text-secondary hover:text-accent transition-colors px-3 py-1.5 rounded-full hover:bg-accent/5 ${link.label === "Contact" ? "text-accent border border-accent/40 hover:bg-accent/10 hover:border-accent ml-2" : ""}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
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
          </ul>
        </div>
      )}
    </header>
  );
}
