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
            <div className='mt-5 md:mt-10'>
                <form className='w-1/2'>
                    <div className='flex flex-col mb-5'>
                        <label className='uppercase font-semibold'>Caption of the slide</label>
                        <input type='text' className='bg-gray-300 p-2 focus:border-primary focus:bg-gray-400 rounded-lg' name='carousel_caption'></input>
                    </div>
                    <div className='flex mb-5'>
                        <label className='uppercase font-semibold mr-5'>Slide Status</label>
                        <input type='checkbox' className='h-5 w-5 mr-5' name='carousel_isActive' checked></input>
                        <p>Active</p>
                    </div>
                    
                </form>
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