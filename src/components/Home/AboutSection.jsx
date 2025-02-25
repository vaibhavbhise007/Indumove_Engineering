import React from "react";
import image from "../../assets/Intro1.jpg";

function AboutSection() {
  return (
    <section id="about" className="flex flex-col lg:flex-row items-center justify-between  px-4 md:px-8 lg:px-16 py-8 md:py-12 bg-white gap-8">
      {/* Left Content */}
      <div className="w-full lg:w-1/2 text-center lg:text-left">
        <p className="text-[#ffd838] font-bold text-sm md:text-lg uppercase mb-2">
          ABOUT COMPANY
        </p>
        <h2 className="text-2xl md:text-4xl font-bold text-black mb-4 md:mb-6">
          Indumove Engineering
        </h2>
        <p className="text-gray-600 text-sm md:text-base mb-6 leading-relaxed">
          Established in the year <span className="font-bold">2024</span> in PUNE, Maharashtra, we are
          <span className="font-bold"> "Indumove Engineering"</span>, a partnership-based firm engaged as the foremost manufacturer of Export Pallets, Material Handling Trolleys, Export Rack Packaging, Export Auto Parts Packaging, and many more. 
          Our products are in high demand due to their premium quality and affordable prices. Furthermore, we ensure to timely deliver these products to our clients, 
          through this we have gained a huge client base in the market. We also provide Fabrication Service etc.
        </p>
        <button className="bg-[#ffd838] text-white px-6 py-3 rounded-md text-sm md:text-lg font-medium hover:bg-[#202559] transition duration-300">
          Know More
        </button>
      </div>

      {/* Right Content */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
        <img
          src={image}
          alt="Indumove Engineering"
          className="rounded-lg shadow-lg w-full h-auto max-w-[400px] md:max-w-[500px] lg:max-w-[600px]"
        />
      </div>
    </section>
  );
}

export default AboutSection;
