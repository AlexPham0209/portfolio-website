import { motion } from "motion/react";
import { Fade } from "./PageTransition";

export default function Projects() {
    return (
        <motion.div
            initial={Fade.hidden}
            animate={Fade.visible}
            exit={Fade.hidden}
            transition={{
                duration: 0.35
            }}
        >
            <h2 className="text-center">Projects</h2>

        </motion.div>
    );
}