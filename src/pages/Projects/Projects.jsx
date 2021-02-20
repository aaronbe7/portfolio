import React from 'react';
import PageHeader from '../../components/Header/Header';
import PageFooter from '../../components/Footer/Footer';
import Lyrico from '../Projects/Lyrico.png';
import MusicRank from '../Projects/MusicRank.png';
import GoalTracker from '../Projects/GoalTracker.png';
import {Link } from 'react-router-dom';

import './Projects.css';

export default function Projects(){  

  return ( 
    <div >
        <PageHeader />
        <h1 id="recent">Recent Projects</h1>
        <div className="grid-container">
          <div className="grid-item"><a href="https://lyricoapp.herokuapp.com/" target="_blank"><img src={Lyrico}/></a></div>
          <div className="grid-item">
            <div className="title">Lyrico</div><br/><br/>
            <div className="description">
              Lyrico is an app for users to find and save lyrics to songs. With the help of an API, Lyrico has a wide variety of music to search from.
            </div>
            <div className="technologies">Technologies</div><br/><br/>
            <div className="description">
                JavaScript - Node.js - Mongoose - MongoDB - Express - HTML - CSS - Heroku
            </div>
            <div id="projectlinks">
                <a href="https://github.com/aaronbe7/Lyrico" target="_blank">See Code</a>
                <a href="https://lyricoapp.herokuapp.com/" target="_blank">Go to Website</a>
             </div>
             <br/>
             <br/>
             <div className="credentials">
                Website login credentials
                <br/>
                Email: user@user.com ||
                Password: password
             </div>
          </div>
          <div className="grid-item"><a href="http://goal-tracker-django.herokuapp.com/" target="_blank"><img src={GoalTracker}/></a></div>
          <div className="grid-item">
          <div className="title">Goal Tracker</div><br/><br/>
            <div className="description">
            An organization tool built for users to manage, create, and stick to their goals. Goal Tracker is perfect for New Year's resolutions, bucket lists, and much more.
            </div>
            <div className="technologies">Technologies</div><br/><br/>
            <div className="description">
                Pyton - Django - PostgreSQL - BootStrap - HTML - CSS - Heroku
            </div>
            <div id="projectlinks">
                <a href="https://github.com/aaronbe7/goal_tracker" target="_blank">See Code</a>
                <a href="http://goal-tracker-django.herokuapp.com/" target="_blank">Go to Website</a>
             </div>
             <br/>
             <br/>
             <div className="credentials">
             Website login credentials
                <br/>
                Username: user ||
                Password: password100
             </div>
          </div>

          <div className="grid-item"><a href="https://music-rank.herokuapp.com/" target="_blank"><img src={MusicRank}/></a></div>
          <div className="grid-item">
            <div className="title">Music Rank</div><br/><br/>
            <div className="description">
              Music Rank is an app for users to rank, share and discover music. Give your input and discover some new favorites!
            </div>
            <div className="technologies">Technologies</div><br/><br/>
            <div className="description">
              JavaScript - React.js - Node.js - Mongoose - MongoDB - Express - API - (Semantic-UI-React) - HTML - CSS - Heroku
              </div>
              <div id="projectlinks">
                <a href="https://github.com/aaronbe7/music-rank" target="_blank">See Code</a>
                <a href="https://music-rank.herokuapp.com/" target="_blank">Go to Website</a>
             </div>
          </div>

        </div>
        <PageFooter />
    </div>
    )
}