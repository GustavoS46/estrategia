import React, { useEffect } from "react";
import bg from '../assets/fundo.png';
import Logo from '../assets/logo.png';
import { ChevronRight } from 'lucide-react';
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-out",
    });

    AOS.refresh();
  }, []);

  return (
    <div style={{
      height: '600px',
      backgroundImage: `url(${bg})`,
      overlay: '#111111',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }} className='relative z-10'
      id='home'
    >
      <div className='absolute inset-0 bg-black opacity-35'></div>
      <div className='relative max-w-screen-xl mx-auto'>
        <div className='flex lg:h-[650px] justify-center items-center text-center px-5 md:px-0'>
          <div className='flex flex-col space-y-8 justify-center items-center px-5 md:px-0'>
            <div 
              data-aos='zoom-in'
              data-aos-delay='200'
              className='flex justify-center items-center mt-5'>
              <img src={Logo} alt="" className="lg:w-10 w-8" />
              <h3 className='text-white text-lg lg:text-2xl font-open_sans font-bold'>Estratégia</h3>
            </div>
            <h1 
              data-aos='zoom-in'
              data-aos-delay='200'
              className='text-4xl text-white lg:text-6xl font-bold'>Aumente o seu negócio com <br /> <span className='text-[#33CCCC]'>Marketing Digital</span></h1>
            <p 
              data-aos='zoom-in'
              data-aos-delay='400'
              className='text-gray-300 text-lg lg:text-xl'>
              Impulsione sua presença online e conquiste mais clientes com estratégias personalizadas de marketing digital.
            </p>
            <div className='flex gap-3 items-center'>
              <button 
                data-aos='fade-right'
                data-aos-delay='300'
                className='btn'>
                consultoria gratuita
                <ChevronRight />
              </button>
              <button 
                data-aos='fade-left'
                data-aos-delay='300'
                className='rounded-lg px-4 py-1.5 bg-transparent hover:bg-[#33CCCC] border-2 border-[green-200] text-white uppercase font-lato -tracking-tighter relative'>
                <span className="absolute inset-0 bg-[rgba(51,204,204,0.5)] blur-xl rounded-lg"></span>
                <span className="relative">Vamos Começar</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero;
