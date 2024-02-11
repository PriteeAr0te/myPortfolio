import React from "react";
import netlifyIcon from "./Icons/netlify.png";

const Projects = () => {
  return (
    <div className="w-full bg-gradient-to-b from-slate-950 to-indigo-950 p-8 pt-[58px] min-h-screen font-montserrat">
      <h1 className="w-full text-center text-5xl font-bold text-slate-200 hover:tracking-wide tracking-wider font-playfair-display">
        Projects
      </h1>
      <div className="w-full text-center">
        <p className="text-slate-400 text-xl mt-5 font-medium  px-7 md:px-[15rem] font-source-serif">
          I have worked on a wide range of projects, from web applications to
          MERN applications. Here are some of my projects.
        </p>
      </div>
      <div className="md:flex justify-center flex-wrap my-10 px-5 md:px-7">
        <div className=" box bg-slate-950 lg:w-[30%] lg:h-[500px] rounded-xl m-3 p-3 pb:4 md:px-5 transition duration-300 ease-in-out transform hover:shadow-lg hover:-translate-y-2 hover:transition-all hover:duration-200 overflow-hidden hover:shadow-opacity-100 hover:rounded-2xl border-emerald-600 border-2 flex flex-col">
          <div className="flex flex-wrap justify-center my-2 mb-2 font-semibold  text-violet-600">
            <span className="bg-violet-600/5 px-2 rounded-xl m-1">HTML</span>
            <span className="bg-violet-600/5 px-2 rounded-xl m-1">CSS</span>
            <span className="bg-violet-600/5 px-2 rounded-xl m-1">
              Bootstrap
            </span>
            <span className="bg-violet-600/5 px-2 rounded-xl m-1">
              Javascript
            </span>
            <span className="bg-violet-600/5 px-2 rounded-xl m-1">React</span>
            <span className="bg-violet-600/5 px-2 rounded-xl m-1">Nodejs</span>
            <span className="bg-violet-600/5 px-2 rounded-xl m-1">
              Expressjs
            </span>
            <span className="bg-violet-600/5 px-2 rounded-xl m-1">MongoDB</span>
          </div>
          <div className="text-slate-300 mt-4 text-xl font-semibold font-playfair-display">
            iNotebook
          </div>
          <div className="text-zinc-400/60 mt-3 font-medium text-md font-source-serif">
            iNotebook is a user-friendly note-taking app where users can create,
            edit, and delete notes. It features secure user authentication for
            private access. Ideal for organizing tasks and ideas efficiently.
          </div>
          <div className="flex justify-between mt-auto mb-1.5">
            <a
              className="hover:cursor-pointer"
              href="https://github.com/PriteeAr0te/iNotebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="text-white mt-auto mb-2 border-2 border-indigo-600 font-semibold hover:text-indigo-600 px-2.5 py-0.5 rounded-lg">
                View <i className="fa-brands fa-github p-2"></i>
              </div>
            </a>

            <a
              href="https://inotebook-pritee.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row justify-between hover:cursor-pointer"
            >
              <div className="text-white mt-auto mb-2 border-2 border-indigo-600 font-semibold hover:text-indigo-600 px-2.5 py-1.5 rounded-lg flex items-center">
                View
                <img
                  className="h-[20px] px-2"
                  src={netlifyIcon}
                  alt="Netlify Icon"
                />
              </div>
            </a>
          </div>
        </div>

        <div className=" box bg-slate-950 lg:w-[30%] lg:h-[500px] rounded-xl m-3 p-3 pb:4 md:px-5 transition duration-300 ease-in-out transform hover:shadow-lg hover:-translate-y-2 hover:transition-all hover:duration-200 overflow-hidden hover:shadow-opacity-100 hover:rounded-2xl border-emerald-600 border-2 flex flex-col">
          <div className="flex flex-wrap justify-center my-2 mb-2 font-semibold  text-violet-600">
            <span className="bg-violet-600/5 px-2 rounded-xl m-1">HTML</span>
            <span className="bg-violet-600/5 px-2 rounded-xl m-1">CSS</span>
            <span className="bg-violet-600/5 px-2 rounded-xl m-1">
              Bootstrap
            </span>
            <span className="bg-violet-600/5 px-2 rounded-xl m-1">
              Javascript
            </span>
            <span className="bg-violet-600/5 px-2 rounded-xl m-1">React</span>
            <span className="bg-violet-600/5 px-2 rounded-xl m-1">Nodejs</span>
            <span className="bg-violet-600/5 px-2 rounded-xl m-1">
              Expressjs
            </span>
            <span className="bg-violet-600/5 px-2 rounded-xl m-1">MongoDB</span>
          </div>
          <div className="text-slate-300 mt-4 text-xl font-semibold font-playfair-display">
            UserPortal
          </div>
          <div className="text-zinc-400/60 mt-3 font-medium text-md font-source-serif">
            Experience seamless user registration, login, and profile
            management. Connect with users through personalized profiles and
            easy messaging functionalities. Simplify communication and
            interaction with this comprehensive platform
          </div>
          <div className="flex justify-between mt-auto mb-1.5">
            <a
              className="hover:cursor-pointer"
              href="https://github.com/PriteeAr0te/MERNapplication"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="text-white mt-auto mb-2 border-2 border-indigo-600 font-semibold hover:text-indigo-600 px-2.5 py-0.5 rounded-lg">
                View <i className="fa-brands fa-github p-2"></i>
              </div>
            </a>

            <a
              href="https://mernapp-pritee.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row justify-between hover:cursor-pointer"
            >
              <div className="text-white mt-auto mb-2 border-2 border-indigo-600 font-semibold hover:text-indigo-600 px-2.5 py-1.5 rounded-lg flex items-center">
                View
                <img
                  className="h-[20px] px-2"
                  src={netlifyIcon}
                  alt="Netlify Icon"
                />
              </div>
            </a>
          </div>
        </div>

        <div className="bg-slate-950 lg:w-[30%] lg:h-[500px] rounded-xl m-3 pb-4 p-3 md:px-5 transition duration-300 ease-in-out transform hover:shadow-lg hover:-translate-y-2 hover:transition-all hover:duration-200 overflow-hidden hover:shadow-opacity-100 hover:rounded-2xl border-emerald-600 border-2 flex flex-col">
          <div className="flex flex-wrap my-2 justify-center font-semibold  text-violet-600">
            <span className="bg-violet-600/5 px-2 rounded-xl m-1">HTML</span>
            <span className="bg-violet-600/5 px-2 rounded-xl m-1">CSS</span>
            <span className="bg-violet-600/5 px-2 rounded-xl m-1">
              Bootstrap
            </span>
            <span className="bg-violet-600/5 px-2 rounded-xl m-1">
              Javascript
            </span>
            <span className="bg-violet-600/5 px-2 rounded-xl m-1">React</span>
            <span className="bg-violet-600/5 px-2 rounded-xl m-1">Nodejs</span>
            <span className="bg-violet-600/5 px-2 rounded-xl m-1">
              Expressjs
            </span>
            <span className="bg-violet-600/5 px-2 rounded-xl m-1">MongoDB</span>
            <span className="bg-violet-600/5 px-2 rounded-xl m-1">D3.js</span>
          </div>
          <div className="text-slate-300 mt-3 text-xl font-semibold font-playfair-display">
            Data Visualization Dashboard
          </div>
          <div className="text-zinc-400/60 mt-4 font-medium text-md font-source-serif">
            Harness the power of data with this dynamic dashboard powered by
            D3.js. Utilizing JSON data, visualize insights effortlessly through
            interactive bar and line charts. Apply filters seamlessly to delve
            deeper into your data, facilitating informed decision-making.
          </div>
          <div className="flex justify-between mt-auto mb-1.5">
            <a
              className="hover:cursor-pointer"
              href="https://github.com/PriteeAr0te/Test_Assignment"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="text-white mt-auto mb-2 border-2 border-indigo-600 font-semibold hover:text-indigo-600 px-2.5 py-0.5 rounded-lg">
                View <i className="fa-brands fa-github p-2"></i>
              </div>
            </a>

            <a
              href="https://datavisualization-dashboard-pritee.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row justify-between hover:cursor-pointer"
            >
              <div className="text-white mt-auto mb-2 border-2 border-indigo-600 font-semibold hover:text-indigo-600 px-2.5 py-1.5 rounded-lg flex items-center">
                View
                <img
                  className="h-[20px] px-2"
                  src={netlifyIcon}
                  alt="Netlify Icon"
                />
              </div>
            </a>
          </div>
        </div>

        <div className="bg-slate-950 lg:w-[30%] lg:h-[500px] rounded-xl m-3 pb-4 p-3 md:px-5 transition duration-300 ease-in-out transform hover:shadow-lg hover:-translate-y-2 hover:transition-all hover:duration-200 overflow-hidden hover:shadow-opacity-100 hover:rounded-2xl border-emerald-600 border-2 flex flex-col">
          <div className="flex flex-wrap my-2 justify-center font-semibold  text-violet-600">
            <span className="bg-violet-600/5 px-2 rounded-xl m-1">HTML</span>
            <span className="bg-violet-600/5 px-2 rounded-xl m-1">CSS</span>
            <span className="bg-violet-600/5 px-2 rounded-xl m-1">
              Bootstrap
            </span>
            <span className="bg-violet-600/5 px-2 rounded-xl m-1">
              Javascript
            </span>
            <span className="bg-violet-600/5 px-2 rounded-xl m-1">React</span>
          </div>
          <div className="text-slate-300 mt-4 text-xl font-semibold font-playfair-display">
            TextUtils
          </div>
          <div className="text-zinc-400/60 mt-3 font-medium text-md font-source-serif">
            Empower users to effortlessly manipulate text with TextUtils. This
            React-powered tool offers functionalities such as text case
            conversion, text replacement, and text analysis, enhancing
            productivity with clean and intuitive design.
          </div>
          <div className="flex justify-between mt-auto mb-1.5">
            <a
              className="hover:cursor-pointer"
              href="https://github.com/PriteeAr0te/TextUtils"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="text-white mt-auto mb-2 border-2 border-indigo-600 font-semibold hover:text-indigo-600 px-2.5 py-0.5 rounded-lg">
                View <i className="fa-brands fa-github p-2"></i>
              </div>
            </a>

            <a
              href="https://textutils-pritee18025.netlify.app/home"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row justify-between hover:cursor-pointer"
            >
              <div className="text-white mt-auto mb-2 border-2 border-indigo-600 font-semibold hover:text-indigo-600 px-2.5 py-1.5 rounded-lg flex items-center">
                View
                <img
                  className="h-[20px] px-2"
                  src={netlifyIcon}
                  alt="Netlify Icon"
                />
              </div>
            </a>
          </div>
        </div>
        <div className="bg-slate-950 lg:w-[30%] lg:h-[500px] rounded-xl m-3 pb-4 p-3 md:px-5 transition duration-300 ease-in-out transform hover:shadow-lg hover:-translate-y-2 hover:transition-all hover:duration-200 overflow-hidden hover:shadow-opacity-100 hover:rounded-2xl border-emerald-600 border-2 flex flex-col">
          <div className="flex flex-wrap my-2 justify-center font-semibold  text-violet-600">
            <span className="bg-violet-600/5 px-2 rounded-xl m-1">HTML</span>
            <span className="bg-violet-600/5 px-2 rounded-xl m-1">CSS</span>
            <span className="bg-violet-600/5 px-2 rounded-xl m-1">
              Bootstrap
            </span>
          </div>
          <div className="text-slate-300 mt-5 text-xl font-semibold font-playfair-display">
            Amazon Clone
          </div>
          <div className="mt-4 overflow-hidden">
            <div className="text-zinc-400/60 font-medium text-md h-[6em] overflow-hidden font-source-serif">
              Dive into web development basics with this Amazon clone project.
              Using HTML, CSS, and Bootstrap, replicate the iconic Amazon home
              page layout. Perfect for beginners looking to practice front-end
              design skills in a familiar context.
            </div>
          </div>
          <div className="flex justify-between mt-auto mb-1.5">
            <a
              className="hover:cursor-pointer"
              href="https://github.com/PriteeAr0te/AmazonClone"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="text-white mt-auto mb-2 border-2 border-indigo-600 font-semibold hover:text-indigo-600 px-2.5 py-0.5 rounded-lg">
                View <i className="fa-brands fa-github p-2"></i>
              </div>
            </a>

            <a
              href="https://priteear0te.github.io/AmazonClone/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row justify-between hover:cursor-pointer"
            >
              <div className="text-white mt-auto mb-2 border-2 border-indigo-600 font-semibold hover:text-indigo-600 px-2.5 py-1.5 rounded-lg flex items-center">
                View
                <img
                  className="h-[20px] px-2"
                  src={netlifyIcon}
                  alt="Netlify Icon"
                />
              </div>
            </a>
          </div>
        </div>
        <div className="bg-slate-950 lg:w-[30%] lg:h-[500px] rounded-xl m-3 pb-4 p-3 md:px-5 transition duration-300 ease-in-out transform hover:shadow-lg hover:-translate-y-2 hover:transition-all hover:duration-200 overflow-hidden hover:shadow-opacity-100 hover:rounded-2xl border-emerald-600 border-2 flex flex-col">
          <div className="flex flex-wrap justify-center my-2 font-semibold  text-violet-600">
            <span className="bg-violet-600/5 px-2 rounded-xl m-1">HTML</span>
            <span className="bg-violet-600/5 px-2 rounded-xl m-1">CSS</span>
            <span className="bg-violet-600/5 px-2 rounded-xl m-1">
              Bootstrap
            </span>
            <span className="bg-violet-600/5 px-2 rounded-xl m-1">
              Javascript
            </span>
          </div>
          <div className="text-slate-300 mt-3 text-xl font-semibold font-playfair-display">
            Music App
          </div>
          <div className="overflow-hidden mt-4">
            <div className="text-zinc-400/60 font-medium text-md h-[6em] overflow-hidden font-source-serif">
              Dive into JavaScript basics with this simple music player project.
              Explore playing, pausing, and changing songs in a
              beginner-friendly environment. Ideal for honing foundational
              JavaScript skills while enjoying your favorite tunes.
            </div>
          </div>
          <div className="flex justify-between mt-auto mb-1.5">
            <a
              className="hover:cursor-pointer"
              href="https://github.com/PriteeAr0te/MyFirstWebApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="text-white mt-auto mb-2 border-2 border-indigo-600 font-semibold hover:text-indigo-600 px-2.5 py-0.5 rounded-lg">
                View <i className="fa-brands fa-github p-2"></i>
              </div>
            </a>

            <a
              href="https://priteear0te.github.io/MyFirstWebApp/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row justify-between hover:cursor-pointer"
            >
              <div className="text-white mt-auto mb-2 border-2 border-indigo-600 font-semibold hover:text-indigo-600 px-2.5 py-1.5 rounded-lg flex items-center">
                View
                <img
                  className="h-[20px] px-2"
                  src={netlifyIcon}
                  alt="Netlify Icon"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
