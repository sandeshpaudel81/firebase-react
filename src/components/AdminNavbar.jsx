import React from 'react'
import { Link } from 'react-router-dom'

const AdminNavbar = () => {
  return (
    <div className='grid grid-cols-2 px-5 border-b-4 border-red-400'>
        <div className='col-span-2 md:col-span-1'>
            <h2 className='text-primary font-bold text-3xl'>Admin</h2>
        </div>
        <div className='col-span-2 md:col-span-1 flex justify-center md:justify-end'>
            <Link to='/admin'><h2 className='text-gray-500 hover:text-black font-semibold text-xl'>Dashboard</h2></Link>
            <Link to='/admin/logout'><h2 className='text-gray-500 hover:text-black font-semibold text-xl ml-8'>Logout</h2></Link>
            <Link to='/admin/change-password'><h2 className='text-gray-500 hover:text-black font-semibold text-xl ml-8'>Change Password</h2></Link>
        </div>
    </div>
  )
}

export default AdminNavbar