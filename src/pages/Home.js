import React from 'react'
import Carousel from '../components/Carousel'
import Chairman from '../assets/chairman-image.png'
import projectImage from '../assets/car1.jpg'
import { Link } from 'react-router-dom'

const Home = () => {
    const projects = [
        {"image": projectImage, "title": "Title 1", "content": "content2"},
        {"image": projectImage, "title": "Title 2", "content": "content1"},
        {"image": projectImage, "title": "Title 3", "content": "content3"},
        {"image": projectImage, "title": "Title 4", "content": "content4"}
    ]
    return (
        <div>
            {/* Carousel */}
            <Carousel />

            {/* Message from Chairman */}
            <div className='messageFromChairmanBg'>
                <div className='container mx-auto py-20 px-5'>
                    <div className='border-l-8 border-primary px-5'>
                        <h2 className='text-primary font-bold text-3xl'>Message From <span className='text-primaryDark'>Chairman</span></h2>
                        <p className='uppercase text-gray-600 text-sm font-medium mt-2'>Welcome message | What is Kadam? | What We Do</p>
                    </div>
                    <div className='grid grid-cols-4 mt-5 md:mt-10 gap-5'>
                        <div className='col-span-4 md:col-span-1 chairmanBg'>
                            <div>
                                <img src={Chairman} alt='Hari Prasad Paudel - Chairman, KADAM' className='w-5/12 mx-auto'/>
                            </div>
                        </div>
                        <div className='col-span-4 md:col-span-3'>
                            <div>
                                <h2 className='uppercase text-xl font-semibold text-primary'>Hari Prasad Paudel</h2>
                                <p className='text-sm font-medium text-gray-400'>Chairman, KADAM</p>
                            </div>
                            <p className='mt-8'>Aliquip commodo tempor nisi id nisi tempor est incididunt nisi eu. Labore sint occaecat fugiat dolore ut sit Lorem commodo anim. Laboris sunt nulla amet Lorem enim eiusmod consectetur. Ut dolor proident dolore amet ut ea.<br></br> Ea sint veniam nulla culpa in esse anim aliqua anim occaecat ipsum enim ea. Consequat nisi duis commodo magna elit eu ullamco elit. Pariatur qui amet id id laborum labore id esse. Exercitation ut est culpa dolore labore veniam commodo in reprehenderit irure. Mollit laborum ut duis in proident consectetur sit fugiat dolore cupidatat amet. Officia anim duis consectetur aute nisi tempor est esse ea. Et mollit officia nostrud tempor consectetur. Culpa aute incididunt ipsum tempor.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Projects */}
            <div className='bg-slate-300'>
                <div className='container mx-auto px-5 py-20'>
                    <div className='border-l-8 border-primary px-5'>
                        <h2 className='text-primary font-bold text-3xl'>Our <span className='text-primaryDark'>Projects</span></h2>
                        <p className='uppercase text-gray-600 text-sm font-medium mt-2'>since 2001</p>
                    </div>
                    <div className='grid grid-cols-2 gap-10 mt-5 md:mt-10'>
                        {projects.map((project) => (
                            <div className='col-span-2 md:col-span-1'>
                                <Link to="#">
                                <div className='grid grid-cols-5 bg-white shadow-xl hover:shadow-2xl hover:scale-[1.02] duration-300 rounded-lg overflow-hidden group'>
                                    <div className='col-span-5 md:col-span-2'>
                                        <img src={project.image} alt={project.content} className="w-full h-[250px] md:h-[200px] object-cover object-center"/>
                                    </div>
                                    <div className='col-span-5 md:col-span-3 relative p-5'>
                                        <div className='w-5 h-5 rotate-45 bg-white absolute left-1/2 -top-2 md:top-1/2 md:-left-2'></div>
                                        <h2 className='font-bold text-xl group-hover:text-primaryD'>{project.title}</h2>
                                        <p>{project.content}</p>
                                        <button className='bg-primary text-white px-5 py-2 rounded-lg mt-5 group-hover:bg-primaryDark'>See More...</button>
                                    </div>
                                </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div>News</div>
            <div>Awards & Achievements</div>
            <div>Gallery</div>
            <div>Get Involved</div>
        </div>
    )
    }

export default Home