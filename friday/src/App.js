import React, { useState, ReactElement } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import './App.css';

import Login from './components/Authentication/Login';
import Home from './features/Home';
import Error from './features/Error';
// import Register from "./components/Authentication/Register";
// import Reset from "./components/Authentication/Reset";
// import Dashboard from "./components/Authentication/Dashboard";
import Journal from './features/Journal';
import JournalMain from './features/JournalMain';
import Assessment from './features/Assessment';
import About from './features/About'

const App = () => {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/assessment" element={<Assessment />} />
          <Route path="/journal" element={<JournalMain />} />
          <Route path='/feedback' component={() => {
            window.location.href = 'https://google.com';
            return null;
          }}/>
          <Route path="/*" element={<Error/>} />
      </Routes>
    </Router>
  );
};


export default App;
