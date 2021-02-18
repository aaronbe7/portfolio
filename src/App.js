import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path='/portfolio'>
          <Home />
        </Route>
        <Route exact path='/portfolio/projects'>
          <Projects />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
