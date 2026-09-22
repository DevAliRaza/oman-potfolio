"use client";

import Image from "next/image";
import type { Skill } from "@/data/skills";

export default function SkillIcon({ skill }: { skill: Skill }) {
  return (
    <div className="flex flex-col items-center gap-2 p-3 sm:p-4 rounded-xl bg-surface-light/50 hover:bg-surface-light border border-transparent hover:border-border-light transition-colors group">
      <div className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center">
        {skill.icon ? (
          <Image
            src={skill.icon}
            alt={skill.name}
            width={36}
            height={36}
            className="w-8 h-8 sm:w-9 sm:h-9 object-contain opacity-70 group-hover:opacity-100 transition-opacity"
            unoptimized
          />
        ) : (
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-surface-light border border-border-light flex items-center justify-center" role="img" aria-label={skill.name}>
            <span className="text-amber text-xs font-bold font-mono" aria-hidden="true">
              {skill.name.slice(0, 2).toUpperCase()}
            </span>
          </div>
        )}
      </div>
      <span className="text-[10px] sm:text-xs text-text-secondary text-center leading-tight font-mono">
        {skill.name}
      </span>
    </div>
  );
}
