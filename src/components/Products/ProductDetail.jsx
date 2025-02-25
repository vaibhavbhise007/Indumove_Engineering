import { Button } from "@mui/material";
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const ProductDetail = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const product = location.state || {};

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleBack = () => {
        sessionStorage.setItem("productDetailScroll", window.scrollY);
        navigate(-1);
    };

    const handleWhatsAppChat = () => {
        const whatsappNumber = "919096352312";
        const message = encodeURIComponent("Hello! I need assistance.");
        window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank", "noopener,noreferrer");
    };

    return (
        <div className="container mx-auto pt-36 p-5">
            <button className="mb-5 px-4 py-2 bg-gray-300 rounded" onClick={handleBack}>
                ← Back
            </button>

            {/* Responsive Layout */}
            <div className="flex flex-col-reverse md:flex-row gap-10">
                {/* Product Details - Appears First on Mobile */}
                <div className="order-1 md:order-2">
                    <h1 className="text-2xl text-[#ffd838] fira-sans-condensed-semibold flex justify-center mb-4 underline">
                        About Product
                    </h1>
                    <h1 className="text-2xl fira-sans-condensed-semibold ">{product.title || "Unknown Product"}</h1>
                    <p className="text-lg fira-sans-condensed-thin mb-2">{product.description || "No description available."}</p>
                    <h1 className="text-2xl fira-sans-condensed-semibold ">
                        Applications and Uses of <span>{product.title || "this product"}</span>
                    </h1>
                    <p className="text-lg fira-sans-condensed-thin mb-2">
                        {product.Application
                            ? product.Application.split('.').map((sentence, index) =>
                                sentence.trim() ? <span key={index} className="block">{sentence}.</span> : null
                            )
                            : "No application details available."}
                    </p>

                    {/* Buttons */}
                    <div className="flex gap-5">
                        <Button
                            onClick={() => window.location.href = "tel:+91 9096352312"}
                            sx={{
                                bgcolor: "#53aaf3",
                                "&:hover": { bgcolor: "#499cd3" },
                                color: "black",
                                padding: "12px 24px",
                                fontSize: "16px",
                                borderRadius: "8px",
                                display: "flex",
                                alignItems: "center",
                                gap: "8px",
                            }}
                        >
                            <FaPhoneAlt /> Contact Us
                        </Button>

                        <Button
                            sx={{
                                bgcolor: "green",
                                "&:hover": { bgcolor: "#32CD32" },
                                color: "white",
                                padding: "12px 24px",
                                fontSize: "16px",
                                borderRadius: "8px",
                                display: "flex",
                                alignItems: "center",
                                gap: "8px",
                            }}
                            onClick={handleWhatsAppChat}
                        >
                            <FaWhatsapp /> Chat with Us
                        </Button>
                    </div>
                </div>

                {/* Image - Appears Below on Mobile */}
                <div className="order-2 md:order-1">
                    <img
                        src={product.img || "/placeholder.jpg"}
                        alt={product.title || "Product"}
                        className="w-full h-78 object-cover rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
