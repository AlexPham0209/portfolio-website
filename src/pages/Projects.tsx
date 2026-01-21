import { AnimatePresence, motion } from "motion/react";
import { PageTransition } from "./PageTransition";
import { ProjectCard, type Project } from "../components/ProjectCard";
import { useState, type Dispatch } from "react";
import ProjectPage from "../components/ProjectPage";

export default function Projects() {
  const [selected, setSelected] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      name: "ASCII Obj Rasterizer",
      description: "Able to import any objects in Rust",
      picture: "Face.jpg",
    },
  ];

  return (
    <PageTransition>
      <motion.div className="flex flex-row flex-wrap h-full w-2/3">
        {projects.map((project) => {
          return (
            <ProjectCard
              project={project}
              setSelected={setSelected}
            ></ProjectCard>
          );
        })}
      </motion.div>

      <AnimatePresence>
        {selected !== null && (
          <ProjectPage
            project={projects.find((project) => project.id === selected)!}
            setSelected={setSelected}
          />
        )}
      </AnimatePresence>
    </PageTransition>
  );
}
