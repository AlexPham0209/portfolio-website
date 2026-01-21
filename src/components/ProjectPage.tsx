import { motion } from "motion/react";
import type { Project } from "./ProjectCard";

export default function ProjectPage({
  project,
  setSelected,
}: {
  project: Project;
  setSelected: React.Dispatch<React.SetStateAction<number | null>>;
}) {
  const { id, name, description, picture } = project;

  return (
    <motion.div
      className={"bg-purple-200 fixed w-2/3 h-4/5 rounded-2xl"}
      layoutId={`project-card-${id}`}
      onClick={() => setSelected(null)}
    >
      <div className="flex flex-row items-center p-20 h-full justify-center">
        <div className="flex flex-col w-2/3 h-full items-baseline">
          <div className="mb-5 text-[48px] font-semibold">{name}</div>
          <p className="mb-5">{description}</p>
        </div>

        <img className="w-1/3" src={picture}></img>
      </div>
    </motion.div>
  );
}
