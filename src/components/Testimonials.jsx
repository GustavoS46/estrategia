import React, { useEffect } from 'react';
import Slider from "react-slick";
import bg from '../assets/bg1.jpg';
import AOS from "aos";
import "aos/dist/aos.css";


const Testimonials = () => {

    useEffect(() => {
        AOS.init({
          offset: 100,
          duration: 500,
          easing: "ease-in-out",
        });
    
        AOS.refresh();
      }, []);

    var settings = {
        dots: true,
        arrows: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000, // Corrigido para definir a velocidade do autoplay
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const TestimonialData = [
        {
            id: 1,
            name: "Camila Souza",
            text: "Contratar essa agência foi uma das melhores decisões para o nosso negócio. Nossa presença online cresceu exponencialmente!",
            img: "https://picsum.photos/101/101",
        },
        {
            id: 2,
            name: "Ricardo Oliveira",
            text: "A equipe é extremamente profissional e criativa. Os resultados que tivemos com as campanhas de marketing superaram nossas expectativas.",
            img: "https://picsum.photos/102/102",
        },
        {
            id: 3,
            name: "Ana Pereira",
            text: "Aumentamos nossas vendas em 40% após implementar as estratégias recomendadas pela agência. Recomendo a todos!",
            img: "https://picsum.photos/104/104",
        },
        {
            id: 4,
            name: "Lucas Fernandes",
            text: "O suporte e o acompanhamento são incríveis. Eles realmente entendem as necessidades dos clientes e entregam resultados.",
            img: "https://picsum.photos/103/103",
        },
    ];

    return (
        <div 
            style={{
                height: '600px',
                backgroundImage: `url(${bg})`,
                overlay: '#111111',
                backgroundSize: 'cover',
                backgroundPosition: 'center', // Corrigido
                zIndex: -1,
            }}
            id='testimonial'
            className='relative py-8 px-4 md:px-8 pb-20 overflow-x-hidden'>
            <div className='absolute inset-0'>
                <div className='relative max-w-screen-xl mx-auto items-center'>
                    {/* header section */}
                    <div className='text-center my-10 max-w-xl mx-auto'>
                        <h2 
                            data-aos='zoom-in'
                            data-aos-delay='200'
                            className='text-3xl md:text-4xl font-bold mb-4 text-[#33CCCC]'>Relatos de Clientes</h2>
                        <p 
                            data-aos='zoom-in'
                            data-aos-delay='400'
                            className='text-gray-300 max-w-xl mx-auto mb-8'>
                            Confira o que nossos clientes têm a dizer sobre o impacto positivo que nossas estratégias de marketing tiveram em seus negócios. Suas histórias são a prova do nosso compromisso em entregar resultados excepcionais!
                        </p>
                        {/* Testimonial cards */}
                        <div
                            data-aos='zoom-in'
                            data-aos-delay='600'
                        >
                            <Slider {...settings}>
                                {TestimonialData.map((data) => (
                                    <div key={data.id} className='my-6'>
                                        <div className='flex flex-col gap-4 shadow-lg shadow-[#33CCCC] py-8 px-6 mx-4 rounded-xl bg-gray-950'>
                                            <div className='mb-4'>
                                                <img src={data.img} alt="" className='rounded-full w-20 h-20 border-2 border-[#33CCCC]' />
                                            </div>
                                            <div className='flex flex-col items-center gap-4'>
                                                <div className='space-y-3'>
                                                    <p className='text-sm text-gray-500 text-start'>{data.text}</p>
                                                    <h1 className='text-xl font-bold text-[#33CCCC] text-start'>{data.name}</h1>
                                                </div>
                                            </div>
                                            <p className='text-[#33CCCC]/20 text-9xl font-serif absolute top-0 right-0'></p>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials;
