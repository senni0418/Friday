import React, { useState, ReactElement } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import './App.css';

import Login from './components/Authentication/Login';
import Home from './features/Home';
import Error from './features/Error';
import Register from "./components/Authentication/Register";
import Reset from "./components/Authentication/Reset";
import Dashboard from "./components/Authentication/Dashboard";
import ResponsiveAppBar from './components/Basic/js/ResponsiveAppBar';
import Journal from './features/Journal';
import Assessment from './features/Assessment';
import About from './features/About'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login/>} />
          <Route path="/app/home" element={<Home />} />
          <Route path="/*" element={<Error/>} />
          <Route path='/feedback' component={() => {
            window.location.href = 'https://google.com';
            return null;
          }}/>
          <Route path="/" element={<Home/>} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/reset" element={<Reset />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route path="/app/about" element={<About />} />
          <Route path="/app/assessment" element={<Assessment />} />
          <Route path="/app/journal" element={<Journal />} />
      </Routes>
    </Router>
  );
};


export default App;
