import React from 'react'

import { BrowserRouter as Router,Route, Routes } from "react-router-dom";

import Navbar from '../components/navbar/Navbar';
import Home from '../pages/home/Home';
import Destination from '../pages/destination/Destination';
import Crew from '../pages/crew/Crew';
import Technology from '../pages/technology/Technology';



function Routing(){
    return (
      <Router>
          <Navbar />
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/destination" element={<Destination/>} />
              <Route path="/crew" element={<Crew/>} />
              <Route path="/technology" element={<Technology/>} />
          </Routes>
      </Router>
    )
  }

export default Routing