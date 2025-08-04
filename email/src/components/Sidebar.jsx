import React, { useContext, useState } from 'react'
import { LuPencil } from 'react-icons/lu'
import { RiInboxFill } from "react-icons/ri";
import { FaRegStar } from "react-icons/fa6";
import { MdOutlineDrafts, MdOutlineKeyboardArrowDown, MdOutlineWatchLater } from "react-icons/md";
import { TbSend, TbSend2 } from 'react-icons/tb';
import { MessageContext } from '../utils/MessageContext';

function Sidebar() {

    const sidebarItems = [
        {
            icon: <RiInboxFill size={'20px'}/>,
            name: "Inbox"
        },

        {
            icon: <FaRegStar size={'20px'}/>,
            name: "Starred"
        },

        {
            icon: <MdOutlineWatchLater size={'20px'}/>,
            name: "Snoozed"
        },

        {
            icon: <TbSend2 size={'20px'}/>,
            name: "Sent"
        },

        {
            icon: <MdOutlineDrafts size={'20px'}/>,
            name: "Drafts"
        },

        {
            icon: <MdOutlineKeyboardArrowDown size={'20px'}/>,
            name: "More"
        },
    ]

    //const [open, setOpen] = useState(false)

    const {open, setOpen} = useContext(MessageContext)

    return (
        <div className='w-[15%]'>
            <div className='p-3'>
                <button onClick={() => setOpen(true)} className='flex items-center gap-2 p-4 rounded-2xl hover:shadow-xl bg-[#C2E7FF] font-semibold hover:border-gray-900 cursor-pointer'>
                    <LuPencil size={'24px'} />
                    Compose
                </button>
            </div>

            <div className='text-gray-700'>

                {
                    sidebarItems.map((elem, index) => {
                        return (
                            <div key={index} className='flex items-center gap-4 pl-6 py-1 rounded-full hover:bg-gray-200 hover:cursor-pointer my-2 font-semibold '>
                                {elem.icon}
                                <p>{elem.name}</p>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Sidebar
