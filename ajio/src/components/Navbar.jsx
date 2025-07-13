import React, { useState } from 'react'

function Navbar({theme, toggle}) {

  const [search, setSearch] = useState("")
  

  return (
    <div className="sticky top-0 z-50 shadow-lg bg-white">
      <div className='flex justify-between border-[3px] border-gray-100 px-7 py-4 shadow-lg items-center'>
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
                <button onClick={toggle} className='bg-zinc-400 px-4 py-2 rounded-4xl items-center'>{theme ? <i class="fa-solid fa-moon"></i> : <i class="fa-solid fa-sun"></i> }</button>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
