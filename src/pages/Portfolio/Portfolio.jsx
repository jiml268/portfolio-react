// import Intro from "../../components/intro/intro";
// import AboutMe from "../../aboutMe/aboutMe";
// import Skills from "../../skills/skills";
// import { indivProjects }  from '../../data/indivProjects'
// import  {teamProjects}  from '../../data/teamProjects.js'
// import Projects from "../../projects/projects";
// import ContactForm from "../../contactMe/contactMe";
// import Links from "../../linkSection/linkSection";

import AboutMe from "components/aboutMe/aboutMe";
import ContactForm from "components/contactMe/contactMe";
import Intro from "components/intro/intro";
import Links from "components/linkSection/linkSection";
import Projects from "components/projects/projects";
import Skills from "components/skills/skills";
import { indivProjects } from "data/indivProjects";
import { teamProjects } from "data/teamProjects";


function Portfolio() {
  return (
    <div>
      <div>

      <Intro/>
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


export default Portfolio;