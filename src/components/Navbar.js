import React, { useEffect, useState } from 'react';
import resume from '../assets/images/resume.pdf'

const Navbar = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset)

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.addEventListener("scroll", handleScroll);
          }
    })

    const handleScroll = () => {
        let currentScrollPos = window.pageYOffset;
        if (prevScrollPos > currentScrollPos) {
            document.getElementById("navbar").style.top = "0px";
        } else if(currentScrollPos < 10) {
          document.getElementById("navbar").style.top = "0px";
        } else {
          document.getElementById("navbar").style.top = "-60px";
        }
        setPrevScrollPos(currentScrollPos)
    }

    return (
        <nav className="navbar" id="navbar">
        <div className="nav-container">
          <ul>
            <li><span className="hint">01.</span><a href="#about"> About</a></li>
            <li><span className="hint">02.</span><a href="#projects"> Projects</a></li>
            <li><span className="hint">03.</span><a href="#contact"> Contact</a></li>
            <li className="resume"><a href={resume}> Resume</a></li>
          </ul>
        </div>
      </nav>
    )
}

export default Navbar