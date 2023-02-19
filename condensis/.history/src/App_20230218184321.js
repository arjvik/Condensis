import React from 'react';
import NavbarBS from "./components/Navbar";
import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';

export default function App() {
  return (
    <head>
      <title></title>
    </head>
    <div className="App">
      <Router>
        <NavbarBS/>
        <Routes>
          {/* <Route path="/Courses" element = {<Courses/>}/> */}
          <Route path="/About" element = {<About/>}/>
        </Routes>
      </Router>
    </div>
  );
}