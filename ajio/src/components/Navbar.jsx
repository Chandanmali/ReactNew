import React, { useState } from 'react'

function Navbar() {

  const [search, setSearch] = useState("")
  return (
    <div className="sticky top-0 z-50 bg-white shadow-lg mb-5">
      <div className='flex justify-between border-[3px] border-gray-100 px-7 py-4 shadow-lg sticky top-0 items-center'>
        <div>
            <h1 className='font-bold text-3xl'>LOGO</h1>
        </div>

        <div>
          <input className='border border-gray-300 px-10 py-2 w-[25rem] rounded-s-2xl shadow-2xl text-start' 
          type="text" 
          placeholder='Enter your love Brand'
          value={search}
          onChange={(e) => {setSearch(e.target.value)}}
          />
          <button className='border border-gray-300 shadow-2xl bg-zinc-400 px-8 py-2 rounded-e-2xl font-bold cursor-pointer'><i class="fas fa-search"></i></button>
        </div>

        <div>
            <ul className='flex font-semibold text-xl gap-10'>
                <li>MEN</li>
                <li>WOMEN</li>
                <li>KID</li>
                <li>CART</li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
