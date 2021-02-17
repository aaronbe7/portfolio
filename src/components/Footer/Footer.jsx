import React from 'react';
import {Link } from 'react-router-dom';
import './Footer.css';
import LinkedInLogo from '../Footer/LinkedInLogo.png';
import GitHubLogo from '../Footer/GitHubLogo.png';
import EmailLogo from '../Footer/EmailLogo.png';


export default function PageFooter(){

    return (
        <div className="bottomnav">
            <a href="mailto:abellach7@gmail.com"></a><img id="email" src={EmailLogo} />
            <a href="https://www.linkedin.com/in/aaronbellach/"><img src={LinkedInLogo} /></a>
            <a href="https://github.com/aaronbe7"></a><img src={GitHubLogo} />
        </div>
    )
}