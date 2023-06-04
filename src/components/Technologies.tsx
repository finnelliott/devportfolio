import Slide from "./Slide";

const technologies = [
    {
        category: "Frontend",
        items: ["Next.js", "React", "Tailwind CSS", "Prisma", "TypeScript"]
    },
    {
        category: "Backend",
        items: ["Node.js", "Express", "Prisma", "MongoDB"]
    },
    {
        category: "DevOps",
        items: ["Cloudflare", "Digital Ocean", "Vercel"]
    },
    {
        category: "CMS",
        items: ["Prismic", "Payload", "Sanity"]
    },
    {
        category: "Other",
        items: ["Git", "Github", "OpenAI", "Stability AI", "Stripe"]
    }
]

export default function Technologies() {
    return (
        <Slide>
            <h2 className="text-2xl font-medium text-gray-200 capitalize">Technologies</h2>
            <p className="text-gray-400 mt-2">These are the technologies that I&apos;m most confident with and use across my personal and client&nbsp;projects.</p>
            <ul>
                {technologies.map((technologies, index) => (
                    <li key={index} className="mt-8">
                        <div className="flex items-center w-full space-x-4 mt-6">
                            <h3 className="flex-none text-xs font-medium text-gray-200 uppercase">{technologies.category}</h3>
                            <div className="flex-1 h-px bg-gray-700"></div>
                        </div>
                        <ul className="flex mt-2 text-base flex-wrap">
                            {technologies.items.map((item, index) => <li key={item} className="text-gray-400 mr-8 mb-1 line-clamp-1">{item}</li>)}
                        </ul>
                    </li>
                ))}
            </ul>
        </Slide>
    )
}