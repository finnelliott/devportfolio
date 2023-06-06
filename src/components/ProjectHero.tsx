import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
export default function ProjectHero({ project }: { project: Project }) {
    return (
        <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 flex items-center justify-center">
            <div className="relative max-w-xl aspect-square bg-gradient-to-b from-gray-800 to-black rounded-lg lg:rounded-[32px] overflow-hidden w-full h-full">
                <div className="absolute bottom-8 x-auto w-full text-center px-8">
                    <h1 className="text-4xl font-bold text-white">{project.title}</h1>
                    <h2 className="text-2xl font-medium text-gray-400 mt-2">{project.description}</h2>
                    <nav className="flex space-x-8 mt-8 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 justify-center items-center">
                        <a href={project.github_url} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-gray-200 transition-all duration-500">
                            <ArrowTopRightOnSquareIcon className="w-5 h-5 mr-2"/>Codebase
                        </a>
                        <a href={project.url} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-gray-200 transition-all duration-500">
                            <ArrowTopRightOnSquareIcon className="w-5 h-5 mr-2"/>Project
                        </a>
                    </nav>
                </div>
            </div>
        </section>
    )
}