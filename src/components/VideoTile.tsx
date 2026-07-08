"use client";

import Link from "next/link";
import type { Project } from "@/data/projects";
import { getCategoryLabel } from "@/data/projects";
import { YouTubeLoop } from "./YouTubeLoop";

interface VideoTileProps {
  project: Project;
  priority?: boolean;
}

const spanClasses: Record<Project["span"], string> = {
  normal: "col-span-1 row-span-1",
  wide: "col-span-1 md:col-span-2 row-span-1",
  tall: "col-span-1 row-span-1 md:row-span-2",
};

export function VideoTile({ project, priority = false }: VideoTileProps) {
  return (
    <article className={`group relative ${spanClasses[project.span]}`}>
      <Link
        href={`/work/${project.slug}/`}
        prefetch
        className="block h-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        <div className="relative h-full min-h-[50vh] overflow-hidden md:min-h-[420px]">
          <YouTubeLoop
            videoId={project.youtubeId}
            loopStartMinute={project.loopStartMinute}
            loopEndMinute={project.loopEndMinute}
            eager={priority}
          />

          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink/90 via-ink/10 to-transparent p-6 md:p-8">
            <div className="translate-y-2 opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100">
              <div className="mb-2 flex items-center gap-3">
                <span className="text-[10px] tracking-[0.2em] uppercase text-accent">
                  {getCategoryLabel(project.category)}
                </span>
                <span className="h-px w-6 bg-border" />
                <span className="text-[10px] tracking-[0.15em] text-cream-muted">
                  {project.year}
                </span>
              </div>
              <h2 className="font-display text-xl font-medium tracking-tight text-cream md:text-2xl lg:text-3xl">
                {project.title}
              </h2>
            </div>
          </div>

          <div className="pointer-events-none absolute inset-0 border border-transparent transition-colors duration-300 group-hover:border-accent/40" />
        </div>
      </Link>
    </article>
  );
}
