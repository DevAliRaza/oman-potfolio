import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.cardImage}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-800 to-transparent" />
        <span className="absolute top-4 left-4 text-xs font-bold text-blue-400 tracking-wider">
          PROJECT {project.number}
        </span>
      </div>
      <div className="p-6">
        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors leading-tight">
          {project.title}
        </h3>
        <p className="text-sm text-slate-400 mb-4 line-clamp-2">{project.subtitle}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs px-2.5 py-1 bg-slate-700 text-slate-300 rounded-full font-mono">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-2 text-blue-400 text-sm font-medium">
          View Case Study
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
