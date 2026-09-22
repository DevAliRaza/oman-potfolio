import { notFound } from "next/navigation";
import Link from "next/link";
import { experiences } from "@/data/experience";

export function generateStaticParams() {
  return experiences.map((e) => ({ slug: e.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const exp = experiences.find((e) => e.slug === params.slug);
  if (!exp) return {};
  return {
    title: `${exp.role} at ${exp.company} — Oman Khalid Butt`,
    description: `${exp.role} at ${exp.company}, ${exp.period}`,
  };
}

export default async function ExperiencePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const exp = experiences.find((e) => e.slug === slug);
  if (!exp) notFound();

  const idx = experiences.findIndex((e) => e.slug === slug);
  const next = experiences[(idx + 1) % experiences.length];

  return (
    <article className="max-w-4xl mx-auto px-6 py-16">
      <Link href="/#experience" className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text transition-colors mb-10">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
        </svg>
        Back to Experience
      </Link>

      <header className="mb-16">
        <p className="text-amber font-mono text-xs tracking-[0.2em] mb-3">{exp.period}</p>
        <h1 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-text mb-3 leading-tight tracking-tight">
          {exp.role}
        </h1>
        <p className="text-lg text-text-secondary">{exp.company}</p>
      </header>

      <section className="mb-16">
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-text mb-6">Work Contributions</h2>
        <ul className="space-y-4">
          {exp.workContributions.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-text leading-relaxed">
              <span className="mt-2 w-2 h-2 bg-amber rounded-full shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-16">
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-text mb-6">Key Achievements</h2>
        <div className="space-y-4">
          {exp.keyAchievements.map((item, i) => (
            <div key={i} className="bg-surface rounded-xl p-5 border border-border">
              <p className="text-text leading-relaxed text-sm">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-text mb-6">Technologies & Skills</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {exp.technologies.map((tech) => (
            <div key={tech.category} className="bg-surface rounded-xl p-5 border border-border">
              <h3 className="text-xs font-bold text-amber mb-3 tracking-wider uppercase">{tech.category}</h3>
              <div className="flex flex-wrap gap-2">
                {tech.items.map((item) => (
                  <span key={item} className="text-xs px-3 py-1.5 bg-surface-light text-text rounded-lg font-mono">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="flex justify-between items-center pt-8 border-t border-border">
        <Link href="/#experience" className="text-sm text-text-secondary hover:text-text transition-colors">
          ← All Experience
        </Link>
        {next.slug !== slug && (
          <Link href={`/experience/${next.slug}`} className="text-sm text-amber hover:text-amber-light transition-colors">
            Next: {next.company.split(" ").slice(0, 3).join(" ")}... →
          </Link>
        )}
      </div>
    </article>
  );
}
