import React, { useState } from "react";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Card from "./components/Card";
import Footer from "./components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faCodeBranch,
  faExternalLinkAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import Projects from "./projects.json";
import "./assets/styles/main.css";

library.add(fab, faCodeBranch, faExternalLinkAlt, faEnvelope);

function App() {
  const [projects] = useState(Projects);

  return (
    <div className="app">
      <Navbar />
      <main className="main">
        <div className="main-content">
          <div className="intro-text">
            <span className="intro">Hello, my name is </span>
            <br></br>
            <span className="introduction">Christian Ruiz.</span>
            <br></br>
            <span className="introduction">I'm a Full Stack Engineer.</span>
          </div>
          <div className="about-me">
            I am currently based in Santa Cruz, CA and enjoy building things
            that live on the internet.<br></br>
            <br></br>
          </div>
          <a href="mailto:ruizchristian01@gmail.com">
            <button className="contact-me">
              Get in touch{" "}
              <span>
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
            </button>
          </a>
        </div>
      </main>
      <AboutMe />
      <div className="projects" id="projects">
        <div className="projects-container">
          <div className="title">Projects</div>
          {projects.map((project) => {
            return (
              <Card
                key={project.id}
                name={project.name}
                image={project.image}
                repo={project.repo}
                live={project.live}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
