import React from 'react';
import imgvision from '../../assets/vision.gif';
import imgmission from '../../assets/mission.gif';

function OurMissionVision() {
    return (
        <section className='py-8 px-4 md:px-8 lg:px-24'>
            <div className='w-full h-[2px] bg-black '></div>

            <div className='flex bg-white shadow-md rounded-lg mb-3 mt-8 '>
                <div className=" md:w-2/3   ">
                    <h2 className="text-2xl md:text-4xl font-bold text-black mb-4 md:mb-6 text-center md:text-left">
                        Our Vision
                    </h2>
                    <hr className="my-2 border-orange-500" />
                    <div className=" text-center md:text-left">
                        <p className="text-gray-700  leading-relaxed">
                            To be the foremost provider of innovative, end-to-end supply chain solutions,
                            delivering exceptional value through ethical practices,
                            continuous innovation, and a dedicated team, all aimed at achieving unparalleled customer satisfaction.
                        </p>
                    </div>
                </div>


                <div className="md:w-1/3 flex justify-center top-0 ">
                    <img
                        src={imgvision}
                        alt="vision"
                        className="w-[120px] h-[140px] md:w-[200px] md:h-[220px] object-contain"
                    />
                </div>

            </div>



            {/* Mission Section */}
            <div className="flex flex-col md:flex-row bg-white shadow-md rounded-lg  pt-2 items-center md:items-start gap-6">
                {/* Image Section (Now on the Left) */}
                <div className="md:w-1/3 flex justify-center top-0">
                    <img
                        src={imgmission}
                        alt="mission"
                        className="w-[120px] h-[140px] md:w-[200px] md:h-[220px] object-contain"
                    />
                </div>

                {/* Text Section (Now on the Right) */}
                <div className="md:w-2/3 text-center md:text-left">
                    <h2 className="text-2xl md:text-4xl font-bold text-black mb-4 md:mb-6">
                        Our Mission
                    </h2>
                    <hr className="my-2 border-orange-500" />
                    <p className="text-gray-700 leading-relaxed">
                        As specialists in comprehensive supply chain management, we empower our customers
                        by managing their end-to-end logistics with expertise and reliability. This allows them to focus on
                        their core business while we optimize their supply chain for enhanced efficiency and growth.
                    </p>
                </div>
            </div>



        </section>
    )
}

export default OurMissionVision
