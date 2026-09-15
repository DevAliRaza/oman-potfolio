import ScrollReveal from "@/components/ScrollReveal";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { experiences } from "@/data/experience";
import { skills } from "@/data/skills";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-[90vh] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(59,130,246,0.08)_0%,_transparent_70%)]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <p className="text-blue-400 font-mono text-sm mb-4 tracking-wider">EMBEDDED SYSTEMS ENGINEER</p>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Oman Khalid<br />Butt
          </h1>
          <p className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed">
            Building intelligent hardware — from edge AI medical devices to blockchain-powered energy networks and autonomous drone systems.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#projects" className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-colors">
              View Projects
            </a>
            <a href="#contact" className="px-8 py-3 border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white rounded-lg font-medium transition-colors">
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <p className="text-blue-400 font-mono text-sm mb-3 tracking-wider">ABOUT</p>
            <h2 className="text-3xl font-bold text-white mb-8">Who I Am</h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              Electrical engineer from UET Lahore with hands-on experience spanning embedded systems, edge AI, autonomous robotics, and blockchain-integrated IoT. Currently a Research Assistant at LUMS, engineering distributed P2P energy trading prototypes on Raspberry Pi clusters with Quorum blockchain.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed mb-10">
              Previously built custom firmware on STM32 microcontrollers at Smart Computing and deployed edge ML models at Robotics Stellar Skills. I design systems that work at the intersection of hardware, software, and real-world constraints.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: "4", label: "Projects" },
                { value: "3", label: "Roles" },
                { value: "10+", label: "Platforms" },
                { value: "2025", label: "UET Lahore" },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-4 bg-slate-800/50 rounded-xl border border-slate-700/50">
                  <p className="text-2xl font-bold text-blue-400">{stat.value}</p>
                  <p className="text-sm text-slate-400 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-24 bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <p className="text-blue-400 font-mono text-sm mb-3 tracking-wider">EXPERIENCE</p>
            <h2 className="text-3xl font-bold text-white mb-12">Where I&apos;ve Worked</h2>
          </ScrollReveal>
          <div className="space-y-0 relative">
            <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-slate-700" />
            {experiences.map((exp, i) => (
              <ScrollReveal key={i} className="relative pl-12 md:pl-16 pb-12 last:pb-0">
                <div className="absolute left-2.5 md:left-4.5 top-1.5 w-3 h-3 rounded-full bg-blue-500 border-2 border-slate-950 z-10" />
                <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-lg font-bold text-white">{exp.company}</h3>
                    <span className="text-sm text-slate-400 font-mono">{exp.period}</span>
                  </div>
                  <p className="text-blue-400 text-sm mb-4">{exp.role}</p>
                  <ul className="space-y-2">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="text-sm text-slate-300 pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-slate-600 before:rounded-full">
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <p className="text-blue-400 font-mono text-sm mb-3 tracking-wider">PROJECTS</p>
            <h2 className="text-3xl font-bold text-white mb-4">Engineering Portfolio</h2>
            <p className="text-slate-400 mb-12 max-w-2xl">
              Four end-to-end engineering projects spanning edge AI, decentralized systems, autonomous flight, and custom processor design on FPGA.
            </p>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <ScrollReveal key={project.slug}>
                <ProjectCard project={project} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-24 bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <p className="text-blue-400 font-mono text-sm mb-3 tracking-wider">SKILLS</p>
            <h2 className="text-3xl font-bold text-white mb-12">Technical Toolkit</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((cat) => (
              <ScrollReveal key={cat.name}>
                <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
                  <h3 className="text-sm font-bold text-blue-400 mb-4 tracking-wider uppercase">{cat.name}</h3>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item) => (
                      <span key={item} className="text-sm px-3 py-1.5 bg-slate-700/50 text-slate-300 rounded-lg font-mono">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <p className="text-blue-400 font-mono text-sm mb-3 tracking-wider">EDUCATION</p>
            <h2 className="text-3xl font-bold text-white mb-8">Academic Background</h2>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 mb-4">
              <h3 className="text-lg font-bold text-white">University of Engineering and Technology, Lahore</h3>
              <p className="text-blue-400 text-sm mt-1">Bachelor of Science in Electrical Engineering</p>
              <div className="flex gap-6 mt-3 text-sm text-slate-400">
                <span>CGPA: 3.2</span>
                <span>Graduated 2025</span>
              </div>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <h3 className="text-base font-bold text-white">Winner — Robotics Competition 2023</h3>
              <p className="text-sm text-slate-400 mt-1">IEEE UET RCET Student Branch</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-slate-900/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <ScrollReveal>
            <p className="text-blue-400 font-mono text-sm mb-3 tracking-wider">CONTACT</p>
            <h2 className="text-3xl font-bold text-white mb-4">Get in Touch</h2>
            <p className="text-slate-400 mb-10 max-w-lg mx-auto">
              Interested in working together or have a question about any of my projects? I&apos;d love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <a
                href="mailto:omanbutt44@gmail.com"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-colors"
              >
                omanbutt44@gmail.com
              </a>
              <a
                href="tel:+923026802896"
                className="px-8 py-3 border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white rounded-lg font-medium transition-colors"
              >
                +92 302 680 2896
              </a>
            </div>
            <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors text-sm" target="_blank" rel="noopener noreferrer">
              LinkedIn: Oman Khalid →
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
