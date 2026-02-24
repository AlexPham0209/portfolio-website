import { motion } from "motion/react";

export interface Project {
  year: number;
  keywords: string[];
  name?: string;
  description?: string;
  thumbnail?: string;
  picture?: string;

  link?: string;
}

export function ProjectCard({
  id,
  project,
  setSelected,
}: {
  id: number;
  project: Project;
  setSelected: React.Dispatch<React.SetStateAction<number | null>>;
}) {
  const { name, thumbnail } = project;
  return (
    <motion.div
      className="flex flex-col bg-purple-100 items-center rounded-md shadow-md p-6 w-60 h-70"
      whileHover={{ scale: 1.1 }}
      onClick={() => {
        setSelected(id);
      }}
      layoutId={`project-card-${id}`}
    >
      <h2 className="text-2xl font-bold mb-5">{name}</h2>
      <img className="max-w-40 rounded-2xl" src={thumbnail}></img>
    </motion.div>
  );
}
