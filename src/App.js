import '@radix-ui/themes/styles.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Skills from './Components/Skills';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import Education from './Components/Education';
import Contact from './Components/Contact';
import React, { useRef } from 'react';

function App() {
  const heroRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const educationRef = useRef(null);
  const contactRef = useRef(null);
  return (
   <div>
     <Navbar
     heroRef={heroRef}
     skillsRef={skillsRef}
     projectsRef={projectsRef}
     experienceRef={experienceRef}
     educationRef={educationRef}
     contactRef={contactRef}
     />
     <div ref={heroRef}>
       <Hero/>
      </div>
      <div ref={skillsRef}>
       <Skills/>
      </div>
      <div ref={projectsRef}>
       <Projects/>
      </div>
      <div ref={experienceRef}>
       <Experience/>
      </div>
      <div ref={educationRef}>
       <Education/>
      </div>
      <div ref={contactRef}>
       <Contact
        heroRef={heroRef}
        skillsRef={skillsRef}
        projectsRef={projectsRef}
        experienceRef={experienceRef}
        educationRef={educationRef}
        contactRef={contactRef}
       />
      </div>
   </div>
  );
}

export default App;
