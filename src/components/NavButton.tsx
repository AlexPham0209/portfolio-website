import { useResolvedPath } from "react-router-dom";

export default function NavButton({children, link}: {children?: React.ReactNode, link: string}) {
    return (
        <li className="p-2.5 text-center">
            <a href={link}>
                {children != null && children}
            </a>
        </li>
    );
}
