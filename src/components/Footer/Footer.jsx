import React from 'react';
import {Link } from 'react-router-dom';
import './Footer.css';
import LinkedInLogo from '../Footer/LinkedInLogo.png';
import GitHubLogo from '../Footer/GitHubLogo.png';
import EmailLogo from '../Footer/EmailLogo.png';


export default function PageFooter(){

    return (
        <div>
            <div className="bottomnav" id= "contact">
            <div id="contacttext">Contact</div>
            <div id="contactlink">
            <a href="mailto:abellach7@gmail.com" target="_blank">Email: abellach7@gmail.com</a>
            <br/>
            <a href="tel:+18587751096">Phone: (858) 775-1096</a>
            </div>
            <br/>
                <a href="https://www.linkedin.com/in/aaronbellach/" target="_blank"><img src={LinkedInLogo} /></a>
                <a href="https://github.com/aaronbe7" target="_blank"><img src={GitHubLogo} /></a>
            </div>
        </div>
    )
}