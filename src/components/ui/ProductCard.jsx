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

const ProductCard = () => {
    const navigate = useNavigate();

    const images = [
        {
            img: p1,
            title: "Pipe Storage Rack",
            description: "A Pipe Storage Rack is a specialized rack system designed to store, organize, and manage pipes, tubes, rods, or other long materials efficiently.",
            Application: "Pipe racks find extensive use in various industries, including petrochemical, chemical, and power plants. They serve as the backbone of storage and support systems for multiple materials, enabling efficient organization and easy access. In petrochemical facilities, pipe racks support pipes, insulation, cable trays, and equipment.These structures help optimize space utilization and ensure the safe routing of pipes and cables. Moreover, pipe racks are employed in other applications, such as storage yards, distribution centers, and industrial warehouses, making them versatile assets in modern industrial operations."
        },
        {
            img: p2,
            title: "Cage Trolley",
            description: "A Cage Trolley is a wheeled storage and transportation unit with metal mesh or bars forming a cage-like structure.",
            Application: "Safe Transport – Prevents goods from falling during movement. Durability – Made of strong metal, ensuring long-term use.Mobility – Equipped with wheels for easy maneuverability.Space Efficiency – Some models can be folded when not in use.Security – Lockable trolleys keep valuable items safe."
        },
        {
            img: p3,
            title: "Pipe Rack",
            description: "A Pipe Rack is a structural framework used to support and organize pipes in industrial facilities, warehouses, and construction sites. It helps in efficient storage, transportation, and distribution of pipes while ensuring safety and easy accessibility.",
            Application: "1)Industrial Plants & Refineries - Used in oil & gas, chemical, and power plants to support pipelines carrying fluids, steam, or gases. 2) Warehouses & Storage Facilities - Helps in systematic storage of pipes, tubes, and rods. 3) Manufacturing & Fabrication Units - Supports assembly lines in factories where pipes are cut, welded, or processed."
        },
        {
            img: p4,
            title: "Hand Trolley",
            description: "A Hand Trolley is a manually operated wheeled cart used to transport heavy or bulky items with ease. It is commonly used in warehouses, factories, retail stores, construction sites, and households for lifting, moving, and organizing goods efficiently.",
            Application: "1)Warehousing & Logistics - Used to transport heavy boxes, packages, and materials efficiently. 2) Retail & Supermarkets - Helps in stock replenishment by moving goods from storage to shelves and Used by staff to transport bulk items. 3) Manufacturing & Industrial Use - Used in factories to transport raw materials, machinery parts, and finished products."

        },
        {
            img: p5,
            title: "Platform Trolley",
            description: "A Platform Trolley is a flat, four-wheeled cart designed for transporting heavy or bulky items with ease. It has a large, stable platform and a handle for pushing or pulling, making it ideal for warehouses, factories, retail stores, and logistics.",
            Application: "1)Warehousing & Logistics -Used to move boxes, cartons, and goods efficiently and Reduces worker fatigue and improves productivity. 2) Retail & Supermarkets - Helps in stock replenishment by moving goods from storage to shelves and Used by staff to transport bulk items. 3) Manufacturing & Industrial Use - Used in factories to transport raw materials, machinery parts, and finished products."

        },
        {
            img: p6,
            title: "Tool Trolley",
            description: "A Tool Trolley is a mobile storage unit designed to organize, store, and transport tools efficiently in workshops, garages, factories, and construction sites. It typically features multiple drawers, shelves, or compartments, making it easier to access and manage tools while working.",
            Application: "1)Workshops & Garages - Organizes wrenches, screwdrivers, pliers, and power tools for mechanicsand and Keeps tools easily accessible, reducing work time. 2) Factories & Manufacturing Units -  Stores machinery repair tools for quick maintenance and Enhances productivity by reducing tool search time. 3)Construction Sites - Moves hammers, drills, and measuring tools efficiently across sites."
        },
        {
            img: p7,
            title: "Storage Container",
            description: "A Storage Container is a durable, enclosed structure designed to store, transport, and protect goods, materials, or equipment. These containers come in various sizes, materials, and designs, depending on their intended use.",
            Application: "1)Warehousing & Logistics - Used to store raw materials, finished goods, and spare parts and Helps in safe and organized transportation of items. 2) Retail & E-Commerce - Used for inventory management and bulk storage. 3) Agriculture & Farming - Stores grains, fertilizers, pesticides, and farming tools."
        },
        {
            img: p8,
            title: "Wire Mesh Trolley",
            description: "A Wire Mesh Trolley is a wheeled cart with a metal mesh structure, designed for secure and ventilated storage of goods during transportation. It is commonly used in warehouses, retail, logistics, hospitals, and manufacturing units to move bulk items safely while keeping them visible.",
            Application: "1)Warehousing & Logistics - Used to transport heavy boxes, packages, and materials efficiently. 2) Retail & Supermarkets - Helps in stock replenishment by moving goods from storage to shelves and Used by staff to transport bulk items. 3) Manufacturing & Industrial Use - Used in factories to transport raw materials, machinery parts, and finished products."
        },
        {
            img: p9,
            title: "Pallets",
            description: "A pallet is a flat, sturdy platform used for stacking, storing, and transporting goods. It provides a stable base for handling products with forklifts, pallet jacks, or conveyors, making logistics and warehouse management more efficient.",
            Application: "1)Warehousing & Storage - Organizes goods efficiently for easy stacking and inventory management. 2) Retail & Supermarkets - Helps in stock replenishment by moving goods from storage to shelves and Used by staff to transport bulk items. 3) Manufacturing & Industrial Use - Supports raw materials and finished products for easy handling."

        },
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
            {/* Mobile Slider */}
            <div id="default-carousel" className="relative w-full sm:hidden">
                <div className="relative h-[300px] overflow-hidden rounded-lg">
                    {images.map((item, index) => (
                        <button
                            key={index}
                            className={`absolute w-full h-full transition-opacity duration-700 ease-in-out ${index === activeIndex ? "opacity-100" : "opacity-0 pointer-events-none"
                                }`}
                            onClick={() => navigate("/product-detail", { state: item })}
                        >
                            <img
                                src={item.img}
                                alt={item.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                                <div className="flex rounded-sm bg-gradient-to-r from-blue-600 to-teal-400 p-5 border-black cursor-pointer">
                                    <p className="text-black text-lg font-semibold">{item.title}</p>
                                </div>
                            </div>
                        </button>
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
                        className="relative group bg-gray-300 shadow-lg hover:border-2 border-black overflow-hidden transition-transform transform hover:scale-105"
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

export default ProductCard;
