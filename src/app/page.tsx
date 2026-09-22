import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { experiences } from "@/data/experience";
import { skillCategories } from "@/data/skills";
import { certifications, recognitions, publications } from "@/data/achievements";
import CircuitTrace from "@/components/CircuitTrace";

const socialLinks = [
  {
    label: "WhatsApp",
    href: "https://wa.me/923026802896",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/MagnusXd1",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:omanbutt44@gmail.com",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/oman-khalid-butt/",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

const relevantCourses = [
  "Computer Architecture",
  "Computer Networks",
  "Intro to VLSI Systems",
  "Microprocessor Systems",
  "Machine Learning",
  "Deep Learning",
  "Data Structures & Algorithms",
  "Electromagnetism & Applications",
  "Control Systems",
  "Project Management",
  "Electronic Devices & Circuits",
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-[70vh] md:min-h-[80vh] flex items-center relative overflow-hidden py-10 md:py-0">
        <CircuitTrace />
        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 md:gap-16">
            <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-xl order-2 md:order-1">
              <p className="flex items-center gap-3 text-accent font-mono text-xs sm:text-sm mb-4 tracking-[0.2em] uppercase">
                <span className="w-8 h-px bg-accent" />
                Embedded Systems Engineer
              </p>
              <h1 className="font-[family-name:var(--font-display)] text-4xl sm:text-5xl md:text-7xl font-bold text-text leading-[1.05] mb-6 tracking-tight">
                Oman Khalid<br />Butt
              </h1>
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed mb-8 max-w-lg text-justify">
                Edge AI medical devices. Blockchain energy networks. Autonomous drones. Custom processors on FPGA. I build systems that compute at the hardware boundary.
              </p>
              <div className="flex items-center gap-4 mb-6">
                <a href="#projects" className="px-7 py-3 bg-accent hover:bg-accent-light text-[#0A1410] rounded-full font-semibold transition-all text-sm glow-green-sm hover:glow-green">
                  View Projects
                </a>
                <a href="#contact" className="px-7 py-3 rounded-full border border-accent/40 text-accent hover:bg-accent/10 hover:border-accent transition-all text-sm font-medium">
                  Get in Touch
                </a>
              </div>
              {/* Connect with me */}
              <div className="flex items-center gap-4">
                <span className="text-xs text-text-secondary font-mono tracking-wider">Connect with me:</span>
                <div className="flex items-center gap-2">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-lg bg-surface-light/60 border border-border hover:border-accent/40 flex items-center justify-center text-text-secondary hover:text-accent transition-all"
                      aria-label={link.label}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="shrink-0 order-1 md:order-2 flex justify-center">
              <div className="w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-2 border-accent/30 relative glow-green-sm">
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

      {/* Introduction */}
      <section id="about" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div>
              <p className="flex items-center gap-3 text-accent font-mono text-xs mb-4 tracking-[0.2em] uppercase">
                <span className="w-6 h-px bg-accent" />
                Introduction
              </p>
              <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-text mb-6 sm:mb-8 tracking-tight">What I Do</h2>
              <div className="space-y-5 text-text-secondary leading-relaxed text-sm sm:text-base text-justify">
                <p>
                  I am an Electrical Engineer from UET Lahore specialising in embedded systems, edge AI, and hardware-software co-design. My work spans building portable medical devices that run deep-learning inference on-device, engineering blockchain-integrated energy trading platforms on Raspberry Pi clusters, designing autonomous surveillance drones with on-board object detection, and implementing custom RISC-V processors on FPGA.
                </p>
                <p>
                  Currently a Research Assistant at LUMS, I focus on distributed IoT systems that merge physical sensing with decentralised software architectures. I thrive at the boundary where hardware meets software — turning schematic designs into deployed, working prototypes.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <p className="flex items-center gap-3 text-accent font-mono text-xs mb-4 tracking-[0.2em] uppercase">
              <span className="w-6 h-px bg-accent" />
              Career
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-text mb-8 sm:mb-12 tracking-tight">Experience</h2>
          </ScrollReveal>
          <div className="space-y-0 relative">
            <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-accent/20" />
            {experiences.map((exp, i) => (
              <ScrollReveal key={i} className="relative pl-12 md:pl-16 pb-10 md:pb-12 last:pb-0">
                <div className="absolute left-2.5 md:left-4.5 top-1.5 w-3 h-3 rounded-full bg-accent border-2 border-bg z-10 glow-green-sm" />
                <div className="bg-surface/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-border hover:border-accent/20 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-base sm:text-lg font-bold text-text">{exp.company}</h3>
                    <span className="text-xs sm:text-sm text-text-secondary font-mono">{exp.period}</span>
                  </div>
                  <p className="text-accent text-sm mb-4">{exp.role}</p>
                  <ul className="space-y-2 mb-4">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="text-xs sm:text-sm text-text-secondary pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-accent/30 before:rounded-full text-justify">
                        {h}
                      </li>
                    ))}
                  </ul>
                  <Link href={`/experience/${exp.slug}`} className="inline-flex items-center gap-1 text-xs text-accent hover:text-accent-light transition-colors font-medium">
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
            <p className="flex items-center gap-3 text-accent font-mono text-xs mb-4 tracking-[0.2em] uppercase">
              <span className="w-6 h-px bg-accent" />
              Portfolio
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-text mb-4 tracking-tight">Projects</h2>
            <p className="text-text-secondary mb-8 sm:mb-12 max-w-2xl text-sm sm:text-base text-justify">
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
            <p className="flex items-center gap-3 text-accent font-mono text-xs mb-4 tracking-[0.2em] uppercase">
              <span className="w-6 h-px bg-accent" />
              Technologies
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-text mb-8 sm:mb-12 tracking-tight">Stack</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((cat) => (
              <ScrollReveal key={cat.name} className="h-full">
                <div className="bg-surface/80 backdrop-blur-sm rounded-xl p-6 border border-border hover:border-accent/20 transition-colors h-full">
                  <h3 className="text-sm font-bold text-accent mb-4 tracking-wider uppercase">{cat.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item) => (
                      <span key={item} className="text-xs sm:text-sm px-3 py-1.5 bg-surface-light text-text-secondary rounded-lg font-mono border border-border">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/skills" className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent-light transition-colors font-medium">
              View All Technologies
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Education - PCB Chip Box */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <p className="flex items-center gap-3 text-accent font-mono text-xs mb-4 tracking-[0.2em] uppercase">
              <span className="w-6 h-px bg-accent" />
              Academic
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-text mb-8 tracking-tight">Education</h2>

            {/* PCB Chip-style Education Card */}
            <div className="relative">
              {/* Chip pin markings - top */}
              <div className="flex justify-center gap-4 mb-1 px-12">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={`t${i}`} className="w-1.5 h-3 bg-accent/20 rounded-sm" />
                ))}
              </div>

              <div className="relative border border-accent/30 rounded-lg bg-surface/90 backdrop-blur-sm overflow-hidden">
                {/* Corner pin indicators */}
                <div className="absolute top-2 left-2 w-3 h-3 rounded-full border border-accent/30" />
                <div className="absolute top-2 right-2 w-3 h-3 rounded-full border border-accent/30" />

                {/* Terminal-style title bar */}
                <div className="border-b border-accent/20 px-4 py-2.5 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-accent/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-accent/40" />
                    <div className="w-2.5 h-2.5 rounded-full bg-accent/20" />
                  </div>
                  <span className="text-xs text-accent/60 font-mono ml-auto">~/education/uet-lahore</span>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    <div className="flex-1">
                      <h3 className="font-[family-name:var(--font-display)] text-lg sm:text-xl font-bold text-accent mb-1">
                        Bachelor of Science in Electrical Engineering
                      </h3>
                      <p className="text-text font-medium mb-1">University of Engineering and Technology, Lahore</p>
                      <p className="text-text-secondary text-sm font-mono mb-1">Batch 2021 – 2025</p>
                      <p className="text-accent font-mono text-sm font-bold">CGPA: 3.2 / 4.0</p>
                    </div>
                  </div>

                  <div className="mt-6 pt-5 border-t border-accent/15">
                    <p className="text-xs text-accent font-mono tracking-wider uppercase mb-3">Relevant Coursework</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1.5">
                      {relevantCourses.map((course) => (
                        <div key={course} className="flex items-center gap-2 text-sm text-text-secondary">
                          <span className="w-1 h-1 bg-accent/40 rounded-full shrink-0" />
                          {course}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 pt-4 border-t border-accent/15">
                    <p className="text-xs text-accent font-mono tracking-wider uppercase mb-3">Notable</p>
                    <p className="text-sm text-text-secondary">Winner — Robotics Competition 2023, IEEE UET RCET Student Branch</p>
                  </div>
                </div>
              </div>

              {/* Chip pin markings - bottom */}
              <div className="flex justify-center gap-4 mt-1 px-12">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={`b${i}`} className="w-1.5 h-3 bg-accent/20 rounded-sm" />
                ))}
              </div>

              {/* Side pin markings */}
              <div className="absolute left-0 top-12 bottom-12 flex flex-col justify-center gap-3">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={`l${i}`} className="w-3 h-1.5 bg-accent/20 rounded-sm" />
                ))}
              </div>
              <div className="absolute right-0 top-12 bottom-12 flex flex-col justify-center gap-3">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={`r${i}`} className="w-3 h-1.5 bg-accent/20 rounded-sm" />
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Achievements */}
      <section id="achievements" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <p className="flex items-center gap-3 text-accent font-mono text-xs mb-4 tracking-[0.2em] uppercase">
              <span className="w-6 h-px bg-accent" />
              Credentials
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-text mb-4 tracking-tight">Achievements & Certificates</h2>
            <p className="text-text-secondary mb-8 sm:mb-12 max-w-2xl text-sm sm:text-base text-justify">
              Professional certifications, competition wins, and peer-reviewed publications.
            </p>
          </ScrollReveal>

          <div className="space-y-6 mb-10">
            <ScrollReveal>
              <h3 className="text-sm font-bold text-accent mb-4 tracking-wider uppercase">Certifications</h3>
            </ScrollReveal>
            {certifications.map((cert, i) => (
              <ScrollReveal key={i}>
                <div className="bg-surface/80 backdrop-blur-sm rounded-xl border border-border overflow-hidden hover:border-accent/20 transition-colors">
                  <div className="flex flex-col sm:flex-row">
                    {cert.image && (
                      <div className="sm:w-44 shrink-0 bg-surface-light border-b sm:border-b-0 sm:border-r border-border">
                        <div className="relative aspect-[4/3]">
                          <Image src={cert.image} alt={cert.title} fill className="object-contain p-3" />
                        </div>
                      </div>
                    )}
                    <div className="p-4 sm:p-5 flex flex-col justify-center min-w-0">
                      <p className="text-xs text-text-secondary font-mono mb-1">{cert.issuer}</p>
                      <h4 className="text-sm sm:text-base font-bold text-text mb-1">{cert.title}</h4>
                      <p className="text-accent text-xs font-mono mb-2">{cert.date}</p>
                      <p className="text-xs sm:text-sm text-text-secondary leading-relaxed line-clamp-2 text-justify">{cert.description}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="space-y-6 mb-10">
            <ScrollReveal>
              <h3 className="text-sm font-bold text-accent mb-4 tracking-wider uppercase">Recognitions</h3>
            </ScrollReveal>
            {recognitions.map((rec, i) => (
              <ScrollReveal key={i}>
                <div className="bg-surface/80 backdrop-blur-sm rounded-xl p-4 sm:p-5 border border-border hover:border-accent/20 transition-colors">
                  <p className="text-xs text-text-secondary font-mono mb-1">{rec.issuer}</p>
                  <h4 className="text-sm sm:text-base font-bold text-text mb-1">{rec.title}</h4>
                  <p className="text-accent text-xs font-mono mb-2">{rec.date}</p>
                  <p className="text-xs sm:text-sm text-text-secondary leading-relaxed text-justify">{rec.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="space-y-6 mb-8">
            <ScrollReveal>
              <h3 className="text-sm font-bold text-accent mb-4 tracking-wider uppercase">Publications</h3>
            </ScrollReveal>
            {publications.map((pub, i) => (
              <ScrollReveal key={i}>
                <div className="bg-surface/80 backdrop-blur-sm rounded-xl p-4 sm:p-5 border border-border hover:border-accent/20 transition-colors">
                  <p className="text-xs text-text-secondary font-mono mb-1">{pub.venue}</p>
                  <h4 className="text-sm sm:text-base font-bold text-text mb-1 leading-snug">{pub.title}</h4>
                  <p className="text-xs text-text-secondary mb-1">{pub.authors}</p>
                  <p className="text-accent text-xs font-mono">{pub.date}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center">
            <Link href="/achievements" className="inline-flex items-center gap-2 text-sm text-accent hover:text-accent-light transition-colors font-medium">
              View All Details
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact - PCB Chip Terminal Box */}
      <section id="contact" className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <p className="flex items-center gap-3 text-accent font-mono text-xs mb-4 tracking-[0.2em] uppercase">
              <span className="w-6 h-px bg-accent" />
              Connect
            </p>
            <h2 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-bold text-text mb-4 tracking-tight">/bin/contact</h2>
            <p className="text-text-secondary mb-8 sm:mb-10 text-sm sm:text-base">
              {"> echo \"Let's connect and build something amazing\""}
            </p>

            {/* PCB Chip Contact Card */}
            <div className="relative max-w-2xl">
              {/* Top pins */}
              <div className="flex justify-center gap-5 mb-1 px-16">
                {Array.from({ length: 10 }).map((_, i) => (
                  <div key={`ct${i}`} className="w-1.5 h-3 bg-accent/20 rounded-sm" />
                ))}
              </div>

              <div className="relative border border-accent/30 rounded-lg bg-surface/90 backdrop-blur-sm overflow-hidden">
                {/* Corner markers */}
                <div className="absolute top-2 left-2 w-3 h-3 rounded-full border border-accent/30" />

                {/* Terminal title bar */}
                <div className="border-b border-accent/20 px-4 py-2.5 flex items-center">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-accent" />
                  </div>
                  <span className="text-xs text-text-secondary font-mono mx-auto">oman ~ zsh /bin/contact</span>
                </div>

                <div className="p-6 sm:p-8 space-y-5">
                  <p className="text-sm text-accent font-mono">
                    oman@portfolio:~$ <span className="text-text">initiate_connection</span>
                  </p>

                  <div className="space-y-4 pl-2">
                    {/* Email */}
                    <div className="flex items-center gap-3">
                      <svg className="w-4 h-4 text-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                      <span className="text-text-secondary text-sm font-mono">Email:</span>
                      <a href="mailto:omanbutt44@gmail.com" className="text-text text-sm font-mono underline underline-offset-2 hover:text-accent transition-colors">omanbutt44@gmail.com</a>
                    </div>

                    {/* Send email button */}
                    <a
                      href="mailto:omanbutt44@gmail.com"
                      className="inline-block ml-7 px-5 py-2 bg-accent hover:bg-accent-light text-[#0A1410] rounded-full font-mono text-xs font-bold transition-all glow-green-sm hover:glow-green"
                    >
                      sendmail --to=oman
                    </a>

                    {/* WhatsApp */}
                    <div className="flex items-center gap-3">
                      <svg className="w-4 h-4 text-accent shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      <span className="text-text-secondary text-sm font-mono">WhatsApp:</span>
                      <a href="https://wa.me/923026802896" target="_blank" rel="noopener noreferrer" className="text-text text-sm font-mono underline underline-offset-2 hover:text-accent transition-colors">+92 302 680 2896</a>
                    </div>

                    {/* LinkedIn */}
                    <div className="flex items-center gap-3">
                      <svg className="w-4 h-4 text-accent shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                      <span className="text-text-secondary text-sm font-mono">LinkedIn:</span>
                      <a href="https://www.linkedin.com/in/oman-khalid-butt/" target="_blank" rel="noopener noreferrer" className="text-text text-sm font-mono underline underline-offset-2 hover:text-accent transition-colors">/in/oman-khalid-butt</a>
                    </div>

                    {/* GitHub */}
                    <div className="flex items-center gap-3">
                      <svg className="w-4 h-4 text-accent shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      <span className="text-text-secondary text-sm font-mono">GitHub:</span>
                      <a href="https://github.com/MagnusXd1" target="_blank" rel="noopener noreferrer" className="text-text text-sm font-mono underline underline-offset-2 hover:text-accent transition-colors">/MagnusXd1</a>
                    </div>
                  </div>

                  <p className="text-sm text-accent font-mono pt-2">
                    oman@portfolio:~$ <span className="animate-pulse">▌</span>
                  </p>
                </div>
              </div>

              {/* Bottom pins */}
              <div className="flex justify-center gap-5 mt-1 px-16">
                {Array.from({ length: 10 }).map((_, i) => (
                  <div key={`cb${i}`} className="w-1.5 h-3 bg-accent/20 rounded-sm" />
                ))}
              </div>

              {/* Side pins */}
              <div className="absolute left-0 top-10 bottom-10 flex flex-col justify-center gap-3">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={`cl${i}`} className="w-3 h-1.5 bg-accent/20 rounded-sm" />
                ))}
              </div>
              <div className="absolute right-0 top-10 bottom-10 flex flex-col justify-center gap-3">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={`cr${i}`} className="w-3 h-1.5 bg-accent/20 rounded-sm" />
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer Connect Row */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col items-center gap-4">
            <p className="text-text-secondary text-sm">Connect with me:</p>
            <div className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={`f-${link.label}`}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl bg-surface-light/60 border border-border hover:border-accent/40 flex items-center justify-center text-text-secondary hover:text-accent transition-all"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
