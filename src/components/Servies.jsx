import React from 'react'

const Servies = () => {
  return (
    <div className='grid sm:grid-cols-3 p-10 gap-4 '>
      <div className='bg-white shadow rounded-lg text-black p-4'>
      <p className='text-center my-3'><i className="bi bi-truck bg-orange-500 p-3 text-2xl rounded-full text-white"></i></p>
        <h6 className='font-bold mt-4'>Free Shiping</h6>
        <p className='text-stone-500 text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className='bg-white shadow rounded-lg text-black p-3'>
      <p className='text-center my-3'><i className="bi bi-shield-check bg-orange-500 p-3 text-2xl rounded-full text-white"></i></p>
        <h6 className='font-bold mt-4'>Secure Payment</h6>
        <p className='text-stone-500 text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className='bg-white shadow rounded-lg p-3'>
        <p className='text-center my-3'><i className="bi bi-patch-question-fill bg-orange-500 p-3 text-2xl rounded-full text-white"></i></p>
        <h6 className='font-bold mt-4'>Love To Help You</h6>
        <p className='text-stone-500 text-sm mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </div>
  )
}

export default Servies
