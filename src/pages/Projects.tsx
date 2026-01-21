import { AnimatePresence, motion } from "motion/react";
import { PageTransition } from "./PageTransition";
import { ProjectCard, type Project } from "../components/ProjectCard";
import { useState } from "react";
import ProjectPage from "../components/ProjectPage";

export default function Projects() {
  const [selected, setSelected] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      name: "FanBoy",
      description: "A Gameboy emulator I made in C++",
      picture: "Face.jpg",
    },

    {
      id: 2,
      name: "Ascii Rasterizer",
      description: "Able to import any objects in Rust",
      picture: "Face.jpg",
    },

    {
      id: 3,
      name: "Pho",
      description: "A programming language I programmed in Rust. It has a bytecode interpreter.",
      picture: "Face.jpg",
    },

    {
      id: 4,
      name: "Neural Network",
      description: "A custom Convolutional and Feedforward Neural Network library I created using Python and Numpy",
      picture: "Face.jpg",
    },
  ];

  return (
    <PageTransition>
      <motion.div className="flex flex-row flex-wrap h-full w-2/3 justify-between gap-y-10">
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
