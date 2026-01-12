import { motion } from "motion/react";
import { PageTransition } from "./PageTransition";
import { ProjectCard, type Project } from "../components/ProjectCard";

export default function Projects() {
    const projects: Project[] = [
        {
            name: "ASCII Obj Rasterizer",
            description: "Able to import any objects in Rust",
            picture: "Face.jpg"
        }
    ];
    return (
        <PageTransition>
            <motion.div className="flex flex-row flex-wrap h-full w-2/3">
                {
                    projects.map((project) => {
                        return <ProjectCard {...project}>
                        </ProjectCard>
                    })
                }
            </motion.div>
        </PageTransition>
    );
}