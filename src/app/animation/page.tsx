import type { Metadata } from "next";
import { PortfolioPage } from "@/components/PortfolioPage";
import { getProjectsByCategory } from "@/data/projects";

export const metadata: Metadata = {
  title: "Animation",
  description: "Animation portfolio — performance, motion, and animated sequences.",
};

export default function AnimationPage() {
  return <PortfolioPage projects={getProjectsByCategory("animation")} />;
}
