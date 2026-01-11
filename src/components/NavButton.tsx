import { Link } from "react-router-dom";

export default function NavButton({children, link}: {children?: React.ReactNode, link: string}) {
    return (
        <li className="p-2.5 text-center">
            <Link to={link}>
                {children != null && children}
            </Link>
        </li>
    );
}
