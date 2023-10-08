import React from 'react'
import brandShoeImg from "../assets/images/shoe8.svg"


const SuperQuality = () => {
  return (
    <div className='grid sm:grid-cols-2 p-10 gap-2'>
      <div className='py-3 lg:my-32'>
        <h1 className='text-2xl font-bold'>We Provides You <span className='text-orange-500'>Super</span> Quality shoes</h1>
        <p className='text-stone-500 text-sm my-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A saepe id, accusamus eveniet eum in ducimus natus quisquam vero, blanditiis obcaecati cupiditate adipisci incidunt fugiat minus perferendis quam consectetur illum.</p>
      </div>
      <div>
        <img src={brandShoeImg} alt="Shoe" />
      </div>
    </div>
  )
}

export default SuperQuality
