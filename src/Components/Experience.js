import React from "react";

const Experience = () => {
  return (
    <div className="w-full bg-gradient-to-b from-indigo-950 to-slate-950 pt-[58px] p-8 h-auto md:min-h-screen font-montserrat">
      <h1 className="w-full text-center text-5xl font-bold text-slate-200 hover:tracking-wide tracking-wider font-playfair-display">
        {" "}
        Experience{" "}
      </h1>
      <div className="w-full text-center">
        <p className="text-slate-400 text-xl mt-5 font-medium  px-7 md:px-[15rem] font-source-serif">
          Crafting code and conquering challenges, my internship as a software
          developer has been a platform for growth and learning.
        </p>
      </div>
      <div className="flex justify-center my-10">
        <div className="bg-gray-900 border-2 border-indigo-700 w-[60%] h-auto rounded-xl m-5 p-4 md:px-10  transition duration-300 ease-in-out transform hover:bg-gray-800 hover:shadow-lg hover:-translate-y-2">
          <div className="text-slate-100 text-xl font-playfair-display">
            Software Development Intern
          </div>
          <div className="text-slate-400">Agasti Technologies Pvt.Ltd</div>
          <div className="text-slate-500">July 2023 - oct 2023</div>
          <p className="text-slate-200 mt-4 font-source-serif">
            • Contributed to React, Node.js, and Express projects, emphasizing
            beginner-friendly development. • Facilitated code reviews and
            debugging sessions to maintain high software standards. • Oversaw
            user account management, maintenance tasks, and security monitoring
            for login systems.
          </p>
          {/* <div className='flex flex-wrap my-4'> */}
          <div className=" flex flex-wrap my-4">
            <b className="text-slate-100">Skills</b>
            <ul className="flex flex-wrap pl-6">
              <li className="text-slate-200 pl-3 flex items-center">
                <span className="mr-2">•</span> React
              </li>
              <li className="text-slate-200 pl-3 flex items-center">
                <span className="mr-2">•</span> Nodejs
              </li>
              <li className="text-slate-200 pl-3 flex items-center">
                <span className="mr-2">•</span> Expressjs
              </li>
              <li className="text-slate-200 pl-3 flex items-center">
                <span className="mr-2">•</span> HTML
              </li>
              <li className="text-slate-200 pl-3 flex items-center">
                <span className="mr-2">•</span> CSS
              </li>
              <li className="text-slate-200 pl-3 flex items-center">
                <span className="mr-2">•</span> JavaScript
              </li>
              <li className="text-slate-200 pl-3 flex items-center">
                <span className="mr-2">•</span> Bootstrap
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
