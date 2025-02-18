import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ProductDetail = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const product = location.state || {};

    return (
        <div className="container mx-auto p-5">
            <button className="mb-5 px-4 py-2 bg-gray-300 rounded" onClick={() => navigate(-1)}>
                ← Back
            </button>
            <div className="grid md:grid-cols-2 gap-10">
                <img src={product.img} alt={product.title} className="w-full h-78 object-cover rounded-lg shadow-lg" />
                <div>
                    <h1 className="text-3xl font-bold">{product.title}</h1>
                    <p className="mt-4 text-lg">{product.description}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
