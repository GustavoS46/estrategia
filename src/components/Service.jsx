import React, { useState, useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import email from '../assets/email.gif';
import content from '../assets/content.gif';
import laptop from '../assets/laptop.gif';
import ads from '../assets/ads.gif';
import seo from '../assets/seo.gif';
import analytics from '../assets/analytics.gif';
import stakeholders from '../assets/stakeholders.gif';
import marketing from '../assets/marketing.gif';

const Service = () => {

    useEffect(() => {
        AOS.init({
          offset: 100,
          duration: 500,
          easing: "ease-in-out",
        });
    
        AOS.refresh();
      }, []);

    const serviceJson = [
        {
            "name": "Otimização de SEO",
            "description": "Aumente a visibilidade do seu site nos mecanismos de busca com técnicas estratégicas de SEO.",
            "icon": seo,
        },
        {
            "name": "Marketing em Mídias Sociais",
            "description": "Engaje seu público nas plataformas de mídia social com conteúdo e campanhas personalizados.",
            "icon": laptop,
        },
        {
            "name": "Marketing de Conteúdo",
            "description": "Atraia e retenha seu público com conteúdo valioso e relevante.",
            "icon": content,
        },
        {
            "name": "Publicidade Pay-Per-Click",
            "description": "Atraia tráfego direcionado para seu site com campanhas eficazes de PPC.",
            "icon": ads,
        },
        {
            "name": "E-mail Marketing",
            "description": "Conecte-se diretamente com seu público por meio de campanhas de e-mail personalizadas.",
            "icon": email,
        },
        {
            "name": "Análise Web",
            "description": "Monitore e analise o desempenho do seu site para melhorar sua estratégia.",
            "icon": analytics,
        },
        {
            "name": "Marketing de Afiliados",
            "description": "Aproveite parcerias de marketing de afiliados para expandir seu alcance e aumentar as vendas.",
            "icon": stakeholders,
        },
        {
            "name": "Marketing de Influenciadores",
            "description": "Colabore com influenciadores para construir confiança na marca e alcançar novos públicos.",
            "icon": marketing,
        }
    ];


    return (
        <div 
            id='services'
            className='bg-gray-900 py-8 px-4 md:px-8 pb-20'>
            <div className='max-w-screen-xl mx-auto'>
                <h1 
                    data-aos='zoom-in'
                    data-aos-delay='200'
                    className='text-center font-bold text-4xl pb-12 text-[#33CCCC]'>Nossos Serviços</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-5'>
                    {
                        serviceJson.map((item, index) => (
                            <div 
                                data-aos='zoom-in'
                                data-aos-delay='400'
                                key={index} className='relative'>
                                <div 
                                    data-aos='zoom-in'
                                    data-aos-delay='500'
                                    className='absolute -inset-0 blur bg-[#33CCCC]'></div>
                                <div 
                                    data-aos='zoom-in'
                                    data-aos-delay='600'
                                    className='border rounded-md relative flex flex-col space-y-3 bg-[#3EECEC] hover:bg-[#33CCCC] hover:transition-all p-7 w-50 h-60'>
                                    <img src={item.icon} alt="" className='w-20 rounded-full' />
                                    <h3 className='font-semibold text-xl'>{item.name}</h3>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Service