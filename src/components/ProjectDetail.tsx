"use client";

import Link from "next/link";
import type { Project } from "@/data/projects";
import { getCategoryLabel } from "@/data/projects";
import { YouTubeLoop } from "./YouTubeLoop";

interface ProjectDetailProps {
  project: Project;
  nextProject: Project;
}

export function ProjectDetail({ project, nextProject }: ProjectDetailProps) {
  const backHref = project.category === "rigging" ? "/rigging/" : "/animation/";

  return (
    <article className="pb-8">
      <section className="relative">
        <div className="relative aspect-video w-full overflow-hidden">
          <YouTubeLoop
            videoId={project.youtubeId}
            loopStartMinute={0}
            loopEndMinute={0}
            eager
          />
          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-ink/80 via-transparent to-transparent p-6 md:p-10">
            <div className="mb-3 flex items-center gap-3">
              <span className="text-[10px] tracking-[0.2em] uppercase text-accent">
                {getCategoryLabel(project.category)}
              </span>
              <span className="h-px w-6 bg-border" />
              <span className="text-[10px] tracking-[0.15em] text-cream-muted">
                {project.year}
              </span>
            </div>
            <h1 className="font-display text-3xl font-medium tracking-tight text-cream md:text-5xl lg:text-6xl">
              {project.title}
            </h1>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 py-16 md:px-10 md:py-20">
        <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
          <div className="lg:col-span-2">
            <h2 className="mb-6 font-display text-2xl text-cream">Overview</h2>
            <p className="text-lg leading-relaxed text-cream-muted">
              {project.overview}
            </p>
          </div>

          <div>
            <h2 className="mb-6 font-display text-2xl text-cream">Tools</h2>
            <ul className="space-y-2">
              {project.tools.map((tool) => (
                <li
                  key={tool}
                  className="border-b border-border py-3 text-sm text-cream-muted"
                >
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <Link
          href={`/work/${nextProject.slug}/`}
          prefetch
          className="group mx-auto flex max-w-[1200px] items-center justify-between px-6 py-14 md:px-10 md:py-16"
        >
          <div>
            <p className="mb-2 text-[10px] tracking-[0.2em] uppercase text-cream-muted">
              Next
            </p>
            <p className="font-display text-2xl text-cream transition-colors duration-200 group-hover:text-accent md:text-3xl">
              {nextProject.title}
            </p>
          </div>
          <svg
            width="28"
            height="28"
            viewBox="0 0 32 32"
            fill="none"
            className="text-cream-muted transition-transform duration-200 group-hover:translate-x-1 group-hover:text-accent"
          >
            <path
              d="M8 16H24M24 16L18 10M24 16L18 22"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </section>

      <div className="border-t border-border px-6 py-8 md:px-10">
        <Link
          href={backHref}
          prefetch
          className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-cream-muted transition-colors duration-200 hover:text-accent"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M10 12L6 8L10 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Back to {getCategoryLabel(project.category)}
        </Link>
      </div>
    </article>
  );
}
