import portfolioData from "../../content/portfolio.json";

export type WorkCategory = "rigging" | "animation";

export type TileSpan = "normal" | "wide" | "tall";

export interface ProjectRaw {
  id: string;
  title: string;
  year: string;
  category: WorkCategory;
  overview: string;
  tools: string[];
  youtubeUrl: string;
  loopStartMinute: number;
  loopEndMinute: number;
  span?: TileSpan;
}

export interface Project {
  slug: string;
  title: string;
  year: string;
  category: WorkCategory;
  overview: string;
  tools: string[];
  youtubeUrl: string;
  youtubeId: string;
  loopStartMinute: number;
  loopEndMinute: number;
  span: TileSpan;
}

export interface SiteConfig {
  name: string;
  fullName: string;
  tagline: string;
  university: string;
  year: string;
  email: string;
  social: {
    instagram: string;
    linkedin: string;
    vimeo: string;
    artstation: string;
  };
  about: string;
  skills: string[];
}

export const workCategories: {
  id: WorkCategory | "all";
  label: string;
  href: string;
}[] = [
  { id: "all", label: "All Work", href: "/" },
  { id: "rigging", label: "Rigging", href: "/rigging/" },
  { id: "animation", label: "Animation", href: "/animation/" },
];

function extractYouTubeId(url: string): string {
  try {
    const parsed = new URL(url);
    if (parsed.hostname.includes("youtu.be")) {
      return parsed.pathname.slice(1).split("/")[0];
    }
    const id = parsed.searchParams.get("v");
    if (id) return id;
    const embedMatch = parsed.pathname.match(/\/embed\/([^/?]+)/);
    if (embedMatch) return embedMatch[1];
  } catch {
    // fall through
  }
  return url.trim();
}

function normalizeProject(raw: ProjectRaw): Project {
  const span = raw.span ?? "normal";
  return {
    slug: raw.id,
    title: raw.title,
    year: raw.year,
    category: raw.category,
    overview: raw.overview,
    tools: raw.tools,
    youtubeUrl: raw.youtubeUrl,
    youtubeId: extractYouTubeId(raw.youtubeUrl),
    loopStartMinute: raw.loopStartMinute ?? 0,
    loopEndMinute: raw.loopEndMinute ?? 0,
    span,
  };
}

const rawProjects = portfolioData.projects as ProjectRaw[];

export const projects: Project[] = rawProjects.map(normalizeProject);

export const siteConfig: SiteConfig = portfolioData.site as SiteConfig;

export function getAllProjects(): Project[] {
  return projects;
}

export function getProjectsByCategory(category: WorkCategory): Project[] {
  return projects.filter((p) => p.category === category);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getCategoryLabel(category: WorkCategory): string {
  return category === "rigging" ? "Rigging" : "Animation";
}
