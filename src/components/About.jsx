import React, { useState, useEffect } from 'react';
import AboutImg from '../assets/AboutImg.jpg';
import ScrollTrigger from 'react-scroll-trigger';
import CountUp from 'react-countup';
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-out",
    });

    AOS.refresh();
  }, []);

  const [counterOn, setCounterOn] = useState(false);

  return (
    <div 
      id='about'
      className='bg-gray-950 py-8 px-4 md:px-8 pb-20 overflow-y-hidden'>
      <div className='max-w-screen-xl mx-auto'>
        <div className='flex flex-col md:flex-row gap-7 items-center'>
          <div className='md:w-1/2 space-y-5'>
            <h1 
              data-aos='zoom-in'
              data-aos-delay='200'
              className='font-bold text-4xl text-[#33CCCC]'>Sobre Nós</h1>
            <p
              data-aos='zoom-in'
              data-aos-delay='400' 
              className='text-gray-300 text-lg leading-relaxed'>
              Na Estratégia, somos apaixonados por transformar ideias em resultados. Nossa equipe especializada em marketing digital e estratégias personalizadas está aqui para ajudar você a alcançar seus objetivos e superar desafios no mercado. Seja conquistando novos clientes ou ampliando sua presença online, estamos prontos para fazer parte do seu sucesso com soluções criativas e inovadoras.
            </p>
            <button
              data-aos='zoom-in'
              data-aos-delay='500'
              className='rounded-lg px-4 py-1.5 bg-transparent hover:bg-[#33CCCC] border-2 border-[green-200] text-white uppercase font-lato -tracking-tighter relative'>
              <span className="absolute inset-0 bg-[rgba(51,204,204,0.5)] blur-xl rounded-lg"></span>
              <span className="relative">Saiba Mais</span>
            </button>
          </div>
          <div className='md:w-1/2'>
            <img
              data-aos='zoom-in'
              data-aos-delay='400'
              src={AboutImg}
              alt="Sobre a Estratégia"
              className='rounded-lg shadow-lg w-full object-cover'
            />
          </div>
        </div>
        <div className='mt-4'>
          <ScrollTrigger 
            data-aos='zoom-in'
            data-aos-delay='200'
            onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
            <div className='flex gap-10'>
              <div className='flex flex-col items-center text-center'>
                <h1 className='font-bold text-3xl md:text-4xl text-[#33CCCC]'>
                  {
                    counterOn && <CountUp start={0} end={800} duration={2} delay={0} />
                  }
                  +
                </h1>
                <h3 className='text-sm text-gray-300'>Clientes Felizes</h3>
              </div>
              <div className='flex flex-col items-center text-center'>
                <h1 className='font-bold text-3xl md:text-4xl text-[#33CCCC]'>
                  {
                    counterOn && <CountUp start={0} end={1200} duration={2} delay={0} />
                  }
                  +
                </h1>
                <h3 className='text-sm text-gray-300'>Projetos Finalizados</h3>
              </div>
              <div className='flex flex-col items-center text-center'>
                <h1 className='font-bold text-3xl md:text-4xl text-[#33CCCC]'>
                  {
                    counterOn && <CountUp start={0} end={90} duration={2} delay={0} />
                  }
                  +
                </h1>
                <h3 className='text-sm text-gray-300'>Taxa de Conversão</h3>
              </div>
            </div>
          </ScrollTrigger>
        </div>
      </div>
    </div>
  );
};

export default About;
