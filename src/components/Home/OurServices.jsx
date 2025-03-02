import React from 'react';
import s1 from '../../assets/herosection/s1.jpg';
import s2 from '../../assets/herosection/s2.jpg';
import s3 from '../../assets/herosection/s3.jpg';
import s4 from '../../assets/herosection/s4.jpg';
import s5 from '../../assets/herosection/s5.jpg';
import s6 from '../../assets/herosection/s6.jpg';
import s7 from '../../assets/herosection/s7.jpg';
import s8 from '../../assets/herosection/s8.jpg';

const services = [
    { img: s1, title: "Design And Development" },
    { img: s3, title: "Manufacturing" },
    { img: s2, title: "Container Packaging" },
    { img: s4, title: "Fabrication & Engineering Services" },
    { img: s5, title: "Supply Chain & Logistics Support" },
    { img: s6, title: "Industrial Relocation" },
    { img: s7, title: "PEB Manufacturing" },
    { img: s8, title: "Structural Fabrication" }
];

function OurServices() {
    return (
        <section id="services" className="py-10 bg-white px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
            <div className="w-full h-[2px] bg-black"></div>
            <div className="text-center">
                <p className="text-lg font-bold text-[#ffd838] pt-6 mb-2">WE PROVIDE</p>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">Our Services</h1>
            </div>

            <div className="py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                {services.map((service, index) => (
                    <div key={index} className="w-full  sm:max-w-sm mx-auto overflow-hidden shadow-xl relative group rounded-lg">
                        <div className="absolute inset-0 bg-black bg-opacity-70 transition-transform duration-500 translate-y-full group-hover:translate-y-0"></div>
                        <img className="w-full h-56 sm:h-64 object-cover rounded-t-lg" src={service.img} alt={service.title} />
                        <div className="px-4 py-3 relative z-10 bg-white text-center rounded-b-lg">
                            <div className="text-black font-bold text-base sm:text-lg md:text-xl hover:text-[#4c56bf]">
                                <span className="relative group">
                                    {service.title}
                                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#4c56bf] transition-all duration-300 group-hover:w-full"></div>
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default OurServices;
