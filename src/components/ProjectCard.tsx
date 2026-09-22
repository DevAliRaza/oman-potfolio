import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col bg-surface/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-border hover:border-accent/30 transition-all duration-300 hover:-translate-y-1 h-full"
    >
      <div className="relative h-48 overflow-hidden shrink-0">
        <Image
          src={project.cardImage}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-[family-name:var(--font-display)] text-lg font-bold text-text mb-2 group-hover:text-accent transition-colors leading-tight min-h-[3.5rem]">
          {project.title}
        </h3>
        <p className="text-sm text-text-secondary mb-4 line-clamp-2 min-h-[2.5rem]">{project.subtitle}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs px-2.5 py-1 bg-surface-light text-text-secondary rounded-full font-mono border border-border">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-2 text-accent text-sm font-medium mt-auto">
          View Case Study
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
