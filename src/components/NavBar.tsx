export default function NavBar({children}: {children?: React.ReactNode}) {
    return (
        <nav className="flex flex-row justify-between items-stretch bg-white rounded-bl-2xl drop-shadow-md p-5 w-full">
            <span className="w-1/3 p-2.5 font-bold"> Portfolio Website </span>
            <ul className="flex flex-row w-1/4 justify-evenly">
                {children != null && children}
            </ul>
        </nav>
    );
}
