import React from 'react';
import logo from '../assets/logo.jpg';

const Footer = () => {
  return (
    <div className=' w-full mx-0 bg-[#1b1a1b]'>
      <div className='w-full px-4 sm:px-10 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-14 py-10 text-sm items-start'>
        <div>
          <img src={logo} className='w-32' alt='Logo' />
          <p className='text-white w-full md:w-2/3 p-1'>Well wishes... Stay Tuned</p>
        </div>
        <div>
          <p className='text-gray-400 text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-1 text-gray-400'>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <p className='text-gray-400 text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-1 text-gray-400'>
            <li>+1-212-456-7890</li>
            <li>contact@shop.com</li>
          </ul>
        </div>
      </div>

      <div className='border-t border-gray-400'>
        <p className='py-5 text-center text-sm text-gray-500'>
          © 2025 shop.com - All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
