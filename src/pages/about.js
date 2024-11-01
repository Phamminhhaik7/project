import React, { useState } from 'react';
import { Routes , Route ,Link } from 'react-router-dom';
import 'aos/dist/aos.css';
import AOS from 'aos';
import Header from '../pages/header';
function About() {
    return(<>
    <Header/>
        <div>
            <h1>Giới Thiệu</h1>
            <p>Đây là trang giới thiệu của ứng dụng.</p>
        </div>
    </>);
};

export default About;