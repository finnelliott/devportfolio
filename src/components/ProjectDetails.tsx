import Slide from "./Slide";

export default function ProjectDetails({ project }: { project: Project }) {
    return (
        <Slide>
            <h2 className="text-2xl font-medium text-gray-200">About this project</h2>
            <p className="prose prose-invert mt-8">
                { project.details }
            </p>
        </Slide>
    )
}