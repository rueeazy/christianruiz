import React from 'react';

const AboutMe = () => {
    return (
        <div className="about" id="about">
        <div className="about-container">
          <div className="text-container">
            <div className="text">
                <span className="title">About Me</span><br></br><br></br>
                From banking, to online sales, and now full stack development.<br></br><br></br>
                I'm a 24-year-old, California born, Mexican-American developer based in Santa Cruz, CA.<br></br><br></br>
                Shortly after moving home from New York City at the start of 2020, I enrolled in The Odin Project's Full Stack Ruby on Rails course.
                What resulted was a passion for building websites and applications that live on the internet.<br></br><br></br>
                My goal is to continue sharpening my skills and transition to a career in tech.<br></br><br></br>
                Technologies I've worked with: 
            </div>
            <div className="languages">
                <ul className="ul">
                    <li>HTML/SCSS</li>
                    <li>Javascript</li>
                    <li>SQL</li>
                    <li>Ruby</li>
                    <li>Ruby on Rails</li>
                    <li>React</li>
                </ul>
            </div>
          </div>
          <div className="photo">
            <img className="avatar" alt="profile" src="https://media-exp1.licdn.com/dms/image/C5603AQECGc-dd4PhSA/profile-displayphoto-shrink_400_400/0?e=1608163200&v=beta&t=w7V73sz1nay8yh5f9_0eziu8ysoZx1UvkKT0QAXo6rU" />
          </div>
        </div>
      </div>
    )
}

export default AboutMe