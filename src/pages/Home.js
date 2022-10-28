import React from 'react'
import Carousel from '../components/Carousel'

const Home = () => {
    return (
        <div>
            {/* Carousel */}
            <Carousel />

            {/* Message from Chairman */}
            <div className='container mx-auto py-10 bg-slate-300'>
                <div className='border-l-8 border-primary px-5'>
                    <h2 className='text-primary font-bold text-3xl'>Message From <span className='text-primaryDark'>Chairman</span></h2>
                    <p className='uppercase text-gray-600 text-sm font-medium'>Welcome message | What is Kadam? | What We Do</p>
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