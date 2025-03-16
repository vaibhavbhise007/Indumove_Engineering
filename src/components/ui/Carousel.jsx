import React, { useState, useEffect } from "react";
import s1 from "../../assets/herosection/s1.jpg";
import s2 from "../../assets/herosection/s2.jpg";
import s3 from "../../assets/herosection/s3.jpg";

const images = [
  {
    src: s1,
    title: "Design and Development",
    text: "Design and development are creative processes that work together to create a product or service. Design is about creating an idea, while development is about turning that idea into a reality.",
  },
  {
    src: s2,
    title: "Container Packaging Solution",
    text: "Packaging solutions encompass various elements, including packaging materials (e.g., paper, plastic, metal, glass), packaging machinery (e.g., fillers, sealers, labeling machines), design and branding services, and even consulting on sustainable and eco-friendly packaging options.",
  },
  {
    src: s3,
    title: "PEB Manufacturer",
    text: "A PEB (Pre-Engineered Building) is a steel-based building that is designed and fabricated in a factory and then assembled on-site. PEB buildings are often used for industrial, commercial, and warehousing needs.",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {/* Carousel wrapper */}
      <div className="relative h-[500px] w-full overflow-hidden rounded-md md:h-full">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute top-1/2 left-1/2 w-full h-full transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
          >
            {/* Image */}
            <img
              src={img.src}
              className="block w-full h-[500px] object-cover bg-black bg-opacity-50 transition-opacity duration-1000 ease-in-out"
              alt={`Slide ${index + 1}`}
            />

            {/* Overlay title */}
            <div
              className={`absolute 
                top-1/2 sm:top-1/2 md:top-36 
                left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                text-black font-bold 
                text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
                text-center transition-all duration-1000 
                ${index === currentIndex ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
              `}
                        >
              {img.title}
            </div>



            <div className="absolute pt-8 sm:top-12 md:top-36 lg:top-48 left-1/2 transform -translate-x-1/2 text-black font-serif text-lg sm:text-sm md:text-xl lg:text-2xl text-center px-4 sm:px-6 md:px-8 w-[90%] sm:w-[80%] md:w-auto">
              {img.text}
            </div>

          </div>
        ))}
      </div>

      {/* Slider indicators */}
      <div className="absolute z-30 flex bottom-5 left-1/2 -translate-x-1/2 space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-gray-700" : "bg-gray-200"
              }`}
            onClick={() => goToSlide(index)}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Slider controls */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-5 transform -translate-y-1/2 z-30 bg-[#ffd838] text-black p-3 rounded-full hover:text-white/50 focus:outline-none"
      >
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-5 transform -translate-y-1/2 z-30 bg-[#ffd838] text-black p-3 rounded-full hover:text-white/50 focus:outline-none"
      >
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default Carousel;
