import React from 'react'
import { FaMeta, FaInstagram } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";

const Topbar = () => {
  return (
    <div className='bg-[#ea2e0e] text-white'> 
        <div className='flex container mx-auto justify-between items-center py-3'>

            {/* {Socials} */}
            <div className='hidden md:flex items-center space-x-4'>
                <a href='#' className='hover:text-gray-300'>
                    <FaMeta className='h-6 w-6'/>
                </a>
                <a href='#' className='hover:text-gray-300'>
                    <FaInstagram className='h-5 w-5'/>
                </a>
                <a href='#' className='hover:text-gray-300'>
                    <RiTwitterXLine className='h-5 w-5'/>
                </a>
            </div>

            {/* {Center Text} */}
            <div className='text-sm text-center grow'>
                <span>We Ship Worldwide - Fast and Reliable Shopping!</span>
            </div>

            {/* {Contact} */}
            <div className='text-sm hidden md:block'>
                <a href='tel: +1234567890' className='hover:text-gray-300'>
                    +1 (484)-848-0000
                </a>
            </div>
        </div>
    </div>
  )
}

export default Topbar