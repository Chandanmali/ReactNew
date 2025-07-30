import React from 'react'
import {LuPencil} from 'react-icons/lu'

function Sidebar() {
  return (
    <div className='w-[15%]'>
        <div className='p-3'>
            <button className='flex items-center gap-2 p-4 rounded-2xl hover:shadow-md bg-[#C2E7FF]'>
                <LuPencil size={'24px'} />
                Compose
            </button>
        </div>

        <div className='text-gray-500'>
            <div className='flex items-center gap-4 pl-6 py-1 rounded-full hover:cursor-pointer my-2'>
                <LuPencil size={'24px'} />
                <p>Test</p>
            </div>

        </div>
      
    </div>
  )
}

export default Sidebar
