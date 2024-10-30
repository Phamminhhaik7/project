/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import './App.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
function App() {
  const [menuOpen, setMenuOpen] = useState(false); // State để quản lý trạng thái menu

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Đổi trạng thái menu
  };
  AOS.init();
  return (
    <>
      <header className="w-screen h-20 bg-gray flex items-center justify-between shadow-white shadow-md  ">
        <p className="text-3xl font-bold ml-5">GiaoDichTrungGian</p>
        <button className="fa-solid fa-bars text-4xl mr-10 menu" onClick={toggleMenu}></button>
        <div className={`menu-content ${menuOpen} ? 'translate-x-0' : '-translate-x-full'} fixed top-0 left-0 w-64 h-full bg-gray-600 transition-transform duration-300`}>
        </div>
      </header>
      <section    className="relative w-screen h-auto flex flex-wrap justify-center items-center  " >
        <div className="relative   pt-1 pr-5 pl-2 p pb-10 w-screen h-[70vw] bg-center bg-[url('https://static.hieuluat.vn/uploaded/Images/Original/2023/11/29/giao-dich-trung-gian-bang-cac-ung-dung-cong-nghe-dan-pho-bien_2911122526.jpg')] bg-cover bg-no-repeat bg-opacity-50 " >
          <div  className="absolute inset-0 bg-black opacity-50"></div>
            <h1  data-aos="fade-up" data-aos-duration="500" className="relative z-10 text-white font-bold textshadow">GIAO DỊCH</h1>
            <h1  data-aos="fade-up" data-aos-duration="500" className="relative z-10 text-white font-bold textshadow">TRUNG GIAN</h1>
            <h2  data-aos="flip-left" data-aos-duration="1100" className="relative z-10 text-white font-bold textshadow">Nói không với lừa đảo qua mạng!</h2>
          </div>
          <div className="relative  w-10/12 mt-10 h-10 shadow-md bg-gradient-to-l to-rose-400 from-amber-400 rounded-lg flex justify-center items-center">
            <span data-aos="zoom-in" className="text-white font-bold">Uy tín</span>
            <span className="mx-2 text-yellow-400 font-bold">-</span>
            <span data-aos="zoom-in" className="text-green-500 font-bold">An toàn</span>
            <span  className="mx-2 text-yellow-400 font-bold">-</span>
            <span data-aos="zoom-in" className="text-red-500 font-bold">Hiệu quả</span>
          </div>
          <div data-aos="fade-up"  data-aos-duration="1000" className="relative shadow-md mt-5 w-1/2 h-auto p-2 bg-white rounded-lg flex justify-center items-center"><span>Tham Gia Ngay</span>
        </div>
      </section>
      <section className="relative  flex flex-wrap justify-center items-center">
        <div  data-aos="fade-left" data-aos-anchor-placement="bottom-bottom" data-aos-duration="500"  className="relative top-5 w-11/12 h-auto gradientlj shadow-md rounded-lg p-4 flex flex-col items-center text-center">
          <h1 className="text-black font-bold bg-white bg-opacity-80 rounded-lg">GD Trung Gian Là Gì?</h1>
          <h2 className="text-black font-bold">Giao dịch trung gian (Intermediary Transactions) là một hình thức kinh doanh trong đó một bên thứ ba tham gia vào để đảm bảo tính trung thực, an toàn cho cả bên mua và bên bán trong quá trình giao dịch.</h2>
        </div>
      </section>
      <section data-aos="fade-right" data-aos-anchor-placement="bottom-bottom" data-aos-duration="500" className="relative mt-10 flex flex-wrap justify-center items-center">
        <div  className="relative top-5 w-11/12 h-auto gradientlj shadow-md rounded-lg p-4 flex flex-col items-center text-center">
        <h1  className="text-black font-bold bg-white bg-opacity-80 rounded-lg">Lợi Ích Khi Sử Dụng Dịch Vụ</h1>
          <h2  className="text-black font-bold">Giao dịch trung gian (Intermediary Transactions) là một hình thức kinh doanh trong đó một bên thứ ba tham gia vào để đảm bảo tính trung thực, an toàn cho cả bên mua và bên bán trong quá trình giao dịch.</h2>
        </div>
      </section>
      
    </>
  );
}

export default App;
