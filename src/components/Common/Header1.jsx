import React, { forwardRef } from 'react';
import { LuClock9 } from "react-icons/lu";
import { BiLogoFacebook } from "react-icons/bi";
import { FaInstagram, FaTwitter } from 'react-icons/fa';
import { IoLogoGoogleplus } from 'react-icons/io';

const Header1 = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className='flex justify-around items-center w-screen h-[3rem] relative flex-row top-0 text-white bg-secondary z-50 overflow-hidden'
    >
      <div
        id='left-div'
        className='bg-trasnparent w-[25rem] h-full flex justify-center items-center flex-row gap-[1rem]'
      >
            <LuClock9 className='text-primary' />
          Mon - Tues : 6.00 am - 10.00 pm, Sunday Closed
      
      </div>
      <div
        id='right-div'
        className='bg-secondary w-[25%] h-full justify-around items-center flex flex-row'
      >
        <ul className='flex justify-around items-center w-[50%] h-[40%] text-[1.2rem] bg-secondary pr-[2rem] border-r-2 border-r-gray-300'>
          <li className='cursor-pointer hover:scale-[130%]'><BiLogoFacebook /></li>
          <li className='cursor-pointer hover:scale-[130%]'><FaTwitter /></li>
          <li className='cursor-pointer hover:scale-[130%]'><FaInstagram /></li>
          <li className='cursor-pointer hover:scale-[130%]'><IoLogoGoogleplus /></li>
        </ul>
        <div className='bg-secondary h-full w-[10rem] flex justify-around items-center text-[1rem] font-semibold'>
          <span className='text-primary cursor-pointer hover:underline hover:scale-[110%]'>Login</span>
          or
          <span className='text-primary cursor-pointer hover:underline hover:scale-[110%]'>Register</span>
        </div>
      </div>
    </div>
  );
});

export default Header1;
