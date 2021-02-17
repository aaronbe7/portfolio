import React from 'react';
import PageHeader from '../../components/Header/Header';
import PageFooter from '../../components/Footer/Footer';
import FrontPicture from '../Home/FrontPicture.jpg';
import './Home.css';

export default function Home(){  

  return ( 
    <div >
        <PageHeader />
        <div class="container">
            <img src={FrontPicture} className="frontpicture"/>
        </div>
        <h1>
            About
        </h1>
        <div id="about">
            Welcome! My name is Aaron Bellach and I am a full-stack developer based in San Diego, California. In 2020, 
            I graduated from the University of California-Santa Cruz with a BS in Cognitive Science, concentrating in
            Artificial Intelligence. My interest in software development gradually increased as I 
            learned more about it in courses such as Intro to Java and Personal Computers. Soon after graduating, I took a 
            software engineering program at General Assembly to further my development skills. At first, 
            I was intimitated by the vast world of software and technology, but I soon realized that my knowledge in cognitive science and AI concepts 
            combined with my experience in software development has given me a well-rounded skillset and distinct approach to development. 
            <br/>
            <br/>
            My skills and languages include React.Js, Node.Js, Express, MongoDB, Django, PostgreSQL, Python, JavaScript, HTML, and CSS.
            <br/>
             Outside of work, I am a creative. I love to produce music, take pictures, and find inspiration for new projects.
             <br/>
             <br/>
             Contact me through email or linkedin!
             <br/>
             Check out my resume if you wish.
            {/* (button or resume) */}
        </div>
        <PageFooter />
    </div>
    )
}