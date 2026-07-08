import type { Metadata } from "next";
import { PortfolioPage } from "@/components/PortfolioPage";
import { getProjectsByCategory } from "@/data/projects";

export const metadata: Metadata = {
  title: "Rigging",
  description: "Character rigging portfolio — rigs, deformation systems, and technical setup.",
};

export default function RiggingPage() {
  return <PortfolioPage projects={getProjectsByCategory("rigging")} />;
}
