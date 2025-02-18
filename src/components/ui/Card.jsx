import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import p1 from "../../assets/products/p1.jpeg";
import p2 from "../../assets/products/p2.jpeg";
import p3 from "../../assets/products/p3.jpeg";
import p4 from "../../assets/products/p4.jpeg";
import p5 from "../../assets/products/p5.jpeg";
import p6 from "../../assets/products/p6.jpeg";
import p7 from "../../assets/products/p7.jpeg";
import p8 from "../../assets/products/p8.jpeg";
import p9 from "../../assets/products/p9.jpeg";

const Card = () => {
    const navigate = useNavigate();

    const images = [
        { img: p1, title: "Pipe Storage Rack", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { img: p2, title: "Cage Trolley", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { img: p3, title: "Pipe Rack", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { img: p4, title: "Hand Trolley", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { img: p5, title: "Platform Trolley", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { img: p6, title: "Tool Trolley", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { img: p7, title: "Storage Container", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { img: p8, title: "Wire Mesh Trolley", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { img: p9, title: "Pallets", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const autoSlide = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
        return () => clearInterval(autoSlide);
    }, []);

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    return (
        <div className="relative">
            {/* Mobile Slider */}
            <div id="default-carousel" className="relative w-full sm:hidden">
                <div className="relative h-56 overflow-hidden rounded-lg">
                    {images.map((item, index) => (
                        <div
                            key={index}
                            className={`absolute w-full h-54 transition-opacity duration-700 ease-in-out ${
                                index === activeIndex ? "opacity-100" : "opacity-0"
                            }`}
                            onClick={() => navigate("/product-detail", { state: item })}
                        >
                            <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                                <div className="flex rounded-sm bg-gradient-to-r from-blue-600 to-teal-400 p-5 border-black cursor-pointer">
                                    <p className="text-black text-lg font-semibold">{item.title}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Slider Controls */}
                <button onClick={handlePrev} className="absolute top-0 left-0 z-30 h-full px-4">
                    <span className="w-10 h-10 rounded-full bg-white/30 flex items-center justify-center">
                        ❮
                    </span>
                </button>
                <button onClick={handleNext} className="absolute top-0 right-0 z-30 h-full px-4">
                    <span className="w-10 h-10 rounded-full bg-white/30 flex items-center justify-center">
                        ❯
                    </span>
                </button>
            </div>

            {/* Desktop Grid */}
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 hidden sm:grid">
                {images.map((item, index) => (
                    <div
                        key={index}
                        className="relative group bg-blue-100 shadow-lg hover:border-2 border-black overflow-hidden transition-transform transform hover:scale-105"
                        onClick={() => navigate("/product-detail", { state: item })}
                    >
                        <img src={item.img} alt={item.title} className="w-full h-60 object-cover" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="bg-gradient-to-r from-blue-600 to-teal-400 p-5 border-black cursor-pointer">
                                <p className="text-black text-lg font-semibold">{item.title}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Card;
