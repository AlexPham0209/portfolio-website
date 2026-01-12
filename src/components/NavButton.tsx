import { Link, useLocation } from "react-router-dom";

export default function NavButton({children, link}: {children?: React.ReactNode, link: string}) {
    const location = useLocation();
    return (
        <li className={location.pathname === link ? "p-1.5 text-center font-semibold transition-all duration-400" : "p-1.5 font-semibold text-purple-500"}>
            <Link to={link}>
                {children != null && children}
            </Link>
        </li>
    );
}
