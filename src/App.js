import React from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from 'react-router-dom'; 

import HomePage from './components/HomePage';

let homePageRoutes = [
  'about',
  'projects',
  'experience',
  'contact',
]

function App() {
  return (
    <Router>
      <Route exact path='/' render={() => <HomePage route='/' />} />
      {homePageRoutes.map((route) => 
        <Route 
          path={'/' + route}
          render={() => <HomePage route={route}/>}
          key={route} 
        />
      )}
    </Router>
  );
}

export default App;
