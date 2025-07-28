import {useState} from "react";

export default function Navigationbar() {

    const[menu, setMenu] = useState(false);


    function toggMenu() {
        setMenu(!menu);
    }

    return (
    <nav className="bg-gradient-to-b from-blue-400 to-blue-700 text-white px-6 py-4 flex items-center justify-between w-full fixed top-0 left-0 z-10 shadow-md">
      <h1 className="text-2xl font-bold">  Simpler Technologies</h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-8 text-lg">
        <li><a href="#" className="hover:underline">Home</a></li>
        <li><a href="#" className="hover:underline">About</a></li>
        <li><a href="#" className="hover:underline">Contact</a></li>
      </ul>

      {/* Mobile Menu Button */}
      <button
        onClick={toggMenu}
        className="md:hidden text-3xl focus:outline-none"
      >
        ☰
      </button>

      {/* Mobile Menu */}
      <div
        className={`absolute top-16 left-0 w-full bg-blue-600 text-white 
          md:hidden rounded-lg shadow-lg  transform transition-all duration-300 ease-in-out ${
          menu ? "max-h-60 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col items-center py-4 space-y-4 text-lg">
          <li><a href="#" onClick={toggMenu} className="hover:underline">Home</a></li>
          <li><a href="#" onClick={toggMenu} className="hover:underline">About</a></li>
          <li><a href="#" onClick={toggMenu} className="hover:underline">Contact</a></li>
        </ul>
      </div>
      
    </nav>
  );
}