import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";
import { skills } from "@/data/skills";

const techIconMap: Record<string, string> = {};
for (const cat of skills) {
  for (const s of cat.items) {
    if (s.icon) techIconMap[s.name.toLowerCase()] = s.icon;
  }
}

function getTechIcon(name: string): string | undefined {
  const lower = name.toLowerCase();
  if (techIconMap[lower]) return techIconMap[lower];
  for (const [key, url] of Object.entries(techIconMap)) {
    if (lower.includes(key) || key.includes(lower)) return url;
  }
  return undefined;
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};
  return {
    title: `${project.title} — Oman Khalid Butt`,
    description: project.subtitle,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <article className="max-w-4xl mx-auto px-6 py-16">
      <Link href="/#projects" className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text transition-colors mb-10">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
        </svg>
        Back to Projects
      </Link>

      <header className="mb-16">
        <p className="text-amber font-mono text-xs tracking-[0.2em] mb-3">PROJECT {String(project.number).padStart(2, "0")}</p>
        <h1 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-text mb-4 leading-tight tracking-tight">{project.title}</h1>
        <p className="text-lg text-text-secondary mb-8">{project.subtitle}</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {project.metrics.map((m) => (
            <div key={m.label} className="bg-surface rounded-xl p-4 border border-border text-center">
              <p className="text-xl font-bold text-amber font-mono">{m.value}</p>
              <p className="text-xs text-text-secondary mt-1">{m.label}</p>
            </div>
          ))}
        </div>
      </header>

      <section className="mb-16">
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-text mb-6">Overview</h2>
        <div className="bg-surface/80 backdrop-blur-sm rounded-xl p-6 border border-border">
          {project.overview.map((p, i) => (
            <p key={i} className="text-text leading-relaxed mb-4 last:mb-0">{p}</p>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-text mb-6">System Architecture</h2>
        <div className="space-y-0">
          {project.architecture.map((step, i) => {
            const [title, desc] = step.split(" — ");
            return (
              <div key={i} className="relative pl-8 pb-6 last:pb-0">
                <div className="absolute left-0 top-0 bottom-0 w-px bg-border-light" />
                <div className="absolute left-[-4px] top-1.5 w-2.5 h-2.5 rounded-full bg-amber" />
                <h3 className="text-text font-semibold text-sm">{title}</h3>
                {desc && <p className="text-text-secondary text-sm mt-1">{desc}</p>}
              </div>
            );
          })}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-text mb-6">Hardware</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border-light">
                <th className="text-left py-3 pr-4 text-amber font-semibold">Subsystem</th>
                <th className="text-left py-3 text-amber font-semibold">Selection &amp; Role</th>
              </tr>
            </thead>
            <tbody>
              {project.hardwareTable.map((row, i) => (
                <tr key={i} className="border-b border-border">
                  <td className="py-3 pr-4 text-text font-medium whitespace-nowrap">{row.subsystem}</td>
                  <td className="py-3 text-text-secondary">{row.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {project.video && (
        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-text mb-6">3D Prototype Showcase</h2>
          <div className="bg-surface rounded-xl overflow-hidden border border-border">
            <video
              src={project.video}
              controls
              autoPlay
              muted
              loop
              playsInline
              className="w-full aspect-video"
            />
          </div>
        </section>
      )}

      {project.images.length > 0 && (
        <section className="mb-16">
          <div className={`grid grid-cols-1 ${project.images.length > 1 ? "md:grid-cols-2" : ""} gap-6`}>
            {project.images.map((img, i) => (
              <figure key={i} className="bg-surface rounded-xl overflow-hidden border border-border">
                <div className="relative aspect-[4/3]">
                  <Image src={img.src} alt={img.caption} fill className="object-cover" />
                </div>
                <figcaption className="p-3 text-xs text-text-secondary font-mono">{img.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      {project.softwareAI && (
        <section className="mb-16">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-text mb-6">Software &amp; AI</h2>
          <div className="bg-surface/80 backdrop-blur-sm rounded-xl p-6 border border-border">
            {project.softwareAI.map((p, i) => (
              <p key={i} className="text-text leading-relaxed mb-4 last:mb-0">{p}</p>
            ))}
          </div>
        </section>
      )}

      <section className="mb-16">
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-text mb-6">Key Engineering Work</h2>
        <div className="bg-surface/80 backdrop-blur-sm rounded-xl p-6 border border-border">
          <ul className="space-y-3">
            {project.keyWork.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-text">
                <span className="mt-2 w-2 h-2 bg-amber rounded-full shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-text mb-6">Results &amp; Validation</h2>
        {project.resultsTables?.map((table, i) => (
          <div key={i} className="mb-6">
            <h3 className="text-sm font-semibold text-amber mb-3">{table.title}</h3>
            <div className="bg-surface rounded-xl border border-border overflow-hidden">
              {table.rows.map((row, j) => (
                <div key={j} className={`flex justify-between items-center px-4 py-3 ${j < table.rows.length - 1 ? "border-b border-border" : ""}`}>
                  <span className="text-sm text-text-secondary">{row.metric}</span>
                  <span className="text-sm font-mono text-amber font-medium">{row.value}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
        {project.resultsNotes && project.resultsNotes.length > 0 && (
          <div className="bg-surface/80 backdrop-blur-sm rounded-xl p-5 border border-border mt-4">
            {project.resultsNotes.map((note, i) => (
              <p key={i} className="text-text text-sm leading-relaxed mb-3 last:mb-0">{note}</p>
            ))}
          </div>
        )}
      </section>

      <section className="mb-16">
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-bold text-text mb-6">Technical Stack</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {project.techStack.map((stack) => (
            <div key={stack.category} className="bg-surface rounded-xl p-5 border border-border">
              <h3 className="text-xs font-bold text-amber mb-3 tracking-wider uppercase">{stack.category}</h3>
              <ul className="space-y-2">
                {stack.items.map((item) => {
                  const icon = getTechIcon(item);
                  return (
                    <li key={item} className="text-sm text-text-secondary flex items-center gap-2.5">
                      {icon ? (
                        <Image src={icon} alt={item} width={18} height={18} className="shrink-0" />
                      ) : (
                        <span className="w-[18px] h-[18px] flex items-center justify-center shrink-0">
                          <span className="w-1.5 h-1.5 bg-border-light rounded-full" />
                        </span>
                      )}
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <div className="flex justify-between items-center pt-8 border-t border-border">
        <Link href="/#projects" className="text-sm text-text-secondary hover:text-text transition-colors">
          ← All Projects
        </Link>
        {(() => {
          const idx = projects.findIndex((p) => p.slug === slug);
          const next = projects[(idx + 1) % projects.length];
          return (
            <Link href={`/projects/${next.slug}`} className="text-sm text-amber hover:text-amber-light transition-colors">
              Next: {next.title.split(" ").slice(0, 4).join(" ")}... →
            </Link>
          );
        })()}
      </div>
    </article>
  );
}
