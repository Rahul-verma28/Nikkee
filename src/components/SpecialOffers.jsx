import React from 'react'
import offerImg from "../assets/images/offer.svg"


const SpecialOffers = () => {
  return (
    <div className='grid sm:grid-cols-2 p-10 gap-2'>
      <div>
        <img src={offerImg} alt="Shoe" />
      </div>
      <div className='py-2 lg:my-16'>
        <h1 className='text-2xl font-bold text-orange-500'>Special <span className='text-black'>Offer</span></h1>
        <p className='text-stone-500 text-sm my-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A saepe id, accusamus eveniet eum in ducimus natus quisquam vero, blanditiis obcaecati cupiditate adipisci incidunt fugiat minus perferendis quam consectetur illum.</p>
        <p className='text-stone-500 text-sm my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, sit obcaecati! Nisi nihil amet perspiciatis tenetur rem quo.</p>
        <div className='flex'>
          <button className='flex w-autofill p-2 px-3 m-2 text-white border bg-orange-500 rounded-full gap-2 shadow shadow-orange-500/80 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300'>Shop now </button>
          <button className='flex w-autofill p-2 px-3 m-2 text-black border rounded-full gap-2 border-orange-500 bg-transparent shadow shadow-black transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 duration-300'>Learn more </button>
        </div>
      </div>

    </div>
  )
}

export default SpecialOffers
