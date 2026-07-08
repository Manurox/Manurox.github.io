"use client";

import type { Project } from "@/data/projects";
import { VideoTile } from "./VideoTile";

interface WorkGridProps {
  projects: Project[];
}

export function WorkGrid({ projects }: WorkGridProps) {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 gap-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <VideoTile key={project.slug} project={project} priority={index < 3} />
        ))}
      </div>
    </section>
  );
}
