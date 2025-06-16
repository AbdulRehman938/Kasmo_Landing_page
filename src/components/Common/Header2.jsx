import React, { useState, useEffect, useRef, useCallback } from 'react';
import { FaSearch } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { navLinks } from '../../constants/navLinks';

const Header2 = ({ scrolled }) => {
  const location = useLocation();
  

  const [activeIndex] = useState(() => {
    const current = navLinks.findIndex(link => location.pathname.includes(link.id));
    return current !== -1 ? current : 0;
  });

  const [hoverIndex, setHoverIndex] = useState(null);
  const [showBoxes, setShowBoxes] = useState(Array(navLinks.length).fill(false));
  const timeoutRefs = useRef(Array(navLinks.length).fill(null));

  const [sliderStyle, setSliderStyle] = useState({ left: 0, width: '0px' });
  const linkRefs = useRef([]);

  const setLinkRef = useCallback((el, index) => {
    if (el) {
      linkRefs.current[index] = el;
    }
  }, []);

  useEffect(() => {
    const updateSliderPosition = () => {
      const targetIndex = hoverIndex !== null ? hoverIndex : activeIndex;
      const targetLink = linkRefs.current[targetIndex];

      if (targetLink) {
        const linkRect = targetLink.getBoundingClientRect();
        // const parentUl = targetLink.offsetParent;
       

        const sliderWidthPx = 32;

        setSliderStyle({
          left: targetLink.offsetLeft + (linkRect.width / 2) - (sliderWidthPx / 2),
          width: `${sliderWidthPx}px`,
        });
      } else {
        setSliderStyle({ left: 0, width: '0px' });
      }
    };

    const initialUpdateTimeout = setTimeout(updateSliderPosition, 50);
    window.addEventListener('resize', updateSliderPosition);

    return () => {
      clearTimeout(initialUpdateTimeout);
      window.removeEventListener('resize', updateSliderPosition);
    };
  }, [hoverIndex, activeIndex]);

  const handleMouseEnter = (index) => {
    if (timeoutRefs.current[index]) {
      clearTimeout(timeoutRefs.current[index]);
    }
    setHoverIndex(index);
    setShowBoxes((prev) => prev.map((_, i) => i === index));
  };

  const handleMouseLeave = (index) => {
    timeoutRefs.current[index] = setTimeout(() => {
      if (hoverIndex === index) {
         setHoverIndex(null);
      }
      setShowBoxes((prev) => prev.map((val, i) => i === index ? false : val));
    }, 300);
  };
  return (
    <div
      className={`flex justify-around items-center w-full box-border h-[4rem] text-center
       z-50 relative transition-all duration-700
      ${scrolled ? 'bg-white' : 'bg-white'}`}
    >
      <div className="flex items-center gap-2">
        <img src="/icon.png" alt="home-head-2" className="h-[2rem]" />
        <p className="font-bold text-2xl text-black">KASMO</p>
      </div>

      <div className="flex items-center gap-6 relative">
        <ul className="flex items-center gap-6 relative">
          {navLinks.map((item, index) => (
            <li
              key={item.id}
              ref={el => setLinkRef(el, index)}
              className="relative text-[1.2rem] font-medium cursor-pointer text-black"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
            >
              <Link
                to={`/${item.id}`}
                className="inline-block px-2 py-1 text-black hover:text-primary hover:scale-[110%] hover:group transition-all "
              >
                {item.title}
              </Link>

              {showBoxes[index] && (
                <div
                  className="fixed z-[9999] bg-white text-black text-xs rounded shadow-lg py-1 px-2 animate-fade-in"
                  style={{
                    left: `${linkRefs.current[index].getBoundingClientRect().left + linkRefs.current[index].getBoundingClientRect().width / 2}px`,
                    top: `${linkRefs.current[index].getBoundingClientRect().bottom + 8}px`, 
                    transform: 'translateX(-50%)', 
                    width: '7rem',
                    minHeight: '4rem', 
                    display: 'flex', 
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  onMouseEnter={() => clearTimeout(timeoutRefs.current[index])}
                  onMouseLeave={() => handleMouseLeave(index)}
                >
                  {item.title} INFO
                </div>
              )}
            </li>
          ))}

          <span
            className="absolute bottom-0 h-[0.2rem] bg-orange-500 transition-all duration-300 w-[1rem] group hover:bg-black"
            style={sliderStyle}
          />
        </ul>
        
      <div className="w-[3rem] h-full">
        <button className="w-full h-full text-white flex justify-center items-center text-[1.2rem] hover: transition-all duration-300 rounded">
          <FaSearch className='text-orange-500' />
        </button>
      </div>
      </div>

    </div>
  );
};

export default Header2;
