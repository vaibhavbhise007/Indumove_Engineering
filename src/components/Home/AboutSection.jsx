import React from 'react';
import image from '../../assets/Intro1.jpg';

function AboutSection() {
    return (
        <section className="flex flex-col lg:flex-row items-center justify-between px-8 lg:px-16 py-12 bg-white gap-3">
          
            <div className="lg:w-1/2">
                <p className="text-sky-500 font-bold text-lg uppercase mb-2">Welcome to</p>
                <h2 className="text-4xl font-serif text-gray-900 mb-6">Indumove Engineering</h2>
                <p className="text-gray-600 font-Sans-serif text-l mb-6">
                    Established in the year <span className="font-bold">2024</span>in PUNE, Maharashtra, we are
                    <span className="font-bold"> "Indumove Engineering"</span>,a partnership-based firm engaged as the foremost manufacturer of Export Pallets, Material Handling Trolleys, Export Rack Packaging, Export Auto Parts Packaging, and many more. 
                    e. Our products are in high demand due to their premium quality and affordable prices. Furthermore, we ensure to timely deliver these products to our clients, 
                    through this we have gained a huge client base in the market. We also provide Fabrication Service etc.
                </p>
                <button className="bg-sky-500 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-sky-600">
                    Know More
                </button>
            </div>

            
            <div className="lg:w-1/2 mt-8 lg:mt-0">
                <img
                    src={image} 
                    alt="Fabpro Engineering"
                    className="rounded-lg shadow-lg"
                />
            </div>
        </section>
    );
}

export default AboutSection;
