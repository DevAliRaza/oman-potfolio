import Link from "next/link";
import { skills } from "@/data/skills";
import SkillIcon from "@/components/SkillIcon";

export const metadata = {
  title: "Technical Stack — Oman Khalid Butt",
  description: "Technologies, tools, and platforms used across embedded systems, AI/ML, and blockchain projects.",
};

export default function SkillsPage() {
  return (
    <article className="max-w-5xl mx-auto px-6 py-16">
      <Link href="/#skills" className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-text transition-colors mb-10">
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
        </svg>
        Back to Home
      </Link>

      <header className="mb-16">
        <h1 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-text mb-4 leading-tight tracking-tight">
          Technical Stack
        </h1>
        <p className="text-lg text-text-secondary mb-6">
          Core stack: Embedded C, STM32, Raspberry Pi, Python, TensorFlow Lite — from low-level firmware to edge-AI inference.
        </p>
      </header>

      <div className="space-y-10">
        {skills.map((cat) => (
          <section key={cat.name}>
            <div className="flex items-center gap-3 mb-6">
              <h2 className="text-sm font-bold text-amber tracking-wider uppercase">{cat.name}</h2>
              <span className="text-xs text-text-secondary bg-surface-light px-2 py-0.5 rounded font-mono">{cat.items.length}</span>
            </div>
            <div className="bg-surface rounded-xl p-5 sm:p-6 border border-border">
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 sm:gap-3">
                {cat.items.map((skill) => (
                  <SkillIcon key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      <div className="mt-16 pt-8 border-t border-border">
        <Link href="/" className="text-sm text-text-secondary hover:text-text transition-colors">
          ← Back to Home
        </Link>
      </div>
    </article>
  );
}
