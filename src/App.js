import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Projects from './components/Projects';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Projects />
      </div>
    </Router>
  );
}

export default App;
