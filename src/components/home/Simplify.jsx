import React from 'react'

const Simplify = () => {
  return (
   <>
    <div className='w-full h-[60rem] mt-[5rem] flex flex-col justify-start align-center items-center gap-[5rem] mb-[30rem]'>
        <div className='h-[13rem] w-[50rem] flex flex-col justify-start align-center text-center'>
            <h1 className='font-bold text-[3rem] leading-[3rem]'>Simplify Compliance for Trucking Businesses</h1>
            <p className='mt-[1rem] font-medium text-[1.2rem]'>CompliancePro streamlines DOT & FMCSA regulations for trucking <br /> companies, reducing risks and enabling focus on operations.</p>
        </div>
        <div className='h-[35rem] mt-[4rem] w-[75%] flex flex-row justify-between items-center align-center px-[0rem] '>
            <img className='w-[45rem] h-full rounded-[1rem]' src="\assets\images\image-home1.png" alt="error" />
            <div className='w-[35rem] h-[15rem] flex flex-col justify-left mt-[5rem]'>
                <h1 className='font-bold text-[2.5rem]'>Manage Compliance Easily</h1>
                <p>CompliancePro helps manage DOT and FMCSA compliance easily, <br /> reducing the burden on trucking businesses.</p>
            </div>
        </div>

        <div className='h-[35rem] mt-[2rem] w-[75%] flex flex-row justify-between items-center align-center px-[0rem] '>
            
            <div className='w-[35rem] h-[15rem] flex flex-col justify-left mt-[10rem]'>
                <h1 className='font-bold text-[2.5rem]'>Reduce Operational Risks</h1>
                <p>By ensuring compliance with regulations, CompliancePro helps trucking <br /> companies reduce operational risks and avoid penalties.</p>
            </div>
            <img className='w-[45rem] h-full rounded-[1rem] h-[40rem]' src="\assets\images\image-home10.png" alt="error" />
        </div>
    </div>
   </>
  ) 
}

export default Simplify