import { motion } from "motion/react";
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
      <motion.div className="flex flex-col h-full w-2/3 items-center justify-between">
        <motion.div className="flex flex-row w-full justify-between items-center p-20 border-b-1 border-purple-400">
          <motion.div className="flex flex-col w-2/3" variants={item}>
            <h2 className="text-[32pt]">Game Development Councelor</h2>
            <h3 className="text-[16pt] mb-10">June 2023</h3>
            <p className="whitespace-pre-wrap">
              Taught over 30 high school students the fundamentals of Construct
              3, a beginner-friendly visual scripting-based game engine.
              <br />
              <br />
              Coordinated with a team of counselors specialized in different
              fields, such as Film and Audio, to create the best learning
              experience for the campers
            </p>
          </motion.div>

          <motion.img
            className="w-50 h-50 rounded-3xl"
            src="icamp.png"
          ></motion.img>
        </motion.div>

        <motion.div className="flex flex-row w-full justify-between items-center p-20 border-b-1 border-purple-400">
          <motion.div className="flex flex-col w-2/3" variants={item}>
            <h2 className="text-[32pt]">Programming Contest Judge</h2>
            <h3 className="text-[16pt] mb-10">January - June 2024</h3>
            <p className="whitespace-pre-wrap">
              Worked with a team to create sets of programming problems for West
              Chester University’s programming contest.
              <br />
              <br />
              Setted up crucial software for the contest, such as presentations,
              computers, and IDEs.
              <br />
              <br />
              Guided competitors that came across any issues with the software
              to ensure that these problems do not significantly hinder their
              performance during the contest.
            </p>
          </motion.div>

          <motion.img
            className="w-50 h-50 rounded-3xl"
            src="wcpc.png"
          ></motion.img>
        </motion.div>

        <motion.div className="flex flex-row w-full justify-between items-center p-20 border-b-1 border-purple-400">
          <motion.div className="flex flex-col w-2/3" variants={item}>
            <h2 className="text-[32pt]">Computer Science Tutor</h2>
            <h3 className="text-[16pt] mb-10">January 2025 - Current</h3>
            <p className="whitespace-pre-line">
              Worked as a tutor for West Chester University’s Learning and
              Resource Center and Computer Science department.
              <br />
              <br />
              Guided college students through various academic challenges and
              taught them necessary skills and strategies.
            </p>
          </motion.div>

          <motion.img
            className="w-1/4 rounded-3xl"
            src="una139.jpg"
            variants={item}
          ></motion.img>
        </motion.div>

        <motion.div className="flex flex-row w-full justify-between items-center p-20 border-b-1 border-purple-400">
          <motion.div className="flex flex-col w-2/3" variants={item}>
            <h2 className="text-[32pt]">AI Research Assistant</h2>
            <h3 className="text-[16pt] mb-10">January 2025 - Current</h3>
            <p>
              Worked with a professor and another student to develop an app to
              translate from American Sign Language to English and vice versa.
              <br />
              <br />
              Created and trained a machine learning model to parse a video into
              an English sentence using Pytorch.
              <br />
              <br />
              Presented a prototype at West Chester University’s poster
              conference and to the Dean of Computer Science and Mathematics.
              <br />
              <br />
              Co-authored and published a peer-reviewed paper in an MDPI
              journal.
            </p>
          </motion.div>

          <motion.img
            className="w-40 h-40 rounded-3xl"
            src="ASL_playback_new_interface.png"
            variants={item}
          ></motion.img>
        </motion.div>
      </motion.div>
    </PageTransition>
  );
}
