import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa6'
import AdminSidebar from './AdminSidebar'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  const [isSidebarOpen, setisSidebarOpen] = useState(false)
  function toggleSidebar(){
    setisSidebarOpen(!isSidebarOpen)
  } 
  return (
    <div className='min-h-screen flex flex-col md:flex-row relative'>

      {/* Mobile Toggle Button */}
      <div className="flex md:hidden p-4 bg-gray-900 text-white z-20">
        <button onClick={toggleSidebar}>
          <FaBars size={24}></FaBars>
        </button>
        <h1 className="ml-4 text-xl font-medium">Admin Dashboard</h1>
      </div>

      {/* Overlay for Mobile Sidebar */}
      {isSidebarOpen && (
        <div className="fixed inset-0 z-20 bg-black opacity-50 md:hidden" onClick={toggleSidebar}></div>
      )}

      {/* Sidebar */}
      <div className={`bg-gray-900 w-64 min-h-screen text-white absolute md:relative transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 md:translate-x-0 md:static md:block z-20`}>
        <AdminSidebar></AdminSidebar>
      </div>

      {/* Main Content */}
      <div className="grow overflow-auto">
        <Outlet></Outlet>
      </div>
    </div>
  )
}

export default AdminLayout