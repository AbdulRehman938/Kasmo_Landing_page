import React from 'react'
import { FaSquareCheck } from 'react-icons/fa6'
import { TiWorld } from 'react-icons/ti'

const Who_we_are = () => {
    return (
        <>
            <div className='bg-white w-[80%] h-[40rem] mt-[-2rem] flex flex-row justify-around items-center text-center align-center rounded-[2rem]'>
                <img className='h-auto w-[40rem]' src="\assets\images\image-home2.png" alt="home2" />
                <div className='bg-transparent h-full w-[40rem] flex flex-col justify-center items-start text-left'>
                    <TiWorld className='text-primary text-[6rem]' />
                    <h1 className='font-bold text-black text-[2.5rem]'>Who We Are?</h1>
                    <div className='h-[0.5rem] w-[5rem] bg-primary'></div>
                    <p className='font-normal text-[1.1rem] text-black mt-[2rem]'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less</p>
                    <ul className='flex flex-col justify-between items-left w-[20rem] h-[2rem] mt-[2rem] text-primary gap-[1rem]'>
                        <li className='flex'><FaSquareCheck className='text-[1.5rem]' /> <p className='ml-[1rem] text-[1.1rem] text-black'>Long established fact that a reader</p> </li>
                        <li className='flex'><FaSquareCheck className='text-[1.5rem]' /> <p className='ml-[1rem] text-[1.1rem] text-black'>We making it look like readable English.</p> </li>
                        <li className='flex'><FaSquareCheck className='text-[1.5rem]' /> <p className='ml-[1rem] text-[1.1rem] text-black'>Long established fact that a reader</p> </li>
                    </ul>
                    <div className='flex flex-col justify-center items-left text-left mt-[10rem]'>
                        <h1 className='font-bold text-[1.2rem]'>Chairman Name</h1>
                        <p>Chairman & Chief Executive Officer</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Who_we_are