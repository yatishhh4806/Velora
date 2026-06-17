import React from 'react'
import { Link, Links } from 'react-router-dom'
import { AiOutlineUser } from "react-icons/ai";
import { HiMiniXMark, HiShoppingBag } from "react-icons/hi2";
import { HiOutlineBars3 } from "react-icons/hi2";
import Searchbar from './Searchbar';
import CartDrawer from '../Layout/CartDrawer';
import { useState } from 'react';

const Navbar = () => {

    const [drawerOpen, setdrawerOpen] = useState(false)
    const [navDrawerOpen, setnavDrawerOpen] = useState(false)

    function toggleNavDrawer(){
        setnavDrawerOpen(!navDrawerOpen)
    }

    function toggleCartDrawer(){
        setdrawerOpen(!drawerOpen)
    }
  return (
    <>
        <nav className='container mx-auto flex items-center justify-between  py-4 px-6'>

            {/* {Left - Logo} */}
            <div>
                <Link to='/' className='text-2xl font-medium'>Velora</Link>
            </div>

            {/* {Center - Nav Links} */}
            <div className='hidden md:flex space-x-6'>
                <Link to='/collections/all' className= 'text-gray-700 hover:text-black text-sm font-medium uppercase'>
                    Men
                </Link>
                <Link to='#' className= 'text-gray-700 hover:text-black text-sm font-medium uppercase'>
                    Women
                </Link>
                <Link to='#' className= 'text-gray-700 hover:text-black text-sm font-medium uppercase'>
                    Top Were
                </Link>
                <Link to='#' className= 'text-gray-700 hover:text-black text-sm font-medium uppercase'>
                    Bottom Wear
                </Link>
            </div>

            {/* {Right - Icon} */}
            <div className='flex items-center space-x-4'>
                <Link to='/profile' className='hover:text-black'>
                    <AiOutlineUser className='h-6 w-6 text-gray-700'/>
                </Link>
                <button onClick= {toggleCartDrawer} className='relative hover:text-black'>
                    <HiShoppingBag className='h-6 w-6 text-gray-700'/>
                    <span className='absolute -top-1 bg-[#ea2e0e] text-white text-xs rounded-full px-1 py-0.2'>4</span>
                </button>

                {/* {Search} */}
                <div className='overflow-hidden'>
                    <Searchbar></Searchbar>
                </div>

                <button onClick={toggleNavDrawer} className='md:hidden'>
                    <HiOutlineBars3 className='h-6 w-6 text-gray-700'/>
                </button>
            </div>
        </nav>
        <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer}></CartDrawer>

        {/* Mobile Navigation */}
        <div className={`fixed top-0 left-0 w-3/4 sm:w-1/3 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${navDrawerOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className='flex justify-end p-4'>
                <button onClick={toggleNavDrawer}>
                    <HiMiniXMark className='h-6 w-6 text-gray-600'></HiMiniXMark>
                </button>
            </div>
            <div className='p-4'>
                <h2 className='text-xl font-semibold mb-4'>Menu</h2>
                <nav className='space-y-4'>
                    <Link to='#' onClick={toggleNavDrawer} className='block text-gray-600 hover:text-black'>
                        Men
                    </Link>
                    <Link to='#' onClick={toggleNavDrawer} className='block text-gray-600 hover:text-black'>
                        Women
                    </Link>
                    <Link to='#' onClick={toggleNavDrawer} className='block text-gray-600 hover:text-black'>
                        Top Wear
                    </Link>
                    <Link to='#' onClick={toggleNavDrawer} className='block text-gray-600 hover:text-black'>
                        Bottom Wear
                    </Link>
                </nav>
            </div>
        </div>

    </>
  )
}

export default Navbar