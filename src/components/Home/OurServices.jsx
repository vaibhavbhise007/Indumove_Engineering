import React from 'react'
import s1 from '../../assets/herosection/s1.jpg';
import s2 from '../../assets/herosection/s2.jpg';
import s3 from '../../assets/herosection/s3.jpg';
import s5 from '../../assets/herosection/s5.jpg';
import s7 from '../../assets/herosection/s7.jpg';
import s8 from '../../assets/herosection/s8.jpg';
function OurServices() {
    return (
        <section className='py-10 bg-white md:px-8 lg:px-16'>

            <div className='w-full h-[2px] bg-black '></div>
            <div className='px-4'>
                <p className='text-lg font-bold text-[#ffd838] pt-6 mb-2 '>WE PROVIDE</p>
                <h1 className='text-4xl font-bold text-black'>Our Services</h1>
            </div>

            <div className='py-8 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between'>
                <div className="max-w-sm overflow-hidden shadow-xl relative group">
                    <div className="absolute inset-0 bg-black bg-opacity-70 transition-transform duration-500 translate-y-full group-hover:translate-y-0 "></div>

                    <img className="w-full" src={s1} />

                    <div className="px-6 py-6 relative z-10">
                        <div className="flex justify-center items-center text-black font-bold text-xl hover:text-[#4c56bf] ">
                            <span className="relative group ">
                                Design And Development
                                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#4c56bf]  transition-all duration-300 group-hover:w-full"></div>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="max-w-sm overflow-hidden shadow-xl relative group">
                    <div className="absolute inset-0 bg-black bg-opacity-70 transition-transform duration-500 translate-y-full group-hover:translate-y-0 "></div>

                    <img className="w-full" src={s3} />

                    <div className="px-6 py-6 relative z-10">
                        <div className="flex justify-center items-center text-black font-bold text-xl hover:text-[#4c56bf] ">
                            <span className="relative group ">
                                Manufacturing
                                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#4c56bf]  transition-all duration-300 group-hover:w-full"></div>
                            </span>
                        </div>
                    </div>
                </div>


                <div className="max-w-sm overflow-hidden shadow-xl relative group">
                    <div className="absolute inset-0 bg-black bg-opacity-70 transition-transform duration-500 translate-y-full group-hover:translate-y-0 "></div>

                    <img className="w-full" src={s2} />

                    <div className="px-6 py-6 relative z-10">
                        <div className="flex justify-center items-center text-black font-bold text-xl hover:text-[#4c56bf] ">
                            <span className="relative group ">
                                Container Packaging
                                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#4c56bf]  transition-all duration-300 group-hover:w-full"></div>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="max-w-sm overflow-hidden shadow-xl relative group">
                    <div className="absolute inset-0 bg-black bg-opacity-70 transition-transform duration-500 translate-y-full group-hover:translate-y-0 "></div>

                    <img className="w-full" src={s2} />

                    <div className="px-6 py-6 relative z-10">
                        <div className="flex justify-center items-center text-black font-bold text-xl hover:text-[#4c56bf] ">
                            <span className="relative group ">
                                Fabrication & Engineering Services
                                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#4c56bf]  transition-all duration-300 group-hover:w-full"></div>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="max-w-sm overflow-hidden shadow-xl relative group">
                    <div className="absolute inset-0 bg-black bg-opacity-70 transition-transform duration-500 translate-y-full group-hover:translate-y-0 "></div>

                    <img className="w-full" src={s5} />

                    <div className="px-6 py-6 relative z-10">
                        <div className="flex justify-center items-center text-black font-bold text-xl hover:text-[#4c56bf] ">
                            <span className="relative group ">
                                Supply Chain & Logistics Support
                                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#4c56bf]  transition-all duration-300 group-hover:w-full"></div>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="max-w-sm overflow-hidden shadow-xl relative group">
                    <div className="absolute inset-0 bg-black bg-opacity-70 transition-transform duration-500 translate-y-full group-hover:translate-y-0 "></div>

                    <img className="w-full" src={s7} />

                    <div className="px-6 py-6 relative z-10">
                        <div className="flex justify-center items-center text-black font-bold text-xl hover:text-[#4c56bf] ">
                            <span className="relative group ">
                               Industrial Relocation
                                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#4c56bf]  transition-all duration-300 group-hover:w-full"></div>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="max-w-sm overflow-hidden shadow-xl relative group">
                    <div className="absolute inset-0 bg-black bg-opacity-70 transition-transform duration-500 translate-y-full group-hover:translate-y-0 "></div>

                    <img className="w-full" src={s7} />

                    <div className="px-6 py-6 relative z-10">
                        <div className="flex justify-center items-center text-black font-bold text-xl hover:text-[#4c56bf] ">
                            <span className="relative group ">
                                PEB Manufacturing
                                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#4c56bf]  transition-all duration-300 group-hover:w-full"></div>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="max-w-sm overflow-hidden shadow-xl relative group">
                    <div className="absolute inset-0 bg-black bg-opacity-70 transition-transform duration-500 translate-y-full group-hover:translate-y-0 "></div>

                    <img className="w-full" src={s8} />

                    <div className="px-6 py-6 relative z-10">
                        <div className="flex justify-center items-center text-black font-bold text-xl hover:text-[#4c56bf] ">
                            <span className="relative group ">
                                Structural Fabrication
                                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#4c56bf]  transition-all duration-300 group-hover:w-full"></div>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurServices
