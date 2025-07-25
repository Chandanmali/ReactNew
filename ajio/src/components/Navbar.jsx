import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import ThemeContext from '../utils/themeContext'
import { useContext } from 'react'
import { useSelector } from 'react-redux'

function Navbar() {

  const cartItems = useSelector((store) => store.cart.cartItems)
  console.log(cartItems)
  const ref = useRef(cartItems)
  console.log(ref)

  const { theme, toggle, filterData } = useContext(ThemeContext)

  const [search, setSearch] = useState("")

  const handleSearch = (e) => {
    const value = e.target.value
    setSearch(value)
    filterData(value)
  }

  

  return (
    <div className={`sticky top-0 z-50 shadow-lg ${!theme && "border-b-2 border-gray-400"}`}>
      <div className='flex justify-between  px-7 py-4 shadow-lg items-center'>
        <div>
            <Link to={'/'}><h1 className='font-bold text-3xl'>LOGO</h1></Link>
        </div>

        <div>
          <input className='border border-gray-300 px-10 py-2 w-[25rem] rounded-s-2xl shadow-2xl text-start' 
          type="text" 
          placeholder='Enter your love Brand'
          value={search}
          onChange={handleSearch}
          />
          <button onClick={handleSearch} className='border border-gray-300 shadow-2xl bg-zinc-400 px-8 py-2 rounded-e-2xl font-bold cursor-pointer'><i class="fas fa-search"></i></button>
        </div>

        <div>
            <ul className='flex font-semibold text-xl gap-10'>
                <Link to={'/men'}><li>MEN</li></Link>
                <Link to={'/women'}><li>WOMEN</li></Link>
                <Link to= {'/kids'}>KIDS</Link>
                <Link to= {'/profile'}>PROFILE</Link>
                <Link to={'/cart'} className='text-3xl '>
                <i class="fas fa-cart-plus" >{cartItems.length >= 1 &&
                  <span className='bg-gray-400 rounded-2xl px-2 text-lg py-1 relative bottom-5 right-1'>{cartItems.length}</span>}</i></Link>

                <button onClick={toggle} className='bg-zinc-400 px-4 py-2 rounded-4xl items-center'>{theme ? <i class="fa-solid fa-moon"></i> : <i class="fa-solid fa-sun"></i> }</button>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
