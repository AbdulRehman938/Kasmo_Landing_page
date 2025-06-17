import React from 'react'
import { FaMapLocationDot } from 'react-icons/fa6'
import { IoIosMailOpen } from 'react-icons/io'
import { PiPhoneCallLight } from 'react-icons/pi'

const Header3 = () => {
    return (
        <>
            <div className='w-full h-[7rem] bg-gray-100 relative flex flex-row justify-around align-center text-center items-center pl-[20rem] pr-[15rem]'>
                <div className='w-[15rem] h-full flex justify-center align-center items-center text-center gap-[0.5rem]'>
                    <img className='h-[4rem] w-[4rem]' src="\icon.png" alt="icon" />
                    <span className='font-bold text-black text-[1.8rem]'>KASMO</span>
                </div>
                <div className='bg-transparent w-[57rem] h-full flex justify-around align-center items-center text-center'>
                    <div className="bg-transparent flex justify-between0 h-[5rem] w-[15rem] gap-[0.5rem]">
                        <PiPhoneCallLight  className='h-auto w-[5rem] text-primary' />
                        <div className='h-full w-[12rem] flex flex-col justify-center items-start text-center'>
                            <h1 className='text-gray-700 font-bold text-[1.1rem]'>Call Us Now</h1>
                            <p className='text-gray-700 font-bold text-[1rem]'>T+(008) 001-234-567</p>
                        </div>
                    </div>

                    <div className="bg-transparent flex justify-between0 h-[5rem] w-[15rem] gap-[0.5rem]">
                        <IoIosMailOpen  className='h-auto w-[5rem] text-primary' />
                        <div className='h-full w-[12rem] flex flex-col justify-center items-start text-center'>
                            <h1 className='text-gray-700 font-bold text-[1.1rem]'>Mail Us Today</h1>
                            <p className='text-gray-700 font-bold text-[1rem]'>email@gmail.com</p>
                        </div>
                    </div>

                     <div className="bg-transparent flex justify-between0 h-[5rem] w-[15rem] gap-[0.5rem]">
                        <FaMapLocationDot  className='h-auto w-[5rem] text-primary' />
                        <div className='h-full w-[12rem] flex flex-col justify-center items-start text-center'>
                            <h1 className='text-gray-700 font-bold text-[1.1rem]'>Company Location</h1>
                            <p className='text-gray-700 font-bold text-[1rem]'>1230 Banena Street, London</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Header3