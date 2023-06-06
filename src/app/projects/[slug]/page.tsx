import Portfolio from "@/components/Portfolio";
import ProjectDetails from "@/components/ProjectDetails";
import ProjectHero from "@/components/ProjectHero";
import Slide from "@/components/Slide";
import { projects } from "@/data/projects";
import Link from "next/link";

export default function Page({ params }: { params: { slug: string } }) {
    const project = projects.find((project) => project.slug === params.slug);
    if (!project) return <Slide>Sorry, this project doesn&apos;t exist. Return to <Link href="" className="underline hover:text-gray-200">home</Link>.</Slide>;
    return (
        <main>
        <ProjectHero project={project} />
        <div className="relative">
            <div className="z-30"><ProjectDetails project={project} /></div>
            <div className="z-20"><Portfolio /></div>
        </div>
        </main>
    )
};