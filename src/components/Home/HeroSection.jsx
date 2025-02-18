import React, { useState, useEffect } from 'react';
import Carousel from "../../components/ui/Carousel";






function HeroSection() {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Simulating when content becomes visible (for demo purposes)
        const timer = setTimeout(() => setIsVisible(true), 700); // Delay to simulate content loading
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className=" w-full h-[500px] overflow-hidden top-0">
            <Carousel />
        </div>
    );
}

export default HeroSection;
