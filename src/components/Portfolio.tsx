import Image from "next/image";
import Slide from "./Slide";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function Portfolio() {
    return (
        <Slide>
            <h2 className="text-2xl font-medium text-gray-200 capitalize">Portfolio</h2>
            <p className="text-gray-400 mt-2">These are some of the personal projects that I&apos;ve worked on in the past few&nbsp;months.</p>
            <nav className="flex flex-col space-y-4">
                {projects.map((project, index) => (
                    <Link href={project.href} key={index} className="mt-8 flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-x-4 sm:space-y-0 group transition-all duration-500 hover:bg-black p-4 sm:p-1 rounded-lg">
                        <Image
                            src={project.image}
                            alt={project.title}
                            width={120}
                            height={120}
                            className="rounded-lg bg-gray-600 group-hover:scale-95 transition-all duration-500"
                        />
                        <div className="flex-1">
                            <h3 className="text-xl font-medium text-gray-200">{project.title}</h3>
                            <p className="text-gray-400 mt-1 text-base">{project.description}</p>
                            <div className="flex mt-2">
                                {project.tags.map((tag, index) => (
                                    <span key={index} className="text-gray-400 mr-2 text-xs border border-gray-500 rounded-full px-2.5 py-0.5">{tag}</span>
                                ))}
                            </div>
                        </div>
                    </Link>
                ))}
            </nav>
        </Slide>
    )
}