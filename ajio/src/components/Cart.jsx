import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearItems, removeItems } from '../store/cartSlice'


function Cart() {

    const dispatch = useDispatch()

    const cartItems = useSelector((store) => store.cart.cartItems)
    console.log(cartItems)

    const clearAllCards = () => {
        dispatch(clearItems())
    }

    const handleRemove = () => {
      dispatch(removeItems())
    }

    return (
        <div>
            <div className='flex justify-between px-20 py-10'>
                <h1 className='font-bold text-xl border border-gray-400 rounded-lg px-8 py-3 shadow-2xl'>Cart Items - ({cartItems.length})</h1>

                <button onClick={clearAllCards} className='rounded-lg px-8 py-3 bg-black text-white font-bold shadow-2xl cursor-pointer'>Remove All</button>
            </div>
            <div className='mb-5'>
                {
                    cartItems.map((elem, index) => {
                        return (
                            <div>
                                <div className=' flex justify-center items-center gap-10  border-gray-400 w-[47rem] py-5 rounded-2xl shadow-xl mx-auto mb-7'>
                                    <img className=' w-[8rem] h-[7rem] rounded-2xl shadow-xl object-cover ' src={elem.galleryImagesList[1].galleryImages[4].value} alt="" />

                                    <div>
                                        <h1 className='text-gray-700 text-xl font-bold'>Brand : <span className='text-blue-500'>{elem.brandName}</span></h1>
                                        <h1 className='text-gray-500 text-lg font-semibold pt-1 '>{elem.productName}</h1>
                                        

                                        <h1 className='text-red-600 text-xl'><span className='text-green-600 text-xl font-bold pr-5'>₹{elem.winningSellerPrice.doubleValue} Only-</span>  ({elem.discount}%)OFF 

                                        <button onClick={handleRemove} className='text-white bg-gray-600 px-5  rounded-2xl text-sm py-1 font-semibold ml-20 cursor-pointer'>Remove</button></h1>

                                        
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Cart
