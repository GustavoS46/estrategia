import React from 'react';
import Logo from '../assets/logo.png';

const Footer = () => {
    return (
        <div className='bg-gray-900 p-6 text-center text-sm'>
            <div className='flex justify-center items-center border-t border-gray-700 pt-6 '>
                <p className='text-gray-300'>&copy; 2024</p>
                <img src={Logo} alt="logo" className='w-6' />
                <p className='text-gray-300'>Estrátegia. Todos os direitos reservados.</p>
            </div>
        </div>
    )
}

export default Footer