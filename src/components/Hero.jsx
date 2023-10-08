import React, { useState } from 'react';
import bigShoes1 from "../assets/images/big-shoe1.png";
import bigShoes2 from "../assets/images/big-shoe2.png";
import bigShoes3 from "../assets/images/big-shoe3.png";

const Hero = () => {

  const [shoeImg, setShoeImg] = useState(bigShoes1)

  const handleShoeChange = (newShoeImg) => {
    setShoeImg(newShoeImg);
  };


  return (
    <>
      <div className='container grid lg:grid-cols-2 gap-3 place-content-center px-10 mt-10'>
        <div className='h-full'>
          <p className='font-sm text-orange-600 py-3'>Our New Collections</p>
          <p className='font-bold text-6xl'>The letest Arrival</p>
          <p className='font-bold text-6xl'><span className='text-orange-500 text-7xl'>Nike</span> Shoes</p>
          <p className='my-10 text-stone-500 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />  Numquam quos totam voluptatem pariatur</p>
          <div className='py-3'>
            <button className='flex w-autofill p-2 px-5 text-white border bg-orange-500 rounded-full gap-2 shadow-lg shadow-orange-500/80 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300'>Shop now <i className="bi bi-arrow-right-circle-fill"></i></button>
          </div>
          <div className='flex justify-between text-2xl font-bold my-6 px-3'>
            <div>1k+ <p className='text-gray-500 text-lg'>Brands</p></div>
            <div>500+ <p className='text-gray-500 text-lg'>Shoes</p></div>
            <div>250k+ <p className='text-gray-500 text-lg'>Customers</p></div>
          </div>
        </div>
        <div className='my-5 w-100'>
          <div className='container py-5 border border-orange-100 rounded-xl bg-blue-100'>
            <img className='w-[60%] mx-auto ' src={shoeImg} alt="shoes" />
          </div>
          <div className='flex justify-evenly my-3 mx-1 gap-2'>
            <div className='p-3 shadow  rounded-lg bg-slate-100 transition-transform transform hover:scale-105 '>
              <img onClick={() => handleShoeChange(bigShoes1)} className='w-32 ' src={bigShoes1} alt="shoes" />
            </div>
            <div className='p-3 shadow  rounded-lg bg-slate-100 transition-transform transform hover:scale-105'>
              <img onClick={() => handleShoeChange(bigShoes2)} className='w-32 ' src={bigShoes2} alt="shoes" />
            </div>
            <div className='p-3 shadow  rounded-lg bg-slate-100 transition-transform transform hover:scale-105'>
              <img onClick={() => handleShoeChange(bigShoes3)} className='w-32 ' src={bigShoes3} alt="shoes" />
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Hero
