import React from "react";

const AboutMe = () => {
  return (
    <div className="about" id="about">
      <div className="about-container">
        <div className="text-container">
          <div className="text">
            <span className="title">About Me</span>
            <br></br>
            <br></br>
            From banking, to online sales, and now full stack development.
            <br></br>
            <br></br>
            I'm a 24-year-old Full Stack Engineer based in Santa Cruz, CA.
            <br></br>
            <br></br>
            Shortly after moving home from New York City at the start of 2020, I
            enrolled in App Academy Open's Full Stack Ruby on Rails course. What
            resulted was a passion for building websites and applications that
            live on the internet.<br></br>
            <br></br>
            Technologies I've worked with:
          </div>
          <div className="languages">
            <ul className="ul">
              <li>Javascript</li>
              <li>HTML/SCSS</li>
              <li>Ruby</li>
              <li>SQL</li>
              <li>React</li>
              <li>Vue</li>
              <li>Ruby on Rails</li>
            </ul>
          </div>
        </div>
        <div className="photo">
          <img alt="profile" src={require(`../assets/images/portrait.jpeg`)} />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
