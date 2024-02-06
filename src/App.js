import '@radix-ui/themes/styles.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Skills from './Components/Skills';
import Experience from './Components/Experience';
import Projects from './Components/Projects';
import Education from './Components/Education';
function App() {
  return (
   <div>
     <Navbar/>
     <Hero/>
     <Skills/>
     <Experience/>
     <Projects/>
     <Education/>
   </div>
  );
}

export default App;
