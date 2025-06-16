import React, { useState, useEffect, useRef, useCallback } from 'react';
import Header1 from '../components/Common/Header1';
import Header2 from '../components/Common/Header2';
import { IoIosArrowBack, IoIosArrowForward, IoIosStar } from 'react-icons/io';
import { FaShip, FaTruckMoving, FaPlane, FaWarehouse } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import Who_we_are from '../components/home/Who_we_are';
import Cards_services from '../components/home/Cards_services';
import Testimonials from '../components/home/Testimonials';
import Latest_news from '../components/home/Latest_news';
import Simplify from '../components/home/Simplify';
import Footer from '/src/components/Common/Footer.jsx';

const images = [
  '/src/assets/images/home-slide1.png',
  '/src/assets/images/home-slide2.png',
  '/src/assets/images/home-slide3.png',
];

const slideText = [
  "Streamline DOT & FMCSA Compliance",
  "Streamline DOT & FMCSA Compliance",
  "Streamline DOT & FMCSA Compliance",
];

const slideButtons = [
  "Contact us",
  "Contact us",
  "Contact us",
];


const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrolled, setScrolled] = useState(false);
 

  const imageContainerRef = useRef(null);
  const header1Ref = useRef(null);
 
  const ticking = useRef(false);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

    
    useEffect(() => {
      const container = imageContainerRef.current;
      if (container) {
        container.style.transition = 'transform 0.5s ease-in-out';
        container.style.transform = `translateX(-${currentIndex * 100}%)`;
      }
    }, [currentIndex]);
  
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
    <div className="relative w-full h-full overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative top-0 left-0 w-full h-full z-[-1] overflow-x-hidden">
        <div className="flex w-full h-full" ref={imageContainerRef}>
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`slide-${index}`}
              className="w-full h-[55rem] object-cover flex-shrink-0"
            />
          ))}
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 z-10 pointer-events-none"></div>
      </div>

      {/* Headers */}
      <div className="absolute top-0 w-full z-50">
        <div
          ref={header1Ref}
          className={`transition-all duration-500 ease-in-out ${scrolled ? '-translate-y-full opacity-0 absolute' : 'translate-y-0 opacity-100 relative'}`}
        >
          <Header1 />
        </div>
        <div className={`${scrolled ? 'fixed top-0 w-full' : 'relative'}`}>
          <Header2 scrolled={scrolled} />
        </div>
      </div>

      {/* Slide Buttons and Text */}
      <div className="relative top-[-20rem] w-full h-full z-30 flex justify-center items-center">
        <button
          onClick={prevSlide}
          className="absolute left-10 z-40 bg-white/70 hover:bg-white text-black p-2 rounded-full shadow-md"
        >
          <IoIosArrowBack />
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.6 }}
            className="absolute z-40 left-12 top-1/2 -translate-y-1/2 text-white"
          >
            <div className="text-4xl lg:text-5xl font-bold drop-shadow-lg w-[40rem] relative bottom-[15rem] left-[15rem]">
              {slideText[currentIndex]}
              <p className='text-[1.1rem] font-medium mt-[1rem]'>CompliancePro simplifies DOT & FMCSA regulations for trucking companies.</p>
              <p className='text-[1rem] font-normal mt-[2rem]'>Call Now: 612-440-8814</p>
            </div>
            <button className="px-6 py-2 bg-primary relative bottom-[12rem] left-[15rem] hover:bg-blue-700 transition-all duration-300 text-white rounded-lg text-sm font-medium">
              {slideButtons[currentIndex]}
            </button>
            <div className='bg-transparent w-[15rem] h-[3rem] relative bottom-[12rem] left-[15rem] flex '>
              <div className='relative flex flex-row w-[10rem] bg-transparent gap-[0.5rem] h-full text-[#ecbc25] items-center border-r-[0.15rem] pr-[1rem]'>
                <IoIosStar className='text-[1.2rem]' />
                <IoIosStar className='text-[1.2rem]' />
                <IoIosStar className='text-[1.2rem]' />
                <IoIosStar className='text-[1.2rem]' />
                <IoIosStar className='text-[1.2rem]' />
              </div>
              <div className='w-[4rem] bg-transparent h-full flex justify-center items-center text-[0.9rem] border-r-[0.15rem]'>DOT</div>
              <div className='w-[4rem] bg-transparent h-full flex justify-center items-center text-[0.9rem]'>FMCSA</div>
            </div>
          </motion.div>
        </AnimatePresence>

        <button
          onClick={nextSlide}
          className="absolute right-10 z-40 bg-white/70 hover:bg-white text-black p-2 rounded-full shadow-md"
        >
          <IoIosArrowForward />
        </button>
      </div>

      {/* Services & Who we are */}
      <div id="bottom" className="relative w-full z-20 pt-20 flex flex-col justify-center items-center" style={{ minHeight: '150vh', backgroundColor: '#f3f4f6' }}>
        <div className="flex justify-center relative top-[-7.2rem]">
  <div className="flex bg-white rounded-t-2xl shadow-lg overflow-hidden">
    {[
      { label: "Ocean Freight", icon: <FaShip /> },
      { label: "Road Freight", icon: <FaTruckMoving /> },
      { label: "Air Freight", icon: <FaPlane /> },
      { label: "Warehousing", icon: <FaWarehouse /> },
    ].map((item, idx) => (
      <motion.div
        id="group2"
        key={idx}
        whileHover={{ y: '1rem' }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="group flex flex-col items-center justify-center px-6 py-4 w-[160px] h-[110px] cursor-pointer bg-white text-gray-700 hover:bg-primary hover:text-white rounded-t-[2rem]"
      >
        <div className="text-2xl mb-2">{item.icon}</div>
        <span className="text-sm font-semibold">{item.label}</span>
      </motion.div>
    ))}
  </div>
</div>

        <Who_we_are />

        <Simplify />

        <Cards_services />

        {/* Testimonials */}
       <Testimonials />

       <Latest_news />


      </div>
      <Footer />
    </div>
  );
};

export default Home;
