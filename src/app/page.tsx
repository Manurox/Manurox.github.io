import { PortfolioPage } from "@/components/PortfolioPage";
import { getAllProjects } from "@/data/projects";

export default function HomePage() {
  return <PortfolioPage projects={getAllProjects()} />;
}
