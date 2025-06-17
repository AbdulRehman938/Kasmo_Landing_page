import React from 'react'

const Cards_services = () => {
    return (
        <>
            <div className=' w-[80%] h-auto flex flex-col justify-around items-center text-center align-center rounded-[2rem] mb-[10rem]'>
                <div className=' h-[7rem] w-[17rem] relative bottom-[0rem]'>
                    <p className='font-medium text-primary text-[1rem]'>We Provide the Best</p>
                    <h1 className='font-bold text-black text-[2.5rem] mt-[-0.5rem]'>Our Services</h1>
                    <div className='h-[0.2rem] w-[4rem] bg-primary ml-[7rem]'></div>
                </div>
                <div id='cards' className='w-[90%] h-[70rem] grid grid-cols-3 gap-[rem] p-[1rem] pl-[3rem]'>
                    <div className='bg-white h-[30rem] w-[25rem] flex flex-col justify-center items-center text-center align-center rounded-[1rem]'>
                        <img className='h-[8rem] w-[8rem] rounded-full object-cover' src="\assets\images\image-home3.png" alt="error" />
                        <h1 className='font-bold text-[1.8rem] mt-[4rem]'>Expert Guidance</h1>
                        <p className='mt-[2rem] w-[80%]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio rem delectus voluptatum at quaerat quidem dolorum, corrupti atque nesciunt sequi libero ull object-coveram eos omnis, eligendi ad quae explicabo in ea?</p>
                    </div>
                    <div className='bg-white h-[30rem] w-[25rem] flex flex-col justify-center items-center text-center align-center rounded-[1rem]'>
                        <img className='h-[8rem] w-[8rem] rounded-full object-cover fit-content' src="\assets\images\image-home4.png" alt="error" />
                        <h1 className='font-bold text-[1.8rem] mt-[4rem]'>Time Saving Solutions</h1>
                        <p className='mt-[2rem] w-[80%]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio rem delectus voluptatum at quaerat quidem dolorum, corrupti atque nesciunt sequi libero ull object-coveram eos omnis, eligendi ad quae explicabo in ea?</p>
                    </div>
                    <div className='bg-white h-[30rem] w-[25rem] flex flex-col justify-center items-center text-center align-center rounded-[1rem]'>
                        <img className='h-[8rem] w-[8rem] rounded-full object-cover' src="\assets\images\image-home5.png" alt="error" />
                        <h1 className='font-bold text-[1.8rem] mt-[4rem]'>Affordable and Reliable</h1>
                        <p className='mt-[2rem] w-[80%]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio rem delectus voluptatum at quaerat quidem dolorum, corrupti atque nesciunt sequi libero ull object-coveram eos omnis, eligendi ad quae explicabo in ea?</p>
                    </div>
                    <div className='bg-white h-[30rem] w-[25rem] flex flex-col justify-center items-center text-center align-center rounded-[1rem]'>
                        <img className='h-[8rem] w-[8rem] rounded-full object-cover' src="\assets\images\image-home6.png" alt="error" />
                        <h1 className='font-bold text-[1.8rem] mt-[4rem]'>Logistic Solutions</h1>
                        <p className='mt-[2rem] w-[80%]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio rem delectus voluptatum at quaerat quidem dolorum, corrupti atque nesciunt sequi libero ull object-coveram eos omnis, eligendi ad quae explicabo in ea?</p>
                    </div>
                    <div className='bg-white h-[30rem] w-[25rem] flex flex-col justify-center items-center text-center align-center rounded-[1rem]'>
                        <img className='h-[8rem] w-[8rem] rounded-full object-cover' src="\assets\images\image-home8.png" alt="error" />
                        <h1 className='font-bold text-[1.8rem] mt-[4rem]'>Fuel Tax & Vehicle Registration Services</h1>
                        <p className='mt-[2rem] w-[80%]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio rem delectus voluptatum at quaerat quidem dolorum, corrupti atque nesciunt sequi libero ull object-coveram eos omnis, eligendi ad quae explicabo in ea?</p>
                    </div>
                    <div className='bg-white h-[30rem] w-[25rem] flex flex-col justify-center items-center text-center align-center rounded-[1rem]'>
                        <img className='h-[8rem] w-[8rem] rounded-full object-cover' src="\assets\images\image-home7.png" alt="error" />
                        <h1 className='font-bold text-[1.8rem] mt-[4rem]'>Transportation Business Registration</h1>
                        <p className='mt-[2rem] w-[80%]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio rem delectus voluptatum at quaerat quidem dolorum, corrupti atque nesciunt sequi libero ullam eos omnis, eligendi ad quae explicabo in ea?</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Cards_services