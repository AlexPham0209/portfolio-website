import { motion } from "motion/react";
import { Fade } from "./PageTransition";

export default function About() {
    return (
        <motion.div
            initial={Fade.hidden}
            animate={Fade.visible}
            exit={Fade.hidden}
            transition={{
                duration: 0.35
            }}
        >
            <h2 className="text-center">About</h2>

        </motion.div>
    );
}