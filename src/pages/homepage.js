import React, { useState } from 'react';
import { Routes , Route ,Link } from 'react-router-dom';
import 'aos/dist/aos.css';
import AOS from 'aos';
import Header from '../pages/header';

function Homepage() {


  AOS.init();
  return (
        <>
            <Header/>    
            <p>Homepage</p>
        </>
    );
}

export default Homepage;
