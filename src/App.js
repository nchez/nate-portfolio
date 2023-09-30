import logo from './logo.svg';
import { useEffect, useState } from 'react';
import { Navbar } from './components/Navbar';
import { Links } from './components/Links';
import { Projects } from './components/Projects';
import { Skills } from './components/ProjectStack';

const navbarSections = ['home', 'projects', 'skills'];

function App() {
  const [section, setSection] = useState('home'); // home, projects, experience, resume, skills
  const [navbarScroll, setNavbarScroll] = useState(false);


  const scrollListener = (e) => {
    if (!navbarScroll) {
      const anchorHeights = {};
      navbarSections.forEach((section) => {
        anchorHeights[section.toLowerCase()] = 0;
      });
      // const anchorHeights = {
      //   home: 0,
      //   projects: 0,
      //   experience: 0,
      //   resume: 0,
      //   skills: 0,
      // };
      const anchorNodes = Array.from(document.querySelectorAll('section > a'));
      anchorNodes.forEach((anchor) => {
        anchorHeights[anchor.name] = anchor.offsetTop - 40;
      });
      var anchorHeight = 0;
      for (const prop in anchorHeights) {
        if (anchorHeights[prop] > window.scrollY) {
          continue;
        } else if (window.scrollY >= anchorHeights[prop] && anchorHeight < anchorHeights[prop]) {
          anchorHeight = anchorHeights[prop];
        }
      }
      for (const prop in anchorHeights) {
        if (anchorHeights[prop] === anchorHeight) {
          setSection(prop);
        }
      }
      let documentHeight = document.getElementsByClassName('parent-div')[0].offsetHeight;
      let currentScroll = window.scrollY + window.innerHeight;
      let modifier = 20;
      if (currentScroll + modifier > documentHeight) {
        setSection('skills');
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    }
  }, []);

  return (
    <div className="parent-div">
      <a name="home" href="#home" aria-hidden="true"> </a>
      <Navbar navbarSections={navbarSections} section={section} setSection={setSection} setNavbarScroll={setNavbarScroll} scrollListener={scrollListener} />
      <section className="banner">
        <h1>Nathan Chesmar</h1>
        <Links />
        {/* <h3>Learn More About Me</h3> */}
        <p>
          {/* After 6 years in the manufacturing industry as a chemical
          engineer, I pivoted to software engineering after spending 3
          months in a coding bootcamp. I have a passion for learning,
          collaboration, data analysis+visualization, and user experience. */}
          Software engineer, full-stack, front-end, back-end. Former chemical engineer and process engineer.
        </p>
      </section>
      <section>
        <a name="projects" href="#projects" aria-hidden="true"> </a>
        <h1>Projects</h1>
        <Projects />
      </section>
      {/* <section>
        <a name="experience" href="#experience" aria-hidden="true"> </a>
        <h1>Experience</h1>
      </section>
      <section>
        <a name="resume" href="#resume" aria-hidden="true"> </a>
        <h1>Resume</h1>
      </section> */}
      <section>
        <a name="skills" href="#skills" aria-hidden="true"> </a>
        <h1>Skills</h1>
        <Skills />
      </section>
    </div>
  );
}

export default App;
