import React from 'react';
import './App.css';

import Home from './components/Home';
import Experience from './components/Experience'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Projects'

import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/index" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/projects" component={Projects} />
      <Route path="/experience" component={Experience} />
      <Route path="/contact" component={Contact} />
    </Router>
  );
}

export default App;
