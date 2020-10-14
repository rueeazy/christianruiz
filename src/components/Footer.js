import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = (props) => {
    return(
        <footer className="footer" id="contact">
            <div className="footer-container">
                <div className="reach-me">Contact Me</div>
                <div className="reach-icons">
                <a href="https://www.linkedin.com/in/christian-ruiz-m"><FontAwesomeIcon className="footer-icon" icon={['fab', 'linkedin']} /></a>
                <a href="https://twitter.com/_ruizchristian"><FontAwesomeIcon className="footer-icon" icon={['fab', 'twitter']}/></a>
                <a href="https://github.com/rueeazy"><FontAwesomeIcon className="footer-icon" icon={['fab', 'github']}/></a>
                <a href="mailto:ruizchristian01@gmail.com"><FontAwesomeIcon className="footer-icon" icon={faEnvelope}/></a>
                </div>
                <div className="trademark">Christian Ruiz 2020</div>
            </div>
        </footer>
    )
}

export default Footer