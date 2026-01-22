import { motion, stagger } from "motion/react";
import { PageTransition } from "./PageTransition";

// const container = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: {
//       delayChildren: stagger(0.2),
//     },
//   },
// };

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export default function Experience() {
  return (
    <PageTransition>
      <motion.div 
        className="flex flex-col h-full w-2/3 items-center justify-between"
      >
        <motion.div
          className="flex flex-row w-full justify-between p-20 border-b-1 border-purple-400"
          initial="hidden"
          whileInView="show"
          viewport={{amount: 0.9, once: true}}
          
        >
          <motion.div className="flex flex-col w-2/3" variants={item}>
            <h2 className="text-[32px] mb-10">Computer Science Researcher</h2>
            <p>
              Worked with a professor and another student to develop an app to
              translate from American Sign Language to English and vice versa.
              Created and trained a machine learning model to parse a video into
              an English sentence using Pytorch. Presented a prototype at West
              Chester University’s poster conference and to the Dean of Computer
              Science and Mathematics.
            </p>
          </motion.div>

          <motion.img
            className="w-1/4 rounded-3xl"
            src="ASL_playback_new_interface.png"
            variants={item}
          ></motion.img>
        </motion.div>

        <motion.div
          className="flex flex-row w-full justify-between p-20 border-b-1 border-purple-400"
          initial="hidden"
          whileInView="show"
          viewport={{amount: 0.8}}
        >
          <motion.div className="flex flex-col w-2/3" variants={item}>
            <h2 className="text-[32px] mb-10">Computer Science Tutor</h2>
            <p>
              Worked as a tutor for West Chester University’s Learning and
              Resource Center and Computer Science department. Guided college
              students through various academic challenges and taught them
              necessary skills and strategies.
            </p>
          </motion.div>

          <motion.img
            className="w-1/4 rounded-3xl"
            src="ASL_playback_new_interface.png"
            variants={item}
          ></motion.img>
        </motion.div>

        <motion.div
          className="flex flex-row w-full justify-between p-20 border-b-1 border-purple-400"
          initial="hidden"
          whileInView="show"
          viewport={{amount: 0.8}}
        >
          <motion.div className="flex flex-col w-2/3" variants={item}>
            <h2 className="text-[32px] mb-10">Programming Contest Judge</h2>
            <p>
              Worked with a team to create sets of programming problems for West
              Chester University’s programming contest. Organized and set up
              crucial software for the contest, such as presentations,
              computers, and IDEs. Guided competitors that came across any
              issues with the software to ensure that these problems do not
              significantly hinder their performance during the contest.
            </p>
          </motion.div>

          <motion.img
            className="w-1/4 rounded-3xl"
            src="ASL_playback_new_interface.png"
          ></motion.img>
        </motion.div>
      </motion.div>
    </PageTransition>
  );
}
