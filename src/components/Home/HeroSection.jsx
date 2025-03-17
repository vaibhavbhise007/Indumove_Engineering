import React, { useState, useEffect } from 'react';
import Carousel from "../../components/ui/Carousel";
import AdComponent from '../AdSense/AdComponent';






function HeroSection() {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Simulating when content becomes visible (for demo purposes)
        const timer = setTimeout(() => setIsVisible(true), 700); // Delay to simulate content loading
        return () => clearTimeout(timer);
    }, []);

    return (
        <div id="home" className=" w-full lg:h-[600px]  overflow-hidden pt-16 top-0">
            <Carousel />
            {/* <AdComponent /> */}
        </div>
        
        
    );
}

export default HeroSection;
