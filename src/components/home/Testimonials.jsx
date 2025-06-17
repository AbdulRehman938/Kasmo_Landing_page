import React, { useState, useEffect, useRef } from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

// Import images from public/assets
const images = [
  '/assets/images/image-home9.png',
  '/assets/images/image-home8.png',
  '/assets/images/image-home7.png',
  '/assets/images/image-home6.png',
  '/assets/images/image-home5.png',
  '/assets/images/image-home4.png',
];


const Testimonials = () => {
    const [index, setIndex] = useState(1);
    const testimonialRef = useRef(null);

    const originalTestimonials = [
        {
            text: "Excellent service, very reliable and professional!",
            image: img1,
        },
        {
            text: "Helped our company stay FMCSA compliant easily.",
            image: img2,
        },
        {
            text: "Customer support was top-notch and always available.",
            image: img3,
        },
        {
            text: "Highly recommend for trucking businesses.",
            image: img4,
        },
        {
            text: "Very user-friendly platform. Saves us hours of paperwork.",
            image: img5,
        },
        {
            text: "The best compliance partner we've had so far!",
            image: img6,
        },
    ];

    const testimonials = [
        originalTestimonials[originalTestimonials.length - 1],
        ...originalTestimonials,
        originalTestimonials[0],
    ];

    const scrollToIndex = (i, behavior = 'smooth') => {
        const container = testimonialRef.current;
        if (container) {
            container.scrollTo({
                left: i * container.offsetWidth,
                behavior,
            });
        }
    };

    const handleArrowClick = (dir) => {
        const newIndex = dir === 'left' ? index - 1 : index + 1;
        setIndex(newIndex);
        scrollToIndex(newIndex);
    };

    useEffect(() => {
        scrollToIndex(index, 'instant');
    }, []);

    useEffect(() => {
        const timeout = setTimeout(() => {
            if (index === 0) {
                scrollToIndex(originalTestimonials.length, 'instant');
                setIndex(originalTestimonials.length);
            } else if (index === originalTestimonials.length + 1) {
                scrollToIndex(1, 'instant');
                setIndex(1);
            }
        }, 500);

        return () => clearTimeout(timeout);
    });

    return (
        <div className="w-full h-[40rem] bg-black mt-[-5rem] mb-[10rem] flex justify-center items-center relative">
            <img
                className="absolute top-0 left-0 w-full h-full object-cover opacity-50 z-10"
                src="https://hellloexpert.com/tf/html/shipter/assets/images/testimonial/1.jpg"
                alt="background"
            />

            {/* Left Arrow */}
            <button
                onClick={() => handleArrowClick('left')}
                className="absolute left-[32rem] z-30 bg-white/70 hover:bg-white text-black p-3 rounded-full shadow-md"
            >
                <IoIosArrowBack size={24} />
            </button>

            {/* Testimonials Container */}
            <div
                ref={testimonialRef}
                className="flex transition-all duration-500 ease-in-out overflow-x-hidden scroll-smooth no-scrollbar w-[35rem] snap-x snap-mandatory z-20"
            >
                {testimonials.map((item, i) => (
                    <div
                        key={i}
                        className="relative flex-shrink-0 snap-center w-[35rem] h-[25rem] bg-white rounded-xl shadow-md flex flex-col justify-start align-center items-center text-center px-6 pt-6 z-20"
                    >
                        <img
                            className="h-[7rem] w-[7rem] rounded-full border-[0.4rem] border-gray-300 absolute -top-[-17rem] z-25 bg-white align-center justify-center text-center"
                            src={item.image}
                            alt="User"
                        />
                        <div className="mt-[1rem] w-full h-full flex flex-col justify-top items-center text-center">
                            <FaQuoteLeft className="text-2xl text-blue-600 mb-[2rem]" />
                            <p className="text-[1.2rem] font-medium text-gray-700">{item.text}</p>
                            <h1 className='text-primary text-[1.5rem] font-medium mt-[3rem]'>Director Name</h1>
                        </div>
                    </div>

                ))}
            </div>

            {/* Right Arrow */}
            <button
                onClick={() => handleArrowClick('right')}
                className="absolute right-[32rem] z-30 bg-white/70 hover:bg-white text-black p-3 rounded-full shadow-md"
            >
                <IoIosArrowForward size={24} />
            </button>
        </div>
    );
};

export default Testimonials;
