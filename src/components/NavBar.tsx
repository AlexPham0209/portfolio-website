export default function NavBar({ children }: { children?: React.ReactNode }) {
  return (
    <nav className="flex flex-row justify-evenly bg-white rounded-bl-2xl drop-shadow-md p-3.5 w-screen fixed top-0 z-10">
      <div className=" w-1/4  p-1.5 font-bold flex-row justify-center items-baseline flex-nowrap">
        <span className="text-center align-middle mr-5"> Alex Pham </span>
        
        <a className="inline-block align-middle mr-5" href="Alexander-Pham-Resume.pdf">
          <img className="w-6 h-6" src="resume.png"></img>
        </a>

        <a className="inline-block align-middle mr-5" href="https://github.com/AlexPham0209">
          <img className="w-6 h-6" src="github.png"></img>
        </a>
      </div>

      <ul className="flex flex-row w-1/4 justify-evenly">
        {children != null && children}
      </ul>
    </nav>
  );
}
