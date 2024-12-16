import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {

    useEffect(() => {
        AOS.init({
          offset: 100,
          duration: 500,
          easing: "ease-in-out",
        });
    
        AOS.refresh();
      }, []);

  return (
    <div 
        id='contact'
        className='bg-gray-900'>
        <div className='max-w-screen-xl mx-auto items-center flex flex-col py-8 px-4 md:px-8 pb-20'>
            {/* header */}
            <h2 
                data-aos='zoom-in'
                data-aos-delay='200'
                className='text-3xl md:text-4xl font-bold mb-4 text-[#33CCCC]'>Entre em Contato</h2>
            <p 
                data-aos='zoom-in'
                data-aos-delay='400'
                className='text-gray-300 text-center max-w-xl mb-12'>
                Estamos prontos para ajudar você a transformar suas ideias em realidade. Entre em contato com nossa equipe para discutir suas necessidades, tirar dúvidas ou iniciar seu próximo projeto. Sua mensagem é muito importante para nós!
            </p>
            <div className='grid md:grid-flow-col gap-10'>
                {/* contact form */}
                <div 
                    data-aos='fade-right'
                    data-aos-delay='400'
                    className='bg-[#C7E9EC] shadow-xl shadow-[#33CCCC] rounded-lg p-8 md:p-12 max-w-xl md:max-w-xl'>
                    <form 
                        data-aos='fade-right'
                        data-aos-delay='600'
                        className='flex flex-col space-y-6'>
                        <div>
                            <label htmlFor="name" className='block text-sm font-medium text-gray-900'>Nome Completo</label>
                            <input type="text" id='name' className='mt-1 p-3 block w-full text-white border-2 border-[#33CCCC] bg-gray-900 rounded-md shadow-sm sm:text-sm' placeholder='Gustavo' />
                        </div>
                        <div>
                            <label htmlFor="email" className='block text-sm font-medium text-gray-900'>E-mail</label>
                            <input type="text" id='email' className='mt-1 p-3 block w-full text-white border-2 border-[#33CCCC] bg-gray-900 rounded-md shadow-sm sm:text-sm' placeholder='gus@exemplo.com' />
                        </div>
                        <div>
                            <label htmlFor="message" className='block text-sm font-medium text-gray-900'>Mensagem</label>
                            <input type="text" id='message' className='mt-1 p-3 block w-full text-white border-2 border-[#33CCCC] bg-gray-900 rounded-md shadow-sm sm:text-sm' placeholder='Insira sua mensagem' />
                        </div>
                        <button className='bg-[#33CCCC] text-white py-2 px-4 rounded-md shadow-md hover:bg-black'>Enviar Mensagem</button>
                    </form>
                </div>
                {/* location and map */}
                <div 
                    data-aos='fade-left'
                    data-aos-delay='400'
                    className='bg-[#C7E9EC] shadow-xl shadow-[#33CCCC] rounded-lg p-8 md:p-12 max-w-3xl w-full flex flex-col items-center md:flex-row gap-7 space-y-6 md:space-y-0 md:space-x-8'>
                    <div 
                        data-aos='fade-left'
                        data-aos-delay='600'
                        className='flex-1'>
                        <h3 className='text-2xl font-semibold mb-4'>Nossa Localização</h3>
                        <div className='text-gray-950 flex gap-2 items-center'>
                            <MapPin className='text-gray-900' fill='#33CCCC' />
                            <p> 
                                123, Av. Goiás, Setor Central <br />
                            Goiânia/GO 74005-010
                        </p>
                        </div>
                        <div className='text-gray-950 flex gap-2 items-center'>
                            <Phone className='text-gray-900' fill='#33CCCC' />
                            <p>
                                62 3333-3333 <br />
                                62 99999-9999
                            </p>
                        </div>
                        <div className='text-gray-950 flex gap-2 items-center'>
                            <Mail className='text-gray-900' fill='#33CCCC' />
                            <p>
                                estrategia@teste.com
                            </p>
                        </div>
                    </div>
                    <div>
                        {/* placeholder for google map */}
                        <div 
                            data-aos='fade-left'
                            data-aos-delay='800'
                            className='w-full h-64 bg-gray-300 rounded-lg'>
                          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15288.009595925569!2d-49.27036754979639!3d-16.67676339550564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef162053f27f9%3A0x7569f1e0dc858c8b!2sAv.%20Goi%C3%A1s%2C%201-549%20-%20St.%20Central%2C%20Goi%C3%A2nia%20-%20GO%2C%2074005-010!5e0!3m2!1spt-BR!2sbr!4v1734367144538!5m2!1spt-BR!2sbr"      className='w-full h-full rounded-lg'
                           width="600" 
                           height="450" 
                           allowfullscreen="" 
                           aria-hidden="false"
                           tabIndex='0'
                           loading="lazy"></iframe>  
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact