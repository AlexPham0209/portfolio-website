import { motion } from "motion/react";
import { Link, useLocation } from "react-router-dom";

export default function NavButton({children, link}: {children?: React.ReactNode, link: string}) {
    const location = useLocation();
    return (
        <motion.li className={location.pathname === link ? "relative p-1.5 pl-5 pr-5 text-center font-medium transition-all duration-600 bg-gray-100 text-purple-500 rounded-t-md" : "p-1.5 pl-5 pr-5 font-medium text-purple-500"}>
            <Link to={link}>
                {children != null && children}
            </Link>
            {location.pathname === link && <motion.div className="absolute inline border-b-2 w-full h-full top-0 left-0" layoutId="underline" id="underline"/>}
        </motion.li>
    );
}
