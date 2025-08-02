import React from 'react'
import { MdCropSquare } from 'react-icons/md'
import { RiStarLine } from 'react-icons/ri'

function Message() {
  return (
    <div className='group flex items-start justify-between border-b border-gray-300 px-4 py-3 text-sm hover:cursor-pointer hover:shadow-md '>
        <div className='flex items-center gap-3 '>
            <div className='flex-none text-gray-300 group-hover:text-gray-500'>
                <MdCropSquare className='w-5 h-5 ' />
            </div>
            <div className='flex-none text-gray-300 group-hover:text-gray-500'>
                <RiStarLine className='w-5 h-5 ' />
            </div>
        </div>

        <div className='flex-1 ml-4'>
            <p className='text-gray-600 truncate inline-block max-w-full'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium inventore eum quidem, itaque, corrupti non repudiandae assumenda cupiditate .</p>
        </div>

        <div className='flex-none text-gray-400 text-sm'>
            Time

        </div>
     
    </div>
  )
}

export default Message
