import React, { useState } from 'react'

function AccordinoM({ tag, open, setOpen}) {

    // const [open, setOpen] = useState(false)

    const expand = () => {
        setOpen()
    }

    return (
        <div>
            <div className='my-1 shadow-md border border-gray-200 px-4 py-2 w-64 mb-6 rounded-lg'>
                <div className='flex justify-between'>
                    <h1 className='font-bold text-xl font-serif'>{tag}</h1>
                    <button onClick={expand} className='bg-black text-white px-2 rounded-md font-serif'>Show</button>
                </div>

                <div>

                    {  
                       open && <ul className='ml-2 mt-2 font-serif'>
                            <li>Brand</li>
                            <li>Color</li>
                            <li>Discount</li>
                            <li>Price</li>
                        </ul>
                        
                    }

                </div>

            </div>

            
        </div>
    )
}

export default AccordinoM
