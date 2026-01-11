import { motion } from "motion/react";
import { Fade } from "./PageTransition";

export default function Home() {
    return (
        <motion.div
            initial={Fade.hidden}
            animate={Fade.visible}
            exit={Fade.hidden}
            transition={{
                duration: 0.25
            }}
        >
            <h2 className="text-center">Home</h2>

        </motion.div>
    );
}