import { motion, stagger } from "motion/react";
import { PageTransition } from "./PageTransition";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: stagger(0.1)
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
                    <div className="p-2.5 w-1/2"> 
                        <motion.h1 className="mb-5" variants={item}>Alexander Pham</motion.h1>
                        <motion.p variants={item}>
                            Hello! I am Alex Pham and I'm currently studying computer science during my first year of masters at West Chester University.  
                            During this time, I've been heavily involved in various activities on campus. 
                            I was the President of the Game Development Club, and the Vice President of Computer Science Club. 
                            My greatest accomplishment in those two positions has been fostering diversity, creating a welcoming community, and educating people of all skill levels. 
                            I was also an active member in the school's competitive programming team, and regularly volunteer throughout the department. 
                            Currently, I have been focusing as a passion project!
                        </motion.p>
                    </div>

                    <motion.img className="size-1/4 rounded-xl" src="public\Face.jpg" variants={item}></motion.img>
                </div>

                </motion.div>
            </div>
        </PageTransition>
    );
}