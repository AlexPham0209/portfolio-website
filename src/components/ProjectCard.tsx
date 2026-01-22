import { motion } from "motion/react";

export interface Project {
  id: number;
  name?: string;
  description?: string;
  picture?: string;
}

export function ProjectCard({
  project,
  setSelected,
}: {
  project: Project;
  setSelected: React.Dispatch<React.SetStateAction<number | null>>;
}) {
  const { id, name, picture } = project;

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
      <img className="max-w-40 rounded-2xl" src={picture}></img>
    </motion.div>
  );
}
