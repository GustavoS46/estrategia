import { Menu, X } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import Logo from '../assets/logo.png';
import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const NavHandler = () => {
    setOpen(!open);
    document.body.style.overflow = !open ? "hidden" : "unset";
  };

  useEffect(() => {
      AOS.init({
        offset: 100,
        duration: 500,
        easing: "ease-in-out",
      });
  
      AOS.refresh();
    }, []);

  return (
    <div className="bg-gray-950 py-3">
      <div className="max-w-screen-xl flex justify-between items-center py-8 px-4 md:px-8 pb-10 mx-auto">
        {/* Logo Container (Centered) */}
        <div 
          data-aos='fade-right'
          data-aos-delay='200'
          className="flex flex-row items-center w-full">
          {/* Logo */}
          <img src={Logo} alt="" className='w-14 h-auto' />
          <div className="text-4xl text-white font-open_sans">Estratégia</div>
        </div>

        {/* Desktop Nav */}
        <ul 
          data-aos='fade-left'
          data-aos-delay='200'
          className="lg:flex items-center font-semibold text-xl text-white hidden gap-6 font-open_sans">
          <li>
            <a href="#home" className="text-[#33CCCC] cursor-pointer transition-all">
              Início
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-[#33CCCC] cursor-pointer transition-all">
              Sobre
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-[#33CCCC] cursor-pointer transition-all">
              Serviços
            </a>
          </li>
          <li>
            <a href="#testimonial" className="hover:text-[#33CCCC] cursor-pointer transition-all">
              Testemunhos
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-[#33CCCC] cursor-pointer transition-all">
              Contato
            </a>
          </li>
          <button className="bg-[#33CCCC] hover:bg-[#2aa3a3] cursor-pointer text-white px-4 py-1 rounded-md">
            Comece
          </button>
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          {open ? (
            <X onClick={NavHandler} className="text-white cursor-pointer" size={32} />
          ) : (
            <Menu onClick={NavHandler} className="text-white cursor-pointer" size={32} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <nav className="fixed top-0 left-0 bg-gray-950 text-gray-300 w-[80vw] h-screen border-l border-[#33CCCC] z-50">
          <ul className="flex flex-col space-y-10 items-center pt-36 text-2xl font-semibold">
            <li>
              <a href="#home" className="text-[#33CCCC] cursor-pointer transition-all" onClick={NavHandler}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-[#33CCCC] cursor-pointer transition-all" onClick={NavHandler}>
                About
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-[#33CCCC] cursor-pointer transition-all" onClick={NavHandler}>
                Services
              </a>
            </li>
            <li>
              <a href="#portfolio" className="hover:text-[#33CCCC] cursor-pointer transition-all" onClick={NavHandler}>
                Portfolio
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[#33CCCC] cursor-pointer transition-all" onClick={NavHandler}>
                Contact
              </a>
            </li>
            <button
              onClick={NavHandler}
              className="bg-[#33CCCC] hover:bg-[#2aa3a3] cursor-pointer text-white px-4 py-1 rounded-md"
            >
              Comece
            </button>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Navbar;
