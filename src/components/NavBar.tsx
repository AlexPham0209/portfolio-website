export default function NavBar({ children }: { children?: React.ReactNode }) {
  return (
    <nav className="flex flex-row justify-evenly items-stretch bg-white rounded-bl-2xl drop-shadow-md p-3.5 w-full fixed top-0">
      <span className="w-1/3 p-1.5 font-bold"> Alex Pham </span>
      <ul className="flex flex-row w-1/4 justify-evenly">
        {children != null && children}
      </ul>
    </nav>
  );
}
