import React from 'react';
import {Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import './Header.css';

export default function PageHeader(){

    return (
        <div className="topnav">
            <HashLink smooth to='#contact'>Contact</HashLink>
            <Link to='/portfolio/projects'>Projects</Link>
            <Link to='/portfolio'>Home</Link>
            <Link to='/portfolio' id="logoheader">AB</Link>
        </div>
    )
}

