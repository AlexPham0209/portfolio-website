import { motion } from "motion/react"

export interface Project {
    name: string | undefined,
    description: string | undefined,
    picture: string | undefined
}

export function ProjectCard({name, description, picture}: Project) {
    return (
        <motion.div 
            className="flex flex-col bg-purple-100 items-center rounded-md shadow-md p-6"
            whileHover={{scale: 1.1}}
            onClick={() => {console.log("clicked")}}
        >
            <h2 className="text-2xl font-bold mb-5">{name}</h2>
            <img className="max-w-40 mb-5" src={picture}></img>
            <p>{description}</p>
        </motion.div>
    )
}