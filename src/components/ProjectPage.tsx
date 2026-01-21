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
    <>
    <motion.div className="fixed left-0 top-0 w-screen h-screen bg-black z-11"
      initial={{ opacity: 0.0 }}
      animate={{ opacity: 0.5 }}
      exit={{ opacity: 0.0 }}
      onClick={() => setSelected(null)}
    />
      <motion.div
        className={"bg-purple-200 fixed top-1/2 left-1/2 w-2/3 h-4/5 rounded-2xl z- min-h-1/2 min-w-1/2 -translate-x-1/2 -translate-y-1/2 z-12"}
        layoutId={`project-card-${id}`}
      >
        <div className="flex flex-row items-center p-20 h-full justify-center">
          <div className="flex flex-col w-2/3 h-full items-baseline">
            <div className="mb-5 text-[48px] font-semibold">{name}</div>
            <p className="mb-5">{description}</p>
          </div>

          <img className="w-1/3" src={picture}></img>
        </div>
      </motion.div>
      </>
  );
}
