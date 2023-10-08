import React from 'react';
import shoesImg1 from "../assets/images/shoe4.svg"
import shoesImg2 from "../assets/images/shoe5.svg"
import shoesImg3 from "../assets/images/shoe6.svg"
import shoesImg4 from "../assets/images/shoe7.svg"

const PopularProducts = (props) => {

  return (
    <div className=' px-10 py-2'>
      <h2 className='text-4xl font-bold text-orange-500'>Our Popular Products</h2>
      <p className='my-5 text-stone-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci amet hic eligendi. <br />Expedita ad, unde aliquam architecto corrupti, veniam distinctio mollitia eaque delectus dignissimos possimus.</p>
      <section className='grid grid-cols-2 lg:grid-cols-4 gap-4 '>
        <div className='mx-auto' >
          <img width={250} src={shoesImg1} alt="shoes" />
          <div className='p-2'>
            <p><i className="bi bi-star-fill text-orange-500"></i>(4/5)</p>
            <p className='font-bold'>Nike Air Jorden 01</p>
            <p className='text-orange-500'><i className="bi bi-currency-dollar"></i>477</p>
          </div>
        </div>
        <div className='mx-auto' >
          <img width={250} src={shoesImg2} alt="shoes" />
          <div className='p-2'>
            <p><i className="bi bi-star-fill text-orange-500"></i>(5/5)</p>
            <p className='font-bold'>Nike Air Jorden 01</p>
            <p className='text-orange-500'><i className="bi bi-currency-dollar"></i>477</p>
          </div>
        </div>
        <div className='mx-auto' >
          <img width={250} src={shoesImg3} alt="shoes" />
          <div className='p-2'>
            <p><i className="bi bi-star-fill text-orange-500"></i>(3/5)</p>
            <p className='font-bold'>Nike Air Jorden 01</p>
            <p className='text-orange-500'><i className="bi bi-currency-dollar"></i>477</p>
          </div>
        </div>
        <div className='mx-auto' >
          <img width={250} src={shoesImg4} alt="shoes" />
          <div className='p-2'>
            <p><i className="bi bi-star-fill text-orange-500"></i>(5/5)</p>
            <p className='font-bold'>Nike Air Jorden 01</p>
            <p className='text-orange-500'><i className="bi bi-currency-dollar"></i>477</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PopularProducts;
