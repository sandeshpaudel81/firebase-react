import React from 'react'
import { Link } from 'react-router-dom'

const Project = (props) => {
  return (
    <div className='col-span-2 md:col-span-1'>
        <Link to="#">
        <div className='grid grid-cols-5 bg-slate-300 shadow-sm shadow-white hover:shadow-md hover:shadow-white hover:scale-[1.02] duration-500 rounded-lg overflow-hidden group'>
            <div className='col-span-5 md:col-span-2 overflow-hidden'>
                <img src={props.project.thumbnailImageUrl} alt={props.project.title} className="w-full h-[250px] md:h-[200px] object-cover object-center"/>
            </div>
            <div className='col-span-5 md:col-span-3 relative p-5'>
                <div className='w-5 h-5 rotate-45 bg-slate-300 absolute left-1/2 -top-2 md:top-1/2 md:-left-2'></div>
                <h2 className='font-bold text-xl group-hover:text-primaryD'>{props.project.title}</h2>
                <p className='h-24 overflow-hidden'>{props.project.objectives}</p>
                <button className='bg-primary text-white px-5 py-2 rounded-lg mt-5 group-hover:bg-primaryDark'>See More...</button>
            </div>
        </div>
        </Link>
    </div>
  )
}

export default Project