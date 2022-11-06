import React from 'react'
import { Link } from 'react-router-dom'
import { FaChevronLeft } from 'react-icons/fa'

const AddEditCarousel = () => {
  return (
    <div>
        <div className='container mx-auto px-5 py-10 md:py-20'>
            <div className='border-l-8 border-primary px-5'>
                <h2 className='text-primary font-bold text-3xl'>Add <span className='text-primaryDark'>Slides</span></h2>
                <p className='uppercase text-gray-600 text-sm font-medium mt-2'>Appear on homescreen</p>
            </div>
            <div className='grid grid-cols-2 gap-10 mt-5 md:mt-10'>
            </div>
            <div className='flex justify-start mt-5'>
                <Link to="#" className='uppercase text-gray-600 hover:text-black'>
                    <p className='flex items-center font-medium'><FaChevronLeft className='mr-3'/>All Slides</p>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default AddEditCarousel