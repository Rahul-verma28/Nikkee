import React from 'react'
import customerImg1 from "../assets/images/customer1.jpeg"
import customerImg2 from "../assets/images/customer2.svg"

const CustomerReviews = () => {
  return (
    <div className='p-10 text-center'>
      <h1 className='text-2xl font-bold my-3'>What Your <span className='text-orange-500'>Customers</span> Say?</h1>
      <p className='text-stone-500 text-sm mb-10'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br/> A saepe id, accusamus eveniet eum in ducimus natus quisquam vero, blanditiis obcaecati cupiditate.</p>
      <div className='grid md:grid-cols-2 gap-3 place-content-center my-10'>
        <div className='mx-auto'>
          <img className='rounded-full mx-auto' src={customerImg1} alt="customerImg1" width={130}/>
          <p>⭐ (4.5)</p>
          <p className='font-bold mt-2'>Rahul Verma</p>
          <p className='text-stone-500 text-sm '>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className='mx-auto'>
          <img className='mx-auto' src={customerImg2} alt="customerImg2 " width={130}/>
          <p>⭐ (4.9)</p>
          <p className='font-bold mt-2'>Precilla deniyal</p>
          <p className='text-stone-500 text-sm '>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </div>
  )
}

export default CustomerReviews
