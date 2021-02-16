import React from 'react';
import {Link } from 'react-router-dom';
import './Header.css';

export default function PageHeader(){

    return (
        <div className="topnav">
            <Link to='/Projects'>Projects</Link>
            <Link to=''>Home</Link>
            <Link to='' id="logo">Aaron Bellach</Link>
        </div>
    )
}

