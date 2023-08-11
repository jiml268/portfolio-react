import Navbar from "./navbar/Navbar";
import Intro from "./intro/intro";
import AboutMe from "./aboutMe/aboutMe";
import Skills from "./skills/skills";
import { indivProjects }  from '../data/indivProjects.js'
import  {teamProjects}  from '../data/teamProjects.js'
import Projects from "./projects/projects";
import ContactForm from "./contactMe/contactMe";
import Links from "./linkSection/linkSection";

function App() {
  return (
    <div>

      <Navbar />
      <div>

      <Intro />
      <div className = "section_row">
      <AboutMe />
        <Skills />
        </div>
      < Projects title="Indiviual Projects" holdDate={indivProjects} />
      < Projects title="Team Projects" holdDate={teamProjects} />
       <div className = "section_row section_bk">
      <ContactForm />
        < Links />
        </div>
      </div>
            </div>

  );
};


export default App;
