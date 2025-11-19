import React from "react";

const Navbar = () => {
  const sections = ["home", "about", "skills", "projects", "contact"];

  return (
    
    <nav className="fixed top-0 left-0 w-full bg-black/40 backdrop-blur-md z-50 px-10 py-4 flex justify-between items-center">
      <h1 className="text-white text-2xl font-bold">Tanishq.dev</h1>

      <ul className="flex gap-8 text-white font-medium">
        {sections.map((sec) => (
          <li key={sec}>
            <a href={`#${sec}`} className="hover:text-purple-400 transition">
              {sec.toUpperCase()}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
