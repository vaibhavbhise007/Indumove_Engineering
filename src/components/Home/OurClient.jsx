import React from 'react'
import c1 from "../../assets/client/c1.jpeg";
import c2 from "../../assets/client/c2.jpeg";
function OurClient() {
    return (
        <section id="client" className='py-10 bg-white md:px-8 lg:px-16' >
            <div className='w-full h-[2px] bg-black '></div>
            <div className='px-4'>
                <p className='text-lg font-bold text-[#ffd838] pt-6 mb-2 '>OUR CLIENT</p>
                <h1 className='text-4xl font-bold text-black'>Our Client</h1>
            </div>
            <div className='grid lg:grid-cols-4 sm:grid-cols-1 gap-4 py-4 px-6'>
                    <img 
                        src={c1}
                        className='lg:w-58 w-full h-full border-2 border-black'
                    />
                    <img 
                        src={c2}
                        className='lg:w-58 w-full h-full border-2 border-black'
                    />
            </div>
        </section>
    )
}

export default OurClient
