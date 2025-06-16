import React, { useState, useEffect, useRef, useCallback } from 'react';
import Header1 from '../components/Common/Header1';
import Header2 from '../components/Common/Header2';
import Header3 from '../components/Common/Header3';
import Cards_services from '../components/home/Cards_services';
import Footer from '/src/components/Common/Footer.jsx';

const Services = () => {
    const header1Ref = useRef(null);
    const ticking = useRef(false);
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = useCallback(() => {
        if (!ticking.current) {
            ticking.current = true;
            window.requestAnimationFrame(() => {
                const header1Height = header1Ref.current ? header1Ref.current.offsetHeight : 0;
                const currentScrollY = window.scrollY;
                setScrolled(currentScrollY > header1Height);
                ticking.current = false;
            });
        }
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
            ticking.current = false;
        };
    }, [handleScroll]);

    return (
        <div className='w-screen h-auto overflow-x-hidden bg-white flex flex-col justify-center items-center relative'>
            {/* Header */}
            <div ref={header1Ref}><Header1 /></div>
            <Header3 />
            <div className={`${scrolled ? 'fixed top-0 w-full z-50' : 'relative'}`}>
                <Header2 scrolled={scrolled} />
            </div>

            {/* Hero Section */}
            <div className='bg-black w-full h-[35rem] relative flex justify-center items-center overflow-hidden'>
                <img className='h-full w-full object-cover absolute z-10' src="src/assets/images/image home1.png" alt="error" />
                <div className='w-full h-full bg-black absolute opacity-[50%] z-20'></div>

                <div className='w-[50rem] h-[20rem] relative z-50 flex flex-col justify-center text-center items-center overflow-hidden px-4'>
                    <h1 className='font-bold text-[4rem] text-white'>Kasmo Services</h1>
                    <p className='font-medium text-[1.2rem] text-white mt-4'>
                        Kasmo is your trusted partner in DOT and safety compliance for trucking companies.
                        We provide a comprehensive range of services designed to ensure compliance, enhance
                        safety, and streamline operations for owner-operators and fleet managers. Our
                        expertise ensures that you stay compliant with all federal and state regulations
                        while optimizing your business performance.
                    </p>
                </div>
            </div>

            <Cards_services />
            {/* Second Section */}
            <div className='w-[60%] h-[30rem] mt-[-5rem] mb-[10rem] relative rounded-[2rem] border-[0.2rem] border-gray-500 pb-[1rem]'>
                <img className='w-full h-full absolute rounded-[2rem] object-cover' src="src/assets/images/services.svg" alt="services" />
                <div className='bg-white w-full h-full object-cover absolute rounded-[2rem] opacity-[95%]'></div>
                <div className='relative h-[15rem] w-[40rem] left-[15rem] top-[7rem] flex flex-col justify-start align-center text-center items-center'>
                    <h1 className='font-bold text-[3rem]'>Trusted Compliance Partner.</h1>
                    <p className='font-medium mt-[1.5rem]'>“Kasmo Compliance has simplified our compliance processes and allowed us to focus on our operations effectively.” - George Taylor</p>
                    <button className='bg-secondary text-white p-[1rem] font-medium text-[1.2rem] mt-[4rem] rounded-[1rem] hover:bg-primary hover:text-secondary'>Contact Us</button>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Services;
