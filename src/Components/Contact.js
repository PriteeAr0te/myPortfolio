import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
const Contact = ({
  heroRef,
  skillsRef,
  projectsRef,
  experienceRef,
  educationRef,
  contactRef,
}) => {
  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_zl7ghdq", "template_zqn93or", form.current, {
        publicKey: "0vmjdWN1o0xt7_UX_",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Email Sent Successfully!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="w-full bg-gradient-to-b from-indigo-950 to-slate-950 min-h-screen font-montserrat">
      <h1 className="w-full text-center text-5xl font-bold text-slate-200 tracking-wide hover:tracking-wider font-playfair-display">
        {" "}
        Contact{" "}
      </h1>
      <div className="w-full text-center">
        <p className="text-slate-400 text-xl mt-3 font-medium px-7 md:px-[15rem] font-source-serif">
          Feel free to reach out to me for any questions or opportunities!
        </p>
      </div>
      <div className="flex justify-center flex-wrap my-3 p-[30px] md:p-[50px]">
        <div className="bg-slate-950 w-[50%] h-[570px] rounded-xl m-3 p-3 md:px-5 transition duration-300 ease-in-out transform hover:shadow-lg hover:-translate-y-2 hover:transition-all hover:duration-200 overflow-hidden hover:shadow-opacity-100 hover:rounded-2xl border-fuchsia-400 border-2">
          <div className="flex">
            <h1 className="text-indigo-500 text-2xl font-bold py-3 font-playfair-display">
              {" "}
              Email Me{" "}
            </h1>
          </div>
          <div>
            <form ref={form} className="form mx-auto" onSubmit={sendEmail}>
              <div className="mb-1.5 mt-3 md:px-5">
                <input
                  type="email"
                  name="user_email"
                  id="user_email"
                  className="my-3 bg-slate-950 w-full h-auto text-slate-300 border-2 border-slate-400 px-2 py-2"
                  placeholder="Your Email"
                  aria-label="email"
                  required
                />
              </div>
              <div className="mb-1.5 md:px-5">
                <input
                  type="text"
                  name="user_name"
                  id="user_name"
                  className="my-3 bg-slate-950 w-full h-auto text-slate-300 border-2 border-slate-400 px-2 py-2"
                  placeholder="Your Name"
                  aria-label="email"
                  required
                />
              </div>
              <div className="mb-1.5 md:px-5">
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  className="my-3 bg-slate-950 w-full h-auto text-slate-300 border-2 border-slate-400 px-2 py-2"
                  placeholder="Subject"
                  aria-label="subject"
                  required
                />
              </div>
              <div className="mb-1.5 md:px-5">
                <textarea
                  className="my-3 bg-slate-950 w-full h-auto text-slate-300 border-2 border-slate-400 px-2 py-2 scrollbar-thin scrollbar-webkit"
                  placeholder="Enter Message"
                  name="message"
                  id="message"
                  rows="3"
                ></textarea>
              </div>
              <div className=" flex justify-end pr-3 mt-3 w-full h-full md:px-5">
                <button
                  type="submit"
                  className="h-full w-full hover:bg-slate-950 rounded-xl border-indigo-700 border-2 bg-indigo-800 text-indigo-100 hover:text-indigo-400 font-semibold px-7 cursor-pointer text-lg hover:text-[20px] py-2"
                >
                  Send{" "}
                  <i className="fa-solid fa-paper-plane text-slate-300 ml-2.2 m-1 my-2.2"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <footer className="w-full h-auto bg-slate-950 pt-3 bottom-0">
        <div className="flex flex-col md:flex-row justify-center items-center pb-3">
          <div className="pt-3 p-7 w-auto h-auto bg-slate-950">
            <span className="text-2xl text-indigo-500 font-playfair-display">
              Pritee Arote
            </span>
            <div className="flex w-full justify-start mt-1.5">
              <i className="fa-solid fa-phone-flip text-indigo-500 text-md mt-1.5"></i>
              <p className="text-white text-md ml-2">+91 9322794841</p>
            </div>
            <div className="flex w-full justify-start mt-2">
              <i className="fa-solid fa-envelope text-indigo-500 text-md mt-1.5"></i>
              <p className="text-white text-md ml-2">
                arotepritee111@gmail.com
              </p>
            </div>
            <div className="flex w-full justify-start mt-2">
              <i className="fa-solid fa-map-location-dot text-indigo-500 text-md mt-1.5"></i>
              <p className="text-white text-md ml-2">Pune, Baner - 411045</p>
            </div>
          </div>
          <div>
            <ul className="flex justify-center p-7 menu-container">
              <li>
                <a
                  className="text-white font-semibold ml-3 mx-2 hover:text-indigo-600 hover:border-2 hover:border-indigo-900 hover:py-2 hover:px-3 hover:rounded-2xl"
                  onClick={() => scrollToRef(heroRef)}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="text-white font-semibold ml-3 mx-2 hover:text-indigo-600 hover:border-2 hover:border-indigo-900 hover:py-2 hover:px-3 hover:rounded-2xl"
                  onClick={() => scrollToRef(skillsRef)}
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  className="text-white font-semibold ml-3 mx-2 hover:text-indigo-600 hover:border-2 hover:border-indigo-900 hover:py-2 hover:px-3 hover:rounded-2xl"
                  onClick={() => scrollToRef(projectsRef)}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  className="text-white font-semibold ml-3 mx-2 hover:text-indigo-600 hover:border-2 hover:border-indigo-900 hover:py-2 hover:px-3 hover:rounded-2xl"
                  onClick={() => scrollToRef(experienceRef)}
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  className="text-white font-semibold ml-3 mx-2 hover:text-indigo-600 hover:border-2 hover:border-indigo-900 hover:py-2 hover:px-3 hover:rounded-2xl"
                  onClick={() => scrollToRef(educationRef)}
                >
                  Education
                </a>
              </li>
              <li>
                <a
                  className="text-white font-semibold ml-3 mx-2 hover:text-indigo-600 hover:border-2 hover:border-indigo-900 hover:py-2 hover:px-3 hover:rounded-2xl"
                  onClick={() => scrollToRef(contactRef)}
                >
                  Contact
                </a>
              </li>
            </ul>
            <div className="flex w-full justify-center">
              <div className="mx-3 mb-5 text-2xl text-slate-200 hover:text-indigo-500">
                <a
                  href="https://github.com/PriteeAr0te"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-github hover:cursor-pointer"></i>
                </a>
              </div>
              <div className="mx-3 mb-5 text-2xl text-slate-200 hover:text-indigo-500">
                <a
                  href="www.linkedin.com/in/arote-pritee-a53128230"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-linkedin hover:cursor-pointer "></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <p className="text-slate-300 texl-lg font-semibold text-center pb-5">
          © 2024 Pritee Arote. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Contact;
