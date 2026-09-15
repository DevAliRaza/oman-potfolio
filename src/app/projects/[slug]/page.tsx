import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

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
      {/* Back link */}
      <Link href="/#projects" className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors mb-10">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
        </svg>
        Back to Projects
      </Link>

      {/* Hero */}
      <header className="mb-16">
        <p className="text-blue-400 font-mono text-sm mb-3 tracking-wider">PROJECT {project.number}</p>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">{project.title}</h1>
        <p className="text-lg text-slate-400 mb-8">{project.subtitle}</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {project.metrics.map((m) => (
            <div key={m.label} className="bg-slate-800 rounded-xl p-4 border border-slate-700 text-center">
              <p className="text-xl font-bold text-blue-400">{m.value}</p>
              <p className="text-xs text-slate-400 mt-1">{m.label}</p>
            </div>
          ))}
        </div>
      </header>

      {/* Overview */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white mb-6">Overview</h2>
        {project.overview.map((p, i) => (
          <p key={i} className="text-slate-300 leading-relaxed mb-4">{p}</p>
        ))}
      </section>

      {/* Architecture */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white mb-6">System Architecture</h2>
        <div className="space-y-0">
          {project.architecture.map((step, i) => {
            const [title, desc] = step.split(" — ");
            return (
              <div key={i} className="relative pl-8 pb-6 last:pb-0">
                <div className="absolute left-0 top-0 bottom-0 w-px bg-blue-500/30" />
                <div className="absolute left-[-4px] top-1.5 w-2.5 h-2.5 rounded-full bg-blue-500" />
                <h3 className="text-white font-semibold text-sm">{title}</h3>
                {desc && <p className="text-slate-400 text-sm mt-1">{desc}</p>}
              </div>
            );
          })}
        </div>
      </section>

      {/* Hardware */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white mb-6">Hardware</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-700">
                <th className="text-left py-3 pr-4 text-blue-400 font-semibold">Subsystem</th>
                <th className="text-left py-3 text-blue-400 font-semibold">Selection &amp; Role</th>
              </tr>
            </thead>
            <tbody>
              {project.hardwareTable.map((row, i) => (
                <tr key={i} className="border-b border-slate-800">
                  <td className="py-3 pr-4 text-white font-medium whitespace-nowrap">{row.subsystem}</td>
                  <td className="py-3 text-slate-300">{row.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Images */}
      {project.images.length > 0 && (
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.images.map((img, i) => (
              <figure key={i} className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700">
                <div className="relative aspect-[4/3]">
                  <Image src={img.src} alt={img.caption} fill className="object-cover" />
                </div>
                <figcaption className="p-3 text-xs text-slate-400">{img.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}

      {/* Software & AI */}
      {project.softwareAI && (
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Software &amp; AI</h2>
          {project.softwareAI.map((p, i) => (
            <p key={i} className="text-slate-300 leading-relaxed mb-4">{p}</p>
          ))}
        </section>
      )}

      {/* Key Engineering Work */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white mb-6">Key Engineering Work</h2>
        <ul className="space-y-3">
          {project.keyWork.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-slate-300">
              <span className="mt-1.5 w-2 h-2 bg-blue-500 rounded-full shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Results */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white mb-6">Results &amp; Validation</h2>
        {project.resultsTables?.map((table, i) => (
          <div key={i} className="mb-6">
            <h3 className="text-sm font-semibold text-blue-400 mb-3">{table.title}</h3>
            <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
              {table.rows.map((row, j) => (
                <div key={j} className={`flex justify-between items-center px-4 py-3 ${j < table.rows.length - 1 ? "border-b border-slate-700/50" : ""}`}>
                  <span className="text-sm text-slate-300">{row.metric}</span>
                  <span className="text-sm font-mono text-blue-400 font-medium">{row.value}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
        {project.resultsNotes?.map((note, i) => (
          <p key={i} className="text-slate-300 text-sm leading-relaxed mb-3">{note}</p>
        ))}
      </section>

      {/* Tech Stack */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white mb-6">Technical Stack</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {project.techStack.map((stack) => (
            <div key={stack.category} className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50">
              <h3 className="text-xs font-bold text-blue-400 mb-3 tracking-wider uppercase">{stack.category}</h3>
              <ul className="space-y-1.5">
                {stack.items.map((item) => (
                  <li key={item} className="text-sm text-slate-300 flex items-center gap-2">
                    <span className="w-1 h-1 bg-slate-500 rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Navigation */}
      <div className="flex justify-between items-center pt-8 border-t border-slate-800">
        <Link href="/#projects" className="text-sm text-slate-400 hover:text-white transition-colors">
          ← All Projects
        </Link>
        {(() => {
          const idx = projects.findIndex((p) => p.slug === slug);
          const next = projects[(idx + 1) % projects.length];
          return (
            <Link href={`/projects/${next.slug}`} className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
              Next: {next.title.split(" ").slice(0, 4).join(" ")}... →
            </Link>
          );
        })()}
      </div>
    </article>
  );
}
