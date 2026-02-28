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
      className="project-card"
      whileHover={{ scale: 1.1 }}
      onClick={() => {
        setSelected(id);
      }}
      layoutId={`project-card-${id}`}
    >
      <h2>{name}</h2>
      <img src={thumbnail}></img>
    </motion.div>
  );
}
