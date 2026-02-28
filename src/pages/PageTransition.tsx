import { motion } from "motion/react";

export function PageTransition({ children }: { children: React.ReactNode }) {
  return (
    <motion.main
      className="page-transition"
      initial={{ opacity: 0.0, x: 100 }}
      animate={{ opacity: 1.0, x: 0 }}
      exit={{ opacity: 0.0, x: -100 }}
      transition={{
        duration: 0.2,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.main>
  );
}
