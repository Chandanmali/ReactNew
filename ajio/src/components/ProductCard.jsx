import React, { useEffect, useState } from 'react'

function ProductCard({info}) {

  return (
    <div>
        <div className='mt-10'>
            <div className='border border-black w-[15rem] h-[20rem] rounded-xl px-5 bg-gray-100 shadow-2xl'>
              <div className=' py-5 '>
                <img className=' w-[10rem] h-35 rounded-2xl mx-auto shadow-xl' src={info.imageURL} alt="" />
              </div>
              <div className=' text-center'>
                <h1 className='font-bold text-lg text-gray-900'>{info.brandname}</h1>
                <h1 className='text-zinc-600'>{info.productname}</h1>
                <h1 className='font-semibold text-green-700'>{info.price.mrpPrice.commaFormattedValue
}</h1>
              </div>
            </div>
        </div>
    </div>
  )
}

export default ProductCard
