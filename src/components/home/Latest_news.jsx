import React from 'react';

const Latest_news = () => {
    const cards = [
        {
            id: 1,
            image: 'https://hellloexpert.com/tf/html/shipter/assets/images/blog/1.jpg',
            title: 'We ensure you about the safety',
            date: 'Business | October 12, 2025',
            hoverText: 'Explore how we maintain safety in shipping operations.'
        },
        {
            id: 2,
            image: 'https://hellloexpert.com/tf/html/shipter/assets/images/blog/2.jpg',
            title: 'Our team is growing fast',
            date: 'Company | November 01, 2025',
            hoverText: 'Meet the new faces behind our logistics expansion.'
        },
        {
            id: 3,
            image: 'https://hellloexpert.com/tf/html/shipter/assets/images/blog/3.jpg',
            title: 'We launched a new warehouse',
            date: 'News | September 22, 2025',
            hoverText: 'Discover our latest facility with cutting-edge tech.'
        }
    ];

    return (
        <>
            <div className='w-[65%] h-[35rem] flex flex-col justify-start items-center text-white mt-[3rem] mb-[10rem]'>
                <div className='w-[20rem] h-[7rem] flex flex-col justify-start items-center text-center'>
                    <span className='text-primary text-[1.1rem]'>stay with our blog</span>
                    <h1 className='text-black font-bold text-[2.5rem] mt-[-0.5rem]'>Our Latest News</h1>
                    <div className='h-[0.2rem] w-[4rem] bg-primary'></div>
                </div>
                <div className='w-full h-[30rem]'>
                    <div className='w-full h-full flex justify-between items-center text-center'>
                        {cards.map((card) => (
                            <div key={card.id} className='w-[30%] h-full bg-white rounded-[1rem] group relative overflow-hidden'>
                                {/* Image and overlay */}
                                <div className='w-full h-full relative rounded-t-[1rem] overflow-hidden'>
                                    <img
                                        className='h-full w-full object-cover rounded-t-[1rem] z-10 absolute'
                                        src={card.image}
                                        alt={`blog${card.id}`}
                                    />
                                    <div className='absolute inset-0 bg-black opacity-[40%] z-20'></div>
                                </div>

                                {/* Hover white overlay */}
                                <div className='absolute inset-0 bg-white z-40
                                                transform translate-y-full
                                                group-hover:translate-y-0
                                                transition-transform duration-500 ease-in-out
                                                flex items-center justify-center p-4 text-center'>
                                    <p className='text-black text-lg font-bold'>{card.hoverText}</p>
                                </div>

                                {/* Bottom text */}
                                <div className='absolute bottom-0 w-full text-white z-30 flex flex-col justify-center items-center text-center px-[2rem] pb-[2rem]'>
                                    <h1 className='font-bold text-[1.5rem] mt-[3rem] w-[20rem]'>{card.title}</h1>
                                    <p className='text-[1.2rem] mt-2'>{card.date}</p>
                                    <div className='bg-gray-300 w-full h-[0.15rem] mt-4'></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Latest_news;
