import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [isHamburger, setIsHamburger] = useState(false)

  const handleLogo = () => {
    navigate("/");
    window.location.reload();
  };

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleHamburger = () => {
    setIsHamburger(!isHamburger)
  };

  return (
    <>
      <div className="flex justify-between items-center text-gray-100 p-4 text-lg font-semibold sticky top-0 bg-black">
        <div className="ml-6">
          <p
            className="font-bold text-xl cursor-pointer"
            onClick={handleLogo}
          >
            CP<span className="text-yellow-500">03</span>
          </p>
        </div>
        <div className="relative">

          <div
            className="cursor-pointer flex flex-col gap-1 md:hidden"
            onClick={toggleHamburger}
          >
            {!isHamburger ? (
              <>
                <div className="bg-white w-10 h-1 rounded-lg"></div>
                <div className="bg-white w-10 h-1 rounded-lg"></div>
                <div className="bg-white w-10 h-1 rounded-lg"></div>
              </>
            ) : (
              <div className="text-yellow-500 text-xl font-bold">✕</div>
            )}
          </div>
          <nav
            className={`absolute top-12 right-0  bg-slate-950  text-white md:static md:flex md:w-auto md:bg-transparent ${
              isHamburger ? "block" : "hidden"
            }`} 
          >
            <ul className="flex flex-col items-center md:flex-row">
              <li
                className="mx-4 my-2 md:my-0 cursor-pointer hover:text-yellow-500"
                onClick={() => handleScroll("home")}
              >
                Home
              </li>
              <li
                className="mx-4 my-2 md:my-0 cursor-pointer hover:text-yellow-500"
                onClick={() => handleScroll("about")}
              >
                About
              </li>
              <li
                className="mx-4 my-2 md:my-0 cursor-pointer hover:text-yellow-500"
                onClick={() => handleScroll("projects")}
              >
                Projects
              </li>
              <li
                className="mx-4 my-2 md:my-0 cursor-pointer hover:text-yellow-500"
                onClick={() => handleScroll("skills")}
              >
                Skills
              </li>
              <li
                className="mx-4 my-2 md:my-0 cursor-pointer hover:text-yellow-500"
                onClick={() => handleScroll("contact")}
              >
                Contact
              </li>
            </ul>
          </nav>
        </div>

        <div className="hidden md:block">
          <button className="p-1 mx-6 rounded-md px-4 cursor-pointer bg-yellow-500 hover:scale-110 " >
            <a href="mailto:cpsaw999041@gmail.com">Hire Me</a>
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
