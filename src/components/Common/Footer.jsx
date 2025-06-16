import React from 'react'
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaYoutubeSquare } from 'react-icons/fa'
import { LuClock9 } from 'react-icons/lu'


const Footer = () => {
    return (
        <>
            <div className='relative bottom-0 h-[35rem] w-full bg-secondary flex flex-col justify-between align-center items-center'>
                <div className='w-[60%]  h-[23rem] mt-[2rem] flex flex-row justify-between items-center align-center text-white'>
                    <div className='w-[20rem] h-full'>
                        <div className='h-[5rem] w-full flex text-center justify-center align-center items-center gap-[1rem]'>
                            <img className='w-auto h-[3rem]' src="public\icon.png" alt="logo" />
                            <span className='font-bold text-[2rem]'>KASMO</span>
                        </div>
                        <p className='mt-[2rem] font-medium'>There are many variations of Lorem passages of Lorem Ipsum available, but the majority</p>
                        <p className='mt-[2rem] font-medium'>By injected humour, or randomised words</p>

                        <div className='bg-white rounded-[2rem] relative bottom-0 w-[70%] h-[3rem] mt-[3rem] flex flex-row justify-around align-center items-center'>
                            <div className='group relative cursor-pointer'>
                                <div id='hover' className='transition-all duration-300 bg-secondary h-[2.5rem] w-[2.5rem] rounded-full flex justify-center align-center items-center group-hover:bg-primary'>
                                    <FaFacebookSquare className='bg-secondary text-[2rem] transition-all h-[1rem] w-[1rem] duration-300 group-hover:bg-primary' />
                                </div>
                            </div>

                            <div className='group relative cursor-pointer'>
                                <div id='hover' className='transition-all duration-300 bg-secondary h-[2.5rem] w-[2.5rem] rounded-full flex justify-center align-center items-center group-hover:bg-primary'>
                                    <FaInstagramSquare className='bg-secondary text-[2rem] transition-all h-[1rem] w-[1rem] duration-300 group-hover:bg-primary' />
                                </div>
                            </div>

                            <div className='group relative cursor-pointer'>
                                <div id='hover' className='transition-all duration-300 bg-secondary h-[2.5rem] w-[2.5rem] rounded-full flex justify-center align-center items-center group-hover:bg-primary'>
                                    <FaYoutubeSquare className='bg-secondary text-[2rem] transition-all h-[1rem] w-[1rem] duration-300 group-hover:bg-primary' />
                                </div>
                            </div>


                            <div className='group relative cursor-pointer'>
                                <div id='hover' className='transition-all duration-300 bg-secondary h-[2.5rem] w-[2.5rem] rounded-full flex justify-center align-center items-center group-hover:bg-primary'>
                                    <FaLinkedin className='bg-secondary text-[2rem] transition-all h-[1rem] w-[1rem] duration-300 group-hover:bg-primary' />
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='w-[20rem] h-full flex flex-col'>
                        <div className='w-full h-[4rem] flex justify-center items-center text-center'>
                            <span className='text-[2rem] font-bold'>Quick Links</span>
                        </div>
                        <div className='w-full h-[20rem] flex flex-col items-center mt-[1.5rem]'>
                            <ul className='flex flex-col items-center justify-center text-center'>
                                <li className='w-full py-1 cursor-pointer font-medium pt-[1rem] text-[1.1rem] hover:text-primary'><span>About Us</span></li>
                                <li className='w-full py-1 cursor-pointer font-medium pt-[1rem] text-[1.1rem] hover:text-primary'><span>Our Services</span></li>
                                <li className='w-full py-1 cursor-pointer font-medium pt-[1rem] text-[1.1rem] hover:text-primary'><span>Contact</span></li>
                                <li className='w-full py-1 cursor-pointer font-medium pt-[1rem] text-[1.1rem] hover:text-primary'><span>Blog</span></li>
                                <li className='w-full py-1 cursor-pointer font-medium pt-[1rem] text-[1.1rem] hover:text-primary'><span>Testimonials</span></li>
                            </ul>
                        </div>
                    </div>

                    <div className='w-[20rem] h-full flex flex-col justify-start items-center'>
                        <h1 className='font-bold text-[2rem] mt-[0.5rem]'>Recent News</h1>
                        <div className=' w-full h-[7rem] mt-[3rem] flex flex-col justify-center'>
                            <div className=' w-full h-[6rem] p-[0.5rem]'>
                                <span className='text-[1.1rem] font-normal'>There are many variations of passages of Lorem</span>
                                <div className='w-full h-[1rem] mt-[0.5rem] flex gap-[0.5rem] align-center items-center'>
                                    <LuClock9 className='text-primary font-bold' />
                                    <p className='text-gray-300'>Octobor 10, 2018</p>
                                </div>
                            </div>
                        </div>

                        <div className=' w-full h-[15rem] mt-[-3rem] flex flex-col justify-center'>
                            <div className=' w-full h-[6rem] p-[0.5rem]'>
                                <span className='text-[1.1rem] font-normal'>There are many variations of passages of Lorem</span>
                                <div className='w-full h-[1rem] mt-[0.5rem] flex gap-[0.5rem] align-center items-center'>
                                    <LuClock9 className='text-primary font-bold' />
                                    <p className='text-gray-300'>Octobor 10, 2018</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='w-full h-[5rem] relative bottom-0 flex justify-center align-center text-center bg-[#101e35] items-center'>
                    <span className='text-white font-medium '>© All rights reserved.</span>
                </div>
            </div>
        </>
    )
}

export default Footer