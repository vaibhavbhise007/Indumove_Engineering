import React from 'react'
import ProductCard from '../../components/ui/ProductCard';
import { useDispatch, useSelector } from "react-redux";

function OurProduct() {

 
  return (
    <section id="products"  className='py-10 bg-white md:px-8 lg:px-16'>

      <div className='w-full h-[2px] bg-black '></div>
      <div className='px-4'>
        <p className='text-lg font-bold text-[#ffd838] pt-6 mb-2 '>LATEST PROJECT</p>
        <h1 className='text-4xl font-bold text-black'>Our Products</h1>
        
        <div className='pt-8'>
          <ProductCard />
        </div>
      </div>

    </section>
  )
}

export default OurProduct
