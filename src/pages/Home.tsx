import { motion, stagger } from "motion/react";
import { PageTransition } from "./PageTransition";
import { Link } from "react-router-dom";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: stagger(0.065)
    }
  }
}

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
}


export default function Home() {
    return (
        <PageTransition>
            <div className="flex flex-col h-full w-2/3 items-center">
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                >
                <div className="flex flex-row items-center justify-evenly" >
                    <div className="flex flex-col p-2.5 w-1/2 items-center"> 
                        <motion.h1 className="mb-5" variants={item}>Alexander Pham</motion.h1>
                        <motion.p className="mb-5 pt-5 pb-5" variants={item}>
                            Hello! I am Alex Pham and I'm currently studying computer science during my first year of masters at West Chester University.  
                            During this time, I've been heavily involved in various activities on campus. 
                            I was the President of the Game Development Club, and the Vice President of Computer Science Club. 
                            My greatest accomplishment in those two positions has been fostering diversity, creating a welcoming community, and educating people of all skill levels. 
                            I was also an active member in the school's competitive programming team, and regularly volunteer throughout the department. 
                            Currently, I have been focusing Machine learning and AI!
                        </motion.p>

                        <motion.div variants={item}>
                            <Link className="m-0 rounded-2xl bg-purple-600 text-white p-3" to="/projects">
                                Projects
                            </Link>
                        </motion.div>
                    </div>

                    <motion.img className="size-1/4 rounded-xl" src="public/Face.jpg" variants={item}></motion.img>
                </div>

                

                </motion.div>
            </div>
        </PageTransition>
    );
}