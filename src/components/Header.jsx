import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import {FaBars, FaTimes, FaAngleDown} from 'react-icons/fa'


const Header = () => {
    // const openSidebar = () => {
    //     document.getQuerySelector('.sidebar').classList.remove('left-[-100%]')
    //     document.getQuerySelector('.sidebar').classList.add('left-0')
    // };  
    return (
        <nav className="bg-slate-300 shadow-lg shadow-gray-400">
            <div className="container mx-auto">
                <div className='md:hidden w-4/5 mx-auto'><img src={logo} alt='Kadam Myagdi Logo'></img></div>
                <div className="flex items-center justify-around font-semibold">
                    <div className='hidden md:block w-64'><img src={logo} alt='Kadam Myagdi Logo'></img></div>
                    <ul className="hidden md:flex uppercase items-center gap-10 text-gray-600">
                        <li className="hover:text-primary"><Link to='/'><p className="p-3">Home</p></Link></li>
                        <div className="p-3 group cursor-pointer">
                            <h2 className="group-hover:text-primary flex">About <FaAngleDown className='mt-1 ml-2'/></h2>
                            <div className="absolute top-16 hidden group-hover:block hover:block duration-700">
                                <div className="py-3">
                                    <div className="w-4 h-4 left-4 absolute mt-1 bg-slate-300 rotate-45 border-2 border-gray-400"></div>
                                </div>
                                <div className="bg-slate-300 border-2 border-gray-400">
                                    <li className="hover:text-primary"><Link to='#'><p className="p-3">Objectives</p></Link></li>
                                    <li className="hover:text-primary"><Link to='#'><p className="p-3">Vision</p></Link></li>
                                    <li className="hover:text-primary"><Link to='#'><p className="p-3">Organogram</p></Link></li>
                                    <li className="hover:text-primary"><Link to='#'><p className="p-3">Donors and Partners</p></Link></li>
                                </div>
                            </div>
                        </div>
                        <div className="p-3 group cursor-pointer">
                            <h2 className="group-hover:text-primary flex">Projects <FaAngleDown className='mt-1 ml-2'/></h2>
                            <div className="absolute top-16 hidden group-hover:block hover:block duration-700">
                                <div className="py-3">
                                    <div className="w-4 h-4 left-4 absolute mt-1 bg-slate-300 rotate-45 border-2 border-gray-400"></div>
                                </div>
                                <div className="bg-slate-300 border-2 border-gray-400">
                                    <li className="hover:text-primary"><Link to='#'><p className="p-3">Ongoing Projects</p></Link></li>
                                    <li className="hover:text-primary"><Link to='#'><p className="p-3">Completed Projects</p></Link></li>
                                    <li className="hover:text-primary"><Link to='#'><p className="p-3">All Projects</p></Link></li>
                                </div>
                            </div>
                        </div>
                        <li className="hover:text-primary"><Link to='#'><p className="p-3">News</p></Link></li>
                        <div className="p-3 group cursor-pointer">
                            <h2 className="group-hover:text-primary flex">Team <FaAngleDown className='mt-1 ml-2'/></h2>
                            <div className="absolute top-16 hidden group-hover:block hover:block duration-700">
                                <div className="py-3">
                                    <div className="w-4 h-4 left-4 absolute mt-1 bg-slate-300 rotate-45 border-2 border-gray-400"></div>
                                </div>
                                <div className="bg-slate-300 border-2 border-gray-400">
                                    <li className="hover:text-primary"><Link to='#'><p className="p-3">Board Members</p></Link></li>
                                    <li className="hover:text-primary"><Link to='#'><p className="p-3">Advisors</p></Link></li>
                                    <li className="hover:text-primary"><Link to='#'><p className="p-3">General Members</p></Link></li>
                                    <li className="hover:text-primary"><Link to='#'><p className="p-3">Life Members</p></Link></li>
                                </div>
                            </div>
                        </div>
                        <li className="hover:text-primary"><Link to='#'><p className="p-3">Get Involved</p></Link></li>
                        <li className="hover:text-primary"><Link to='#'><p className="p-3">Publications</p></Link></li>
                        <li className="hover:text-primary"><Link to='#'><p className="p-3">Contact</p></Link></li>
                        <li className="p-3 my-1 rounded-lg bg-primary hover:bg-blue-500 text-white"><Link to='#'>Donate</Link></li>
                    </ul>
                    <ul className="sidebar md:hidden bg-primary absolute w-full h-full bottom-0 text-white duration-500 left-0">
                        <div className="flex bg-white p-5">
                            <img src={logo} alt="kadam myagdi logo"/>
                            <div className="absolute right-4 top-2 cursor-pointer" onclick="HideSidebar()"><FaTimes className='text-2xl text-black hover:text-primary'/></div>
                        </div>
                        <li className="p-3"><Link to='#'>Home</Link></li>
                        <li className="p-3 flex">About <FaAngleDown className='mt-1 ml-2'/></li>
                        <li className="p-3 flex">Projects <FaAngleDown className='mt-1 ml-2'/></li>
                        <li className="p-3"><Link to='#'>News</Link></li>
                        <li className="p-3 flex">Team <FaAngleDown className='mt-1 ml-2'/></li>
                        <div className="p-3 group cursor-pointer">
                            <h2 className="group-hover:text-gray-400 flex">Team <FaAngleDown className='mt-1 ml-2'/></h2>
                            <div className="hidden group-hover:block hover:block duration-700">
                                {/* <div className="py-3">
                                    <div className="w-4 h-4 left-4 absolute mt-1 bg-slate-300 rotate-45 border-2 border-gray-400"></div>
                                </div> */}
                                <div>
                                    <li className="hover:text-gray-400"><Link to='#'><p className="p-3">Board Members</p></Link></li>
                                    <li className="hover:text-gray-400"><Link to='#'><p className="p-3">Advisors</p></Link></li>
                                    <li className="hover:text-gray-400"><Link to='#'><p className="p-3">General Members</p></Link></li>
                                    <li className="hover:text-gray-400"><Link to='#'><p className="p-3">Life Members</p></Link></li>
                                </div>
                            </div>
                        </div>
                        <li className="p-3"><Link to='#'>Get Involved</Link></li>
                        <li className="p-3"><Link to='#'>Publications</Link></li>
                        <li className="p-3"><Link to='#'>Contact</Link></li>
                        <li className="p-3 my-1"><Link to='#' className='bg-slate-400 p-3 px-5 rounded-lg text-black'>Donate</Link></li>
                    </ul>
                </div>
                <div className="md:hidden flex p-3">
                    <div>Current Page</div>
                    <div className="ml-auto cursor-pointer" onclick=""><FaBars className='text-2xl hover:text-primary'/></div>
                </div>
            </div>
        </nav>
    )
}

export default Header