import React from 'react';
import video from "../../assets/v2.mp4";
import { useState, useEffect } from 'react';

function HeroSection() {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Simulating when content becomes visible (for demo purposes)
        const timer = setTimeout(() => setIsVisible(true), 700); // Delay to simulate content loading
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Video Background */}
            
            <video
                className="absolute top-0 left-0 w-full h-[600px] object-cover"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Overlay Content */}
            <div className="flex flex-col relative z-8 gap-5 items-center justify-center pb-14 h-full bg-black bg-opacity-20">
                <div
                    className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0' }`}
                >
                    <p className="text-sky-400 text-2xl font-bold text-center">
                        We Provide Services Like
                    </p>
                </div>
                <div
                    className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                >
                    <h1 className="text-[#d97706] text-5xl font-bold text-center">
                        Design And Development
                    </h1>
                </div>
            </div>
        </div >
    );
}

export default HeroSection;
