import React from 'react'
import Carousel from '../components/Carousel'
import Chairman from '../assets/chairman.png'

const Home = () => {
    return (
        <div>
            {/* Carousel */}
            <Carousel />

            {/* Message from Chairman */}
            <div className='container mx-auto py-20'>
                <div className='border-l-8 border-primary px-5'>
                    <h2 className='text-primary font-bold text-3xl'>Message From <span className='text-primaryDark'>Chairman</span></h2>
                    <p className='uppercase text-gray-600 text-sm font-medium mt-2'>Welcome message | What is Kadam? | What We Do</p>
                </div>
                <div className='grid grid-cols-4 mt-10'>
                    <div className='col-span-1 messageFromChairmanBg'>
                        <div>
                            <img src={Chairman} alt='Hari Prasad Paudel - Chairman, KADAM' className='w-1/2 mx-auto'/>
                        </div>
                    </div>
                    <div className='col-span-3'>
                        <div>
                            <h2 className='uppercase text-xl font-semibold text-primary'>Hari Prasad Paudel</h2>
                            <p className='text-sm font-medium text-gray-400'>Chairman, KADAM</p>
                        </div>
                        <p className='mt-8'>Aliquip commodo tempor nisi id nisi tempor est incididunt nisi eu. Labore sint occaecat fugiat dolore ut sit Lorem commodo anim. Laboris sunt nulla amet Lorem enim eiusmod consectetur. Ut dolor proident dolore amet ut ea.<br></br> Ea sint veniam nulla culpa in esse anim aliqua anim occaecat ipsum enim ea. Consequat nisi duis commodo magna elit eu ullamco elit. Pariatur qui amet id id laborum labore id esse. Exercitation ut est culpa dolore labore veniam commodo in reprehenderit irure. Mollit laborum ut duis in proident consectetur sit fugiat dolore cupidatat amet. Officia anim duis consectetur aute nisi tempor est esse ea. Et mollit officia nostrud tempor consectetur. Culpa aute incididunt ipsum tempor.</p>
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