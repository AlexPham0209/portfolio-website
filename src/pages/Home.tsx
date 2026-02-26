import { motion, stagger } from "motion/react";
import { PageTransition } from "./PageTransition";
// import { Link } from "react-router-dom";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: stagger(0.065),
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export default function Home() {
  return (
    <PageTransition>
      <div className="home">
        <motion.div variants={container} initial="hidden" animate="show">
          <div className="intro">
            <div className="intro-body">
              <motion.h2 variants={item}>
                Hello! I'm Alex
              </motion.h2>
              <motion.p variants={item}>
                Hello! I am a software and machine learning engineer currently
                studying at West Chester University!
              </motion.p>
            </div>

            <motion.img
              src="Alex-1.jpg"
              variants={item}
            />
          </div>

          <div className="about">
            <motion.h2 variants={item}>
              About Me
            </motion.h2>
            <motion.p variants={item}>
              I am Alex Pham and I'm currently studying computer science for my
              masters at West Chester University. During this time, I've been
              heavily involved in various activities on campus. I was the
              president of the Game Development Club, and the vice president of
              Computer Science Club during my undergraduate. My greatest
              accomplishment in those two positions has been fostering
              diversity, creating a welcoming community, and educating people of
              all skill levels. I was also an active member in the school's
              competitive programming team, helping us win several competitions
              such as CCSE and ICPC. I also regularly work in the department as
              a tutor as well as a researcher for ASL translation. Currently, I
              have been experimenting with Artificial Intelligence and Machine
              Learning!
            </motion.p>
          </div>
        </motion.div>
      </div>
    </PageTransition>
  );
}
