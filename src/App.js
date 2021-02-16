import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Projects from './pages/Projects/Projects';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/projects'>
          <Home />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
