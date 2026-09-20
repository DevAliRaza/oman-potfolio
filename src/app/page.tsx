import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { experiences } from "@/data/experience";
import { skillCategories } from "@/data/skills";
import CircuitTrace from "@/components/CircuitTrace";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-[70vh] md:min-h-[80vh] flex items-center relative overflow-hidden py-10 md:py-0">
        <CircuitTrace />
        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 md:gap-16">
            <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-xl order-2 md:order-1">
              <p className="text-amber font-mono text-xs sm:text-sm mb-4 tracking-[0.2em]">EMBEDDED SYSTEMS ENGINEER</p>
              <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl md:text-7xl font-bold text-text leading-[1.05] mb-6 tracking-tight">
                Oman Khalid<br />Butt
              </h1>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed mb-8 max-w-lg">
                Edge AI medical devices. Blockchain energy networks. Autonomous drones. Custom processors on FPGA. I build systems that compute at the hardware boundary.
              </p>
              <div className="flex items-center gap-6">
                <a href="#projects" className="px-6 sm:px-7 py-3 bg-amber hover:bg-amber-light text-[#1A1A1F] rounded-lg font-medium transition-colors text-sm">
                  View Projects
                </a>
                <a href="#contact" className="text-sm text-text-secondary hover:text-text transition-colors">
                  Get in Touch →
                </a>
              </div>
            </div>
            <div className="shrink-0 order-1 md:order-2 flex justify-center">
              <div className="w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-2 border-amber/30 relative">
                <Image
                  src="/images/oman-hero.jpg"
                  alt="Oman Khalid Butt"
                  fill
                  className="object-cover scale-[1.15] object-[center_45%]"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <div>
              <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-text mb-6 sm:mb-8 tracking-tight">Background</h2>
              <div className="space-y-5 text-text-secondary leading-relaxed text-sm sm:text-base">
                <p>
                  Electrical engineer from UET Lahore with hands-on experience spanning embedded systems, edge AI, autonomous robotics, and blockchain-integrated IoT. Currently a Research Assistant at LUMS, engineering distributed P2P energy trading prototypes on Raspberry Pi clusters with Quorum blockchain.
                </p>
                <p>
                  Previously built custom firmware on STM32 microcontrollers at Smart Computing and deployed edge ML models at Robotics Stellar Skills. I design systems that work at the intersection of hardware, software, and real-world constraints.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-text mb-8 sm:mb-12 tracking-tight">Experience</h2>
          </ScrollReveal>
          <div className="space-y-0 relative">
            <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border-light" />
            {experiences.map((exp, i) => (
              <ScrollReveal key={i} className="relative pl-12 md:pl-16 pb-10 md:pb-12 last:pb-0">
                <div className="absolute left-2.5 md:left-4.5 top-1.5 w-3 h-3 rounded-full bg-amber border-2 border-bg z-10" />
                <div className="bg-surface rounded-xl p-4 sm:p-6 border border-border">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-base sm:text-lg font-bold text-text">{exp.company}</h3>
                    <span className="text-xs sm:text-sm text-text-secondary font-mono">{exp.period}</span>
                  </div>
                  <p className="text-amber text-sm mb-4">{exp.role}</p>
                  <ul className="space-y-2 mb-4">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="text-xs sm:text-sm text-text-secondary pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-border-light before:rounded-full">
                        {h}
                      </li>
                    ))}
                  </ul>
                  <Link href={`/experience/${exp.slug}`} className="inline-flex items-center gap-1 text-xs text-amber hover:text-amber-light transition-colors font-medium">
                    View Details
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-text mb-4 tracking-tight">Projects</h2>
            <p className="text-text-secondary mb-8 sm:mb-12 max-w-2xl text-sm sm:text-base">
              End-to-end engineering — from schematic capture to deployed firmware, from trained models to physical prototypes.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {projects.map((project) => (
              <ScrollReveal key={project.slug} className="h-full">
                <ProjectCard project={project} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-text mb-8 sm:mb-12 tracking-tight">Stack</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((cat) => (
              <ScrollReveal key={cat.name} className="h-full">
                <div className="bg-surface rounded-xl p-6 border border-border h-full">
                  <h3 className="text-sm font-bold text-amber mb-4 tracking-wider uppercase">{cat.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item) => (
                      <span key={item} className="text-xs sm:text-sm px-3 py-1.5 bg-surface-light text-text-secondary rounded-lg font-mono">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/skills" className="inline-flex items-center gap-2 text-sm text-amber hover:text-amber-light transition-colors font-medium">
              View All Technologies
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-text mb-6 sm:mb-8 tracking-tight">Education</h2>
            <div className="bg-surface rounded-xl p-4 sm:p-6 border border-border mb-4">
              <h3 className="text-base sm:text-lg font-bold text-text">University of Engineering and Technology, Lahore</h3>
              <p className="text-amber text-sm mt-1">Bachelor of Science in Electrical Engineering</p>
              <div className="flex gap-6 mt-3 text-xs sm:text-sm text-text-secondary">
                <span>CGPA: 3.2</span>
                <span>Graduated 2025</span>
              </div>
            </div>
            <div className="bg-surface rounded-xl p-4 sm:p-6 border border-border">
              <h3 className="text-sm sm:text-base font-bold text-text">Winner — Robotics Competition 2023</h3>
              <p className="text-xs sm:text-sm text-text-secondary mt-1">IEEE UET RCET Student Branch</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-text mb-4 tracking-tight">Let&apos;s talk</h2>
            <p className="text-text-secondary mb-8 sm:mb-10 max-w-lg text-sm sm:text-base">
              Interested in working together or have a question about any of my projects?
            </p>
            <div className="flex flex-col sm:flex-row items-start gap-4 mb-8 sm:mb-10">
              <a
                href="mailto:omanbutt44@gmail.com"
                className="px-6 sm:px-7 py-3 bg-amber hover:bg-amber-light text-[#1A1A1F] rounded-lg font-medium transition-colors text-sm w-full sm:w-auto text-center"
              >
                omanbutt44@gmail.com
              </a>
              <a
                href="tel:+923026802896"
                className="px-6 sm:px-7 py-3 border border-border-light hover:border-amber/50 text-text-secondary hover:text-text rounded-lg font-medium transition-colors text-sm w-full sm:w-auto text-center"
              >
                +92 302 680 2896
              </a>
            </div>
            <a href="https://www.linkedin.com/in/oman-khalid-butt/" className="text-text-secondary hover:text-amber transition-colors text-sm" target="_blank" rel="noopener noreferrer">
              LinkedIn: Oman Khalid →
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
