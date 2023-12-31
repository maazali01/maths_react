import React, { Component } from 'react';
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Calculator from './components/calculator';
import Home from './components/Home';
import Quote from './components/Quote';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div class = "container">
        <Router basename={process.env.PUBLIC_URL}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calculator" element={(<Calculator />)} />
            <Route path="/Quote" element={<Quote />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
