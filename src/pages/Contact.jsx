import React, { useState, useEffect, useRef, useCallback } from 'react';
import Header1 from '../components/Common/Header1'
import Header3 from '../components/Common/Header3'
import Header2 from '../components/Common/Header2'

const Contact = () => {

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
        <>
            <div className='w-full h-screen bg-white justify-start align-center text-center items-center text-black flex flex-col'>
                <Header1 />
                <Header3 />
                <Header2 />
            </div>
        </>
    )
}

export default Contact