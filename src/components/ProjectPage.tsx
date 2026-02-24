import { motion } from "motion/react";
import type { Project } from "./ProjectCard";

export default function ProjectPage({
  id,
  project,
  setSelected,
}: {
  id: number;
  project: Project;
  setSelected: React.Dispatch<React.SetStateAction<number | null>>;
}) {
  const { year, keywords, name, description, picture, link } = project;
  return (
    <>
      <motion.div
        className="fixed left-0 top-0 w-screen h-screen bg-black z-11"
        initial={{ opacity: 0.0 }}
        animate={{ opacity: 0.5 }}
        exit={{ opacity: 0.0 }}
        onClick={() => setSelected(null)}
      />
      <motion.div
        className={
          "bg-purple-200 fixed top-1/2 left-1/2 w-3/4 h-5/6 rounded-2xl z- min-h-1/2 min-w-1/2 -translate-x-1/2 -translate-y-1/2 z-12"
        }
        layoutId={`project-card-${id}`}
      >
        <div className="flex flex-row items-center p-10 h-full justify-center">
          <div className="flex flex-col w-2/3 h-full items-baseline p-5">
            <h2 className="text-[32pt] font-bold">{name}</h2>
            <h3 className="text-[16pt] font-medium mb-5">
              {year} {keywords.map((keyword) => `• ${keyword}`).join(" ")}
            </h3>
            <p className="mb-10 whitespace-pre-line">{description}</p>
            {link && (
              <a
                href={link}
                className="bg-black p-5 rounded-2xl text-white hover:bg-gray-900"
              >
                View Project
              </a>
            )}
          </div>

          <img className="w-1/3 rounded-2xl" src={picture}></img>
        </div>
      </motion.div>
    </>
  );
}
