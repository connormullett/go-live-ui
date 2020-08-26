import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Header from './components/Header';
import Projects from './components/Projects';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/">
          <Projects />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
      </div>
    </Router>
  );
}

export default App;
