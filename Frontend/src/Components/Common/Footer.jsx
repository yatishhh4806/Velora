import React from 'react'
import { FaInstagram, FaMeta } from 'react-icons/fa6'
import { RiTwitterXLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { FiPhoneCall } from 'react-icons/fi'

function Footer() {
  return (
    <footer className='border-t py-12'>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 lg:p-0'>

            {/* Left Side Footer */}
            <div>
                <h3 className='text-lg text-gray-800 mb-4'>Newsletter</h3>
                <p className='text-gray-500 mb-4'>Be the first to hear about new products, exclusive events and online offers!</p>
                <p className='font-medium text-sm text-gray-600 mb-6'>Sign Up and get 10% discount on your first order.</p>

                {/* Newsletter Form */}
                <form className='flex '>
                    <input type='email' placeholder='Enter your E-mail' className='p-3 w-full text-sm border-t border-l 
                           border-b border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all required'>
                    </input>
                    <button type='submit' className='bg-black text-white px-4 py-3 text-sm rounded-r-md hover:bg-gray-800 transition-all'>
                        Subscirbe
                    </button>
                </form>
            </div>

            {/* Mid-Left Side Footer */}
            <div>
                <h3 className='text-lg text-gray-800 mb-4'>Shop</h3>
                <ul className='space-y-2 text-gray-600 '>
                    <li><Link to = '#' className='hover:text-gray-500 transition-colors'>Men's Top-wear</Link></li>
                    <li><Link to = '#' className='hover:text-gray-500 transition-colors'>Men's Bottom-wear</Link></li>
                    <li><Link to = '#' className='hover:text-gray-500 transition-colors'>Women's Top-wear</Link></li>
                    <li><Link to = '#' className='hover:text-gray-500 transition-colors'>Women's Bottom-wear</Link></li>
              
                </ul>
            </div>


            {/* Mid-Right Side Footer */}
            <div>
                <h3 className='text-lg text-gray-800 mb-4'>Support</h3>
                <ul className='space-y-2 text-gray-600 '>
                    <li><Link to = '#' className='hover:text-gray-500 transition-colors'>Contact Us</Link></li>
                    <li><Link to = '#' className='hover:text-gray-500 transition-colors'>About Us</Link></li>
                    <li><Link to = '#' className='hover:text-gray-500 transition-colors'>FAQs</Link></li>
                    <li><Link to = '#' className='hover:text-gray-500 transition-colors'>Features</Link></li>
              
                </ul>
            </div>

            {/* Right Side Footer */}
            <div>
                <h3 className='text-lg text-gray-800 mb-4'>Follow Us</h3>
                <div className='flex items-center space-x-4 mb-6'>
                    <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer' className='hover:text-gray-500'><FaMeta className='h-5 w-5'></FaMeta></a>
                    <a href='https://www.instagram.com' target='_blank' rel='noopener noreferrer' className='hover:text-gray-500'><FaInstagram className='h-5 w-5'></FaInstagram></a>
                    <a href='https://www.x.com' target='_blank' rel='noopener noreferrer' className='hover:text-gray-500'><RiTwitterXLine className='h-5 w-5'></RiTwitterXLine></a>
                </div>
                <p className='text-gray-500'>Call Us</p>
                <p><FiPhoneCall className='inline-block mr-2'></FiPhoneCall>+1(484)-848-000</p>                
            </div>

        </div>
        {/* Footer Bottom */}
        <div className='container mx-auto mt-12 px-4 lg:px-0 border-t border-gray-200 pt-6'>
            <p className='text-gray-500 text-sm tracking-tighter text-center'>© {new Date().getFullYear()} Velora. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer