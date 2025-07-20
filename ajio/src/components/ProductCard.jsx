import React, { useEffect, useState } from 'react'

function ProductCard({ info, theme }) {

  return (
    <div>
      <div className='mt-10 '>

        {
          info.averageRating >= 4 ? <div className='absolute'>
            <span className='bg-gray-600 text-white px-5 py-2 rounded-2xl font-semibold'>Best seller</span>
          </div> : null
        }


        <div className={`border-[5px] border-gray-200 w-[16rem] h-[25rem] rounded-xl px-5 ${theme ? "bg-gray-100" : "bg-teal-100 text-white"}  shadow-2xl`}>
          <div className=' py-5 '>
            <img className=' w-[12rem] h-[13rem] rounded-2xl mx-auto shadow-xl object-cover ' src={info.imageURL} alt="" />
          </div>
          <div className=' text-center'>
            <h1 className='font-bold text-lg text-gray-900'>{info.brandname}</h1>
            <h1 className='text-zinc-600'>{info.productname}</h1>
            <h1 className='font-semibold text-green-700'>{info.price.sellingPrice.commaFormattedValue
            }</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
