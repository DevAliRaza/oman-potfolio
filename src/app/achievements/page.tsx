import Image from "next/image";
import Link from "next/link";
import {
  certifications,
  recognitions,
  publications,
} from "@/data/achievements";

export const metadata = {
  title: "Achievements & Certificates — Oman Khalid Butt",
  description:
    "Certifications, competition wins, publications and professional recognitions.",
};

export default function AchievementsPage() {
  return (
    <article className="max-w-4xl mx-auto px-6 py-16">
      <Link
        href="/#achievements"
        className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text transition-colors mb-10"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
        </svg>
        Back to Home
      </Link>

      <header className="mb-16">
        <h1 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-text mb-4 leading-tight tracking-tight">
          Achievements & Certificates
        </h1>
        <p className="text-lg text-text-secondary">
          Certifications, competition wins, professional recognitions and peer-reviewed publications.
        </p>
      </header>

      {/* Certifications */}
      <section className="mb-16">
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-text mb-8">
          Professional Certifications
        </h2>
        <div className="space-y-8">
          {certifications.map((cert, i) => (
            <div
              key={i}
              className="bg-surface rounded-xl border border-border overflow-hidden"
            >
              <div className="flex flex-col md:flex-row">
                {cert.image && (
                  <div className="md:w-56 md:min-h-40 shrink-0 bg-surface-light border-b md:border-b-0 md:border-r border-border">
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={cert.image}
                        alt={cert.title}
                        fill
                        className="object-contain p-3"
                      />
                    </div>
                  </div>
                )}
                <div className="p-5 sm:p-6 flex flex-col justify-center">
                  <p className="text-xs text-text-secondary font-mono mb-2">
                    {cert.issuer}
                  </p>
                  <h3 className="text-base sm:text-lg font-bold text-text mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-amber text-xs font-mono mb-3">
                    {cert.date}
                  </p>
                  <p className="text-sm text-text-secondary leading-relaxed mb-4">
                    {cert.description}
                  </p>
                  {cert.verifyUrl && (
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-amber hover:text-amber-light transition-colors font-medium"
                    >
                      Verify Certificate
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recognitions */}
      <section className="mb-16">
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-text mb-8">
          Recognitions & Achievements
        </h2>
        <div className="space-y-8">
          {recognitions.map((rec, i) => (
            <div
              key={i}
              className="bg-surface rounded-xl border border-border overflow-hidden"
            >
              <div className="flex flex-col md:flex-row">
                {rec.image && (
                  <div className="md:w-56 md:min-h-40 shrink-0 bg-surface-light border-b md:border-b-0 md:border-r border-border">
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={rec.image}
                        alt={rec.title}
                        fill
                        className="object-contain p-3"
                      />
                    </div>
                  </div>
                )}
                <div className="p-5 sm:p-6 flex flex-col justify-center">
                  <p className="text-xs text-text-secondary font-mono mb-2">
                    {rec.issuer}
                  </p>
                  <h3 className="text-base sm:text-lg font-bold text-text mb-2">
                    {rec.title}
                  </h3>
                  <p className="text-amber text-xs font-mono mb-3">
                    {rec.date}
                  </p>
                  <p className="text-sm text-text-secondary leading-relaxed mb-4">
                    {rec.description}
                  </p>
                  {rec.linkedinUrl && (
                    <a
                      href={rec.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-amber hover:text-amber-light transition-colors font-medium"
                    >
                      View on LinkedIn
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Publications */}
      <section className="mb-16">
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-text mb-8">
          Publications
        </h2>
        <div className="space-y-8">
          {publications.map((pub, i) => (
            <div
              key={i}
              className="bg-surface rounded-xl border border-border overflow-hidden"
            >
              {pub.image && (
                <div className="bg-surface-light">
                  <div className="relative aspect-[16/9] max-h-64">
                    <Image
                      src={pub.image}
                      alt={pub.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              )}
              <div className="p-5 sm:p-6">
                <p className="text-xs text-text-secondary font-mono mb-2">
                  {pub.venue}
                </p>
                <h3 className="text-base sm:text-lg font-bold text-text mb-2 leading-snug">
                  {pub.title}
                </h3>
                <p className="text-sm text-text-secondary mb-1">
                  {pub.authors}
                </p>
                <p className="text-amber text-xs font-mono mb-4">
                  Published: {pub.date}
                </p>
                <p className="text-sm text-text-secondary leading-relaxed mb-4">
                  {pub.abstract}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {pub.keywords.map((kw) => (
                    <span
                      key={kw}
                      className="text-xs px-2.5 py-1 bg-surface-light text-text-secondary rounded-full font-mono"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
                <a
                  href={pub.doiUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-amber hover:text-amber-light transition-colors font-medium"
                >
                  View Publication
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="pt-8 border-t border-border">
        <Link
          href="/"
          className="text-sm text-text-secondary hover:text-text transition-colors"
        >
          ← Back to Home
        </Link>
      </div>
    </article>
  );
}
