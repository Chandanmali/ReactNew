import React from 'react'

function Navbar() {
  return (
    <div>
      <div className='flex justify-between border-b-[1px] border-black px-7 py-5'>
        <div>
            <h1 className='font-bold text-3xl'>LOGO</h1>
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
