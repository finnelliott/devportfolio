import Image from "next/image";
import Slide from "./Slide";
import Link from "next/link";

const projects = [
    {
        title: "Victula",
        description: "The easiest way to track your nutrition.",
        image: "/images/victula.png",
        href: "/projects/victula",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "OpenAI", "Mongo", "Vercel"],
        tags: [ "Health", "Web", "AI" ]
    },
    {
        title: "AI Card Craft",
        description: "Generate unique greetings cards with AI. Then send them to friends and family.",
        image: "/images/aicardcraft.png",
        href: "/projects/aicardcraft",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "Stability AI", "Mongo", "Vercel", "Digital Ocean", "Stripe", "Prodigi"],
        tags: [ "AI", "Web", "E-Commerce" ]
    },
    {
        title: "Mistrata",
        description: "Performant dental websites as a service.",
        image: "/images/mistrata.png",
        href: "/projects/mistrata",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "Mongo", "Vercel", "Payload", "Digital Ocean"],
        tags: [ "Health", "Web" ]
    },
    {
        title: "Whitenoise FM",
        description: "A website and app that only play white noise.",
        image: "/images/whitenoisefm.png",
        href: "/projects/whitenoise-fm",
        technologies: ["iOS", "Swift", "HTML", "CSS", "JavaScript", "Digital Ocean"],
        tags: [ "Music", "Web", "iOS" ]
    }
]

export default function Portfolio() {
    return (
        <Slide>
            <h2 className="text-2xl font-medium text-gray-200 capitalize">Portfolio</h2>
            <p className="text-gray-400 mt-2">These are some of the projects that I&apos;ve worked on in the past few&nbsp;months.</p>
            <nav className="flex flex-col space-y-4">
                {projects.map((project, index) => (
                    <Link href={project.href} key={index} className="mt-8 flex items-center space-x-4 group transition-all duration-500 hover:bg-black p-1 rounded-lg">
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