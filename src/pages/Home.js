import React from 'react'
import Carousel from '../components/Carousel'
import Chairman from '../assets/chairman-image.png'
import projectImage from '../assets/car1.jpg'
import { Link } from 'react-router-dom'
import Project from '../components/Project'
import { FaChevronRight, FaRegHourglass } from 'react-icons/fa'

const Home = () => {
    const projects = [
        {"image": projectImage, "title": "Title 10", "content": "Do non irure nisi anim et anim. Voluptate elit eu sint amet anim pariatur incididunt nulla ex tempor adipisicing. Aliquip mollit ipsum id ad anim id duis quis commodo proident. Commodo laboris elit pariatur dolore irure. Sunt ut adipisicing nulla dolor. Excepteur cillum voluptate voluptate qui excepteur nisi incididunt proident adipisicing."},
        {"image": projectImage, "title": "Title 20", "content": "Amet Lorem laborum duis ipsum consequat exercitation eu occaecat nulla. Magna nostrud non do ea amet. Excepteur aliquip reprehenderit consectetur commodo amet laboris laborum adipisicing culpa reprehenderit. Ullamco adipisicing Lorem et reprehenderit cupidatat. Nisi reprehenderit mollit velit enim magna do ad tempor nisi anim labore eu excepteur ad."},
        {"image": projectImage, "title": "Title 30", "content": "Esse in amet et esse adipisicing velit duis dolor ipsum in nostrud consectetur. Amet dolore aute sit in. Mollit et ea adipisicing deserunt nostrud nisi nulla."},
        {"image": projectImage, "title": "Title 40", "content": "Ullamco aliqua incididunt occaecat ex labore aliqua ullamco culpa est occaecat est exercitation exercitation. Pariatur deserunt ullamco adipisicing sint id aliquip. Irure nostrud velit aliqua incididunt veniam. Mollit laborum in laborum consectetur in eu velit."}
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
            <div className='projectsBg bg-slate-900'>
                <div className='container mx-auto px-5 py-10 md:py-20'>
                    <div className='border-l-8 border-primary px-5'>
                        <h2 className='text-primary font-bold text-3xl'>Our <span className='text-white'>Projects</span></h2>
                        <p className='uppercase text-gray-400 text-sm font-medium mt-2'>since 2001</p>
                    </div>
                    <div className='grid grid-cols-2 gap-10 mt-5 md:mt-10'>
                        {projects.map((project) => (
                            <Project content={project.content} image={project.image} title={project.title}/>
                        ))}
                    </div>
                    <div className='flex justify-end mt-5'>
                        <Link to="/projects" className='uppercase text-gray-400 hover:text-white'>
                            <p className='flex items-center font-medium'>See More <FaChevronRight className='ml-3'/></p>
                        </Link>
                    </div>
                </div>
            </div>

            {/* News */}
            <div className='bg-blue-200'>
                <div className='container mx-auto px-5 py-10 md:py-20'>
                    <div className='border-l-8 border-primary px-5'>
                        <h2 className='text-primary font-bold text-3xl'>News / <span className='text-primaryDark'>Events</span></h2>
                        <p className='uppercase text-gray-600 text-sm font-medium mt-2'>Programs | Meetups | Affairs</p>
                    </div>
                    <div className='grid grid-cols-4 gap-10 mt-5 md:mt-10'>
                        {projects.map((project) => (
                            <div className='col-span-4 md:col-span-1 shadow-lg h-80 relative group overflow-hidden'>
                                <div className='absolute bg-primary rounded-full right-2 top-2 z-30 text-white'>
                                    <div className='flex flex-col items-center font-semibold w-14 h-14'>
                                        <h3 className='text-2xl'>30</h3>
                                        <p className='text-sm uppercase'>Oct</p>
                                    </div>
                                </div>
                                <div className='overflow-hidden z-10'>
                                    <img src={project.image} alt={project.title} className='w-full h-[250px] object-cover object-center group-hover:scale-[1.1] group-hover:blur-[1px] duration-300'/>
                                </div>
                                <div className='bg-white absolute p-5 bottom-[-120px] group-hover:bottom-0 duration-500 z-20'>
                                    <h2 className='text-xl font-bold'>{project.title}</h2>
                                    <p className='text-gray-500 h-24 opacity-0 overflow-hidden group-hover:opacity-100'>{project.content}</p>
                                    <small className='flex items-center mt-2 font-medium text-gray-600 opacity-0 group-hover:opacity-100'><FaRegHourglass className='mr-2'/>5 min read</small>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Awards & Achievements */}
            <div>Awards & Achievements</div>
            <div>Gallery</div>
            <div>Get Involved</div>
        </div>
    )
    }

export default Home