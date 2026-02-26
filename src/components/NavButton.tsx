import { motion } from "motion/react";
import { Link, useLocation } from "react-router-dom";

export default function NavButton({
  children,
  link,
}: {
  children?: React.ReactNode;
  link: string;
}) {
  const location = useLocation();
  return (
    <li
      className={location.pathname === link ? "navbutton-selected" : "navbutton"}
    >
      <Link to={link}>{children != null && children}</Link>
      {location.pathname === link && (
        <motion.div
          layoutId="underline"
          id="underline"
        />
      )}
    </li>
  );
}
