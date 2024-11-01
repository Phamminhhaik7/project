import React, { useState } from 'react';
import { Routes , Route ,Link , Navigate } from 'react-router-dom';
import {  } from 'react-router-dom';
import './App.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import  Homepage from './pages/homepage';
import Gioithieu  from './pages/gioithieu';
import  About  from './pages/about';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Gioithieu />} />
            <Route path="/homepage" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Homepage />} />
            <Route path="/" element={<Gioithieu />} />
            <Route path="/" element={<Homepage />} />
        </Routes>
    );
};

export default App;