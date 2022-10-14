import React from 'react'
import car1 from '../assets/car1.jpg'

const Home = () => {
    return (
        <div>
            {/* Carousel */}
            <div className='carouselBg py-16'>
                <div className='container mx-auto'>
                    <div className='grid grid-cols-8'>
                        <div className='col-span-3 text-white'>
                            <h1>Carousel 1</h1>
                        </div>
                        <div className='col-span-5'>
                            <img src={car1} alt='carousel-1' className='w-full'/>
                        </div>
                    </div>
                </div>
            </div>

            <div>Projects</div>
            <div>News</div>
            <div>Awards & Achievements</div>
            <div>Gallery</div>
            <div>Get Involved</div>
        </div>
    )
    }

export default Home