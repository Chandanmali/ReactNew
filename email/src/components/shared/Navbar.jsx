import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosSearch } from 'react-icons/io';
import { BsQuestionCircle } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { RiGeminiFill } from "react-icons/ri";
import { TbGridDots } from "react-icons/tb";
import Avatar from 'react-avatar';

function Navbar() {
  return (
    <div>
      <div className='flex items-center justify-between mx-3 h-16 '>
        <div className='flex items-center gap-10'>
            <div className='flex items-center gap-2'>
                <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
                    <GiHamburgerMenu size={"20px"}/>
                </div>
                <img className='w-8' src="/gmail.png" alt="gmail-logo" />
                <h1 className='text-2xl text-gray-500 font-medium'>Gmail</h1>
            </div>
        </div>
        
        <div className='md:block hidden w-[50%] mr-20'>
            <div className='flex items-center bg-[#EAF1FB] px-2 py-3 rounded-full'>
                <IoIosSearch size = {"24px"} className= 'text-gray-700' />
                <input type="text"
                       placeholder='Search Mail'
                       className='rounded-full w-full bg-transparent outline-none px-1' />
            </div>
        </div>

        <div className='md:block hidden'>
            <div className='flex items-center gap-2'>
                <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
                    <BsQuestionCircle size={"24px"}/>
                </div>
                
                <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
                    <IoSettingsOutline size={"24px"}/>
                </div>
                
                <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
                    <RiGeminiFill size={"24px"} />
                </div>
                
                <div className='p-3 rounded-full hover:bg-gray-100 cursor-pointer'>
                    <TbGridDots size={"24px"} />
                </div>
                
                <div className='cursor-pointer'>
                    <Avatar src='/avtar.jpg' size={"40px"} round = {true}/>
                </div>
            </div>

        </div>
      </div>
    </div>
  )
}

export default Navbar
