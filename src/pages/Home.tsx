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
      <div className="flex flex-col h-full w-1/2 items-center justify-baseline">
        <motion.div variants={container} initial="hidden" animate="show">
          <div className="flex flex-row items-center p-5 justify-between">
            <div className="flex flex-col w-2/3 items-baseline">
              <motion.h2 className="mb-5 text-base text-[32pt]" variants={item}>
                Hello! I'm Alex
              </motion.h2>
              <motion.p className="mb-5" variants={item}>
                Hello! I am a software and machine learning engineer currently
                studying at West Chester University!
              </motion.p>

              {/* <motion.div variants={item}>
                            <Link className="m-0 rounded-2xl bg-purple-600 text-white p-3" to="/projects">
                                Projects
                            </Link>
                        </motion.div> */}
            </div>

            <motion.img
              className="size-1/4 rounded-xl"
              src="Alex-1.jpg"
              variants={item}
            ></motion.img>
          </div>

          <div className="flex flex-col p-5 w-full items-baseline">
            <motion.h2 className="mb-5 text-[32pt]" variants={item}>
              About Me
            </motion.h2>
            <motion.p className="mb-5 pt-5 pb-5" variants={item}>
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
