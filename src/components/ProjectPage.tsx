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
    <div>
      <motion.div
        className="fade-in"
        initial={{ opacity: 0.0 }}
        animate={{ opacity: 0.5 }}
        exit={{ opacity: 0.0 }}
        onClick={() => setSelected(null)}
      />
      <motion.div
        className="project-page -translate-x-1/2 -translate-y-1/2"
        layoutId={`project-card-${id}`}
      >
        <div className="project-page-content">
          <div className="project-page-description">
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
          
          <img className="project-page-img" src={picture}/>
        </div>
      </motion.div>
    </div>
  );
}
