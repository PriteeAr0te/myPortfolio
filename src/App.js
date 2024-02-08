import './App.css';
import '@radix-ui/themes/styles.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Skills from './Components/Skills';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import Education from './Components/Education';
import Contact from './Components/Contact';
import React, { useRef, useState } from 'react';

function App() {
  const[mode, setMode] = useState('light');
  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark');
    }
    else{
      setMode('light');

    }
  } 

  const heroRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const educationRef = useRef(null);
  const contactRef = useRef(null);
  return (
   <div>
     <Navbar
     mode={mode} toggleMode ={toggleMode}
     heroRef={heroRef}
     skillsRef={skillsRef}
     projectsRef={projectsRef}
     experienceRef={experienceRef}
     educationRef={educationRef}
     contactRef={contactRef}
     />
     <div ref={heroRef}>
       <Hero  mode={mode}/>
      </div>
      <div ref={skillsRef}>
       <Skills  mode={mode}/>
      </div>
      <div ref={projectsRef}>
       <Projects  mode={mode}/>
      </div>
      <div ref={experienceRef}>
       <Experience  mode={mode}/>
      </div>
      <div ref={educationRef}>
       <Education  mode={mode}/>
      </div>
      <div ref={contactRef}>
       <Contact
        mode={mode}
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
