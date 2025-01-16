import React, { useState } from "react";
import img1 from "../../assets/b1.jpg";
import img2 from "../../assets/b2.jpg";
import img3 from "../../assets/b3.jpg";
import img4 from "../../assets/b4.png";

function BusinessChallenges() {
  const [selectedImage, setSelectedImage] = useState(img1); // Default image

  const handleImageChange = (img) => {
    setSelectedImage(img); // Update the displayed image
  };

  return (
    <section className="py-12 px-4 md:px-8 lg:px-16">
      {/* Header Section */}
      <div className="w-full h-[2px] bg-black my-4"></div>

      <div className="flex flex-col items-center text-center">
        <p className="text-orange-500 font-bold text-lg uppercase mb-2">
          Process
        </p>
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Business Challenges
        </h1>
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 bg-gray-50">
        {/* Left Content */}
        <div className="space-y-4 w-full lg:w-1/2">
          <div
            className="border border-orange-500 rounded-md p-4 hover:bg-blue-50 transition cursor-pointer"
            onClick={() => handleImageChange(img1)} // Click to display img1
          >
            <h3 className="text-sm md:text-lg font-semibold text-gray-800">
              Develop more competitive products and solutions
            </h3>
          </div>
          <div
            className="border border-orange-500 rounded-md p-4 hover:bg-blue-50 transition cursor-pointer"
            onClick={() => handleImageChange(img2)} // Click to display img2
          >
            <h3 className="text-sm md:text-lg font-semibold text-gray-800">
              Optimize product development costs
            </h3>
          </div>
          <div
            className="border border-orange-500 rounded-md p-4 hover:bg-blue-50 transition cursor-pointer"
            onClick={() => handleImageChange(img3)} // Click to display img3
          >
            <h3 className="text-sm md:text-lg font-semibold text-gray-800">
              Improve customer experience
            </h3>
          </div>
          <div
            className="border border-orange-500 rounded-md p-4 hover:bg-blue-50 transition cursor-pointer"
            onClick={() => handleImageChange(img4)} // Click to display img4
          >
            <h3 className="text-sm md:text-lg font-semibold text-gray-800">
              Enable end-to-end visibility across the product lifecycle
            </h3>
          </div>
        </div>

        {/* Right Content: Image */}
        <div className="w-full lg:w-1/2">
          <img
            src={selectedImage}
            alt="Business Challenges"
            className="object-cover w-full h-full max-h-[400px] md:max-h-[500px] lg:max-h-[600px] rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default BusinessChallenges;
