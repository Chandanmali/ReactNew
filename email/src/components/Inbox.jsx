import React, { useState } from 'react'
import { FaCaretDown, FaUserFriends } from 'react-icons/fa'
import { GoTag } from 'react-icons/go'
import { IoMdMore, IoMdRefresh } from 'react-icons/io'
import { MdCropSquare, MdInbox, MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import { RiInformationLine } from "react-icons/ri";
import Messages from './Messages'

const mailType = [
  {
    icon: <MdInbox size={'22px'} />,
    text: "Primary"
  },
  
  {
    icon: <GoTag size={'22px'} />,
    text: "Promotion"
  },
  
  {
    icon: <FaUserFriends size={'22px'}/>,
    text: "Social"
  },

  {
    icon: <RiInformationLine size={'22px'}/>,
    text: "Updates"
  }
]

function Inbox() {

  const [selectedMailBorder, setSelectedMailBorder] = useState(0)

  return (
    <div className='flex-1 bg-white rounded-xl mx-5'>
      <div className=' flex items-center justify-between px-4'>
        <div className='flex items-center gap-2 text-gray-700 py-2'>
          <div className='flex items-center gap-1'>
            <MdCropSquare size={'22px'} />
            <FaCaretDown size={'15px'} />
          </div>

          <div className='p-2 rounded-full hover:bg-gray-100 cursor-pointer'>
            <IoMdRefresh size={'22px'} />
          </div>

          <div className='p-2 rounded-full hover:bg-gray-100 cursor-pointer'>
            <IoMdMore size={'22px'} />
          </div>

        </div>

        <div className='flex items-center gap-5'>
          <p className='text-sm text-gray-500'>1-50 of 1000</p>
          <button className='hover:rounded-full hover:bg-gray-100'><MdKeyboardArrowLeft size={'24px'}/> </button>
          <button className='hover:rounded-full hover:bg-gray-100'><MdKeyboardArrowRight size={'24px'}/> </button>

        </div>


      </div>
      <div className='h-[90vh] overflow-y-auto'>
        <div className='flex items-center gap-1'>
          {
            mailType.map((elem, index) => {
              return(
                <button key={index} 
                className={`${selectedMailBorder === index ? "border-b-4 border-b-blue-600" : "border-b-4 border-b-transparent"} flex items-center gap-5 p-4 w-full hover:bg-gray-100`}
                onClick={() => (setSelectedMailBorder(index))}
                >
                  {elem.icon}
                  <span>{elem.text}</span>
                </button>
              )
            })
          }

        </div>

       <Messages />
      </div>

    </div>
  )
}

export default Inbox
