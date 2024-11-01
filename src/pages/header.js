import React, { useState } from 'react';
import { Routes , Route ,Link } from 'react-router-dom';
import 'aos/dist/aos.css';
import AOS from 'aos';
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  // Toggle sidebar
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  AOS.init();
  return (
        <>
            <header className="w-screen h-auto p-1 bg-gray flex items-center justify-between shadow-white shadow-md  ">
        <p className="text-2xl font-bold ml-5">GiaoDichTrungGian</p>
        {/* <button className="fa-solid fa-bars text-4xl mr-10 menu" onClick={toggleMenu}></button>
        <div className={`menu-content ${menuOpen} ? 'translate-x-0' : '-translate-x-full'} fixed top-0 left-0 w-64 h-full bg-gray-600 transition-transform duration-300`}>
        </div> */}
      <div className="relative">
        {/* Nút mở sidebar */}
   
        <button className="fa-solid fa-bars md:hidden p-4" onClick={toggleSidebar}></button>

        {/* Sidebar */}
        <div 
          className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transform ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          } transition-transform duration-300 ease-in-out md:hidden z-50`}
        >

          {/* Danh mục trong sidebar */}
          <nav className="p-4 h-full  bg-black">
            <Link  to="/homepage" className="block text-lg transform transition duration-300 ease-in-out translate-x-0 hover:translate-x-2">
              HomePage
            </Link>
            <Link to="/" className="block text-lg transform transition duration-300 ease-in-out translate-x-0 hover:translate-x-2">
              Giới thiệu
            </Link>
            <Link to="/about" className="block text-lg transform transition duration-300 ease-in-out translate-x-0 hover:translate-x-2">
              About
            </Link>
            <Link to="#" className="block text-lg transform transition duration-300 ease-in-out translate-x-0 hover:translate-x-2">
              Services
            </Link>
            <Link to="#" className="block text-lg transform transition duration-300 ease-in-out translate-x-0 hover:translate-x-2">
              Contact
            </Link>
          </nav>
        </div>
      </div>
      </header>
      </>
    );
};

export default Header;