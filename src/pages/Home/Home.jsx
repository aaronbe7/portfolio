import React from 'react';
import PageHeader from '../../components/Header/Header';
import PageFooter from '../../components/Footer/Footer';
import FrontPicture from '../Home/FrontPicture.jpg';
import './Home.css';
import {Link } from 'react-router-dom';
import { GridColumn, GridRow } from 'semantic-ui-react';

export default function Home(){  

  return ( 
    <div >
        <PageHeader />
        <div id="sidebar"></div>
        <div><img src={FrontPicture} className="frontpicture"/></div>        
        <h1>
            About
        </h1>
        <div id="about">
            I am a full-stack developer based in San Diego, California. 
            In 2020, I graduated from the University of California-Santa Cruz with a BS in Cognitive Science, concentrating in Artificial Intelligence. 
            My interest in software engineering developed after taking courses such as "Intro to Java" and "Personal Computers." 
            As I progressed through my college career, I quickly realized software development was a path much better suited for me.
            After graduating, I took a software engineering program at General Assembly to further my development skills. 
            <br/>
            <br/>
            At first, I was intimitated by the vast world of software and technology. However, I soon realized that my knowledge in cognitive science and AI 
            combined with my experience in software development has given me a well-rounded skillset and distinct approach to development.
            Outside of work, I am a creative. I love to produce music, take pictures, and find inspiration for new projects.
            I am currently expanding my portfolio, as well as looking for work.
            <br/>
            <br/>
            <div id="skills">
            My tech and language proficiencies include React.Js, Node.Js, Express, MongoDB, Django, PostgreSQL, Python, JavaScript, HTML, and CSS.
            </div>
             <br/>
             <div id="resume">
                <Link to='/Resume'>See Resume</Link>
             </div>
        </div>
        <PageFooter />
    </div>
    )
}