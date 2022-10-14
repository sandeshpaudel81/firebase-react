import React from 'react'
import car1 from '../assets/car1.jpg'
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa'

const Carousel = () => {
    const slides = [
        {"image": car1, "caption": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Etiam elementum lorem ac felis auctor aliquet et commodo augue. Maecenas ut urna tempus, sodales odio non, pulvinar sem. Donec vitae tellus vel dolor mollis tincidunt sed id eros. Aenean sit amet tristique augue, at ornare dolor."},
        {"image": car1, "caption": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Etiam elementum lorem ac felis auctor aliquet et commodo augue. Maecenas ut urna tempus, sodales odio non, pulvinar sem. Donec vitae tellus vel dolor mollis tincidunt sed id eros. Aenean sit amet tristique augue, at ornare dolor."}
    ]
    return (
        <div className='carouselBg py-5 md:py-20 relative z-10'>
            <div className='container mx-auto relative'>
                <button className='absolute p-2 group left-0 md:inset-y-0'><FaAngleLeft className='text-white group-hover:text-primary text-5xl'/></button>
                <button className='absolute p-2 group md:inset-y-0 right-0'><FaAngleRight className='text-white group-hover:text-primary text-5xl'/></button>
                {slides.map((slide) => (
                    <div className='grid grid-cols-8'>
                        <div className='col-span-8 md:col-span-5 md:order-last p-2 md:p-3 md:px-20'>
                            <img src={slide.image} alt={slide.caption} className='w-full max-h-[350px] md:max-h-[600px] object-contain rounded-md'/>
                        </div>
                        <div className='col-span-8 md:col-span-3 text-white p-2 md:pt-48 md:pl-20'>
                            <p className='bg-gray-600/75 p-3 rounded-md'>{slide.caption}</p>
                            <div><button className='bg-primary rounded-lg px-5 py-3 mt-5 md:mt-8  hover:bg-primaryDark'>See More...</button></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Carousel