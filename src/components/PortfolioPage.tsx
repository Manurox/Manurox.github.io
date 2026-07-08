"use client";

import type { Project } from "@/data/projects";
import { WorkGrid } from "./WorkGrid";

interface PortfolioPageProps {
  projects: Project[];
}

export function PortfolioPage({ projects }: PortfolioPageProps) {
  return <WorkGrid projects={projects} />;
}
