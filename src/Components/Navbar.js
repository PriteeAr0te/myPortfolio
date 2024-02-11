import React, { useState } from "react";

const Navbar = ({
  heroRef,
  skillsRef,
  projectsRef,
  experienceRef,
  educationRef,
  contactRef,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div>
      <nav className="w-full h-14 flex justify-between fixed top-0 items-center px-4 md:px-5 py-3 z-20 bg-slate-900 font-montserrat">
        <div className="flex items-center">
          <svg
            className="text-white  md:ml-2"
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            version="1.1"
            viewBox="0 0 32 32"
            height="3rem"
            width="3rem"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.632 5.289c-0.613 0.129-1.823 0.565-2.662 0.984-1.275 0.613-1.759 0.968-2.921 2.13s-1.517 1.646-2.13 2.921c-1.646 3.373-1.646 6.6 0 10.005 0.613 1.291 0.952 1.759 2.13 2.921 1.178 1.178 1.63 1.501 2.921 2.13 1.969 0.936 2.921 1.162 5.002 1.162s3.034-0.226 5.002-1.162c1.275-0.613 1.727-0.952 2.921-2.13 1.178-1.194 1.517-1.646 2.13-2.921 0.774-1.63 1-2.388 1.178-4.002l0.113-1h-3.195l-0.21 1.243c-1.017 6.471-8.907 9.069-13.587 4.47-3.792-3.712-2.969-10.005 1.678-12.732 0.871-0.516 2.63-1.049 3.437-1.049h0.532v-3.227l-0.597 0.016c-0.339 0-1.113 0.113-1.743 0.242zM14.213 9.645c-3.421 0.92-5.648 4.325-5.067 7.745 0.662 3.792 4.212 6.39 7.891 5.761 3.776-0.645 6.39-4.212 5.761-7.859-0.71-4.115-4.647-6.713-8.585-5.648z"></path>
          </svg>

          <p className="text-white font-bold ml-1 text-2xl font-playfair-display">
            MERN <span className="text-xl font-semibold">Developer</span>
          </p>
        </div>
        <ul
          className={`md:flex menu-container ${
            menuOpen
              ? "flex flex-col absolute top-full bg-slate-950 bg-opacity-80 h-75 py-4 w-full"
              : "hidden"
          }`}
        >
          <li>
            <a
              className="text-white hover:text-indigo-600 hover:cursor-pointer font-medium ml-3 mx-2 hover:border-2 hover:border-indigo-900 hover:py-2 hover:px-3 hover:rounded-2xl"
              onClick={() => scrollToRef(heroRef)}
            >
              About
            </a>
          </li>
          <li>
            <a
              className="text-white font-medium ml-3 mx-2 hover:text-indigo-600 hover:cursor-pointer hover:border-2 hover:border-indigo-900 hover:py-2 hover:px-3 hover:rounded-2xl"
              onClick={() => scrollToRef(skillsRef)}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              className="text-white font-medium ml-3 mx-2 hover:text-indigo-600 hover:cursor-pointer hover:border-2 hover:border-indigo-900 hover:py-2 hover:px-3 hover:rounded-2xl"
              onClick={() => scrollToRef(projectsRef)}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              className="text-white font-medium ml-3 mx-2 hover:text-indigo-600 hover:cursor-pointer hover:border-2 hover:border-indigo-900 hover:py-2 hover:px-3 hover:rounded-2xl"
              onClick={() => scrollToRef(experienceRef)}
            >
              Experience
            </a>
          </li>
          <li>
            <a
              className="text-white font-medium ml-3 mx-2 hover:text-indigo-600 hover:cursor-pointer hover:border-2 hover:border-indigo-900 hover:py-2 hover:px-3 hover:rounded-2xl"
              onClick={() => scrollToRef(educationRef)}
            >
              Education
            </a>
          </li>
          <li>
            <a
              className="text-white font-medium ml-3 mx-2 hover:text-indigo-600 hover:cursor-pointer hover:border-2 hover:border-indigo-900 hover:py-2 hover:px-3 hover:rounded-2xl"
              onClick={() => scrollToRef(contactRef)}
            >
              Contact
            </a>
          </li>
        </ul>
        <div className="flex justify-between items-center">
          <a
            className="bg-slate-950 rounded-3xl border-indigo-900 hover:border-2 hover:bg-indigo-500 hover:text-indigo-100 text-indigo-600 font-semibold p-2 px-3 cursor-pointer sm:mr-3"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/PriteeAr0te"
          >
            <i className="fa-brands fa-github p-1.5 pl-1"></i>
            Github Profile
          </a>
          <div className="md:hidden m-2 sm:ml-5 sm:mx-3" onClick={toggleMenu}>
            <i
              className={`fa-solid fa-bars text-2xl text-white block ${
                menuOpen ? "hidden" : "block"
              }`}
            ></i>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
