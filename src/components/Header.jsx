import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import {FaBars} from 'react-icons/fa'


const Header = () => {
  return (
    <nav className="bg-slate-300 shadow-lg shadow-gray-400">
        <div className="container mx-auto">
            <div className="flex items-center justify-around font-semibold">
                <div className='hidden md:block w-64'><img src={logo} alt='Kadam Myagdi Logo'></img></div>
                <ul className="hidden md:flex uppercase items-center gap-10 text-gray-600">
                    <li className="hover:text-primary"><Link to='/'><p className="p-3">Home</p></Link></li>
                    <div className="p-3 group cursor-pointer">
                        <h2 className="group-hover:text-primary">About</h2>
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
                        <h2 className="group-hover:text-primary">Projects</h2>
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
                        <h2 className="group-hover:text-primary">Team</h2>
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
                </ul>
                <ul className="sidebar md:hidden bg-primaryRegular absolute w-full h-full bottom-0 text-white duration-500 left-[-100%]">
                    <div className="flex">
                        <img src="#" alt="logo"/>
                        <div className="absolute right-4 cursor-pointer" onclick="HideSidebar()"><i className="fa-solid fa-xmark text-2xl text-primaryExtraDark"></i></div>
                    </div>
                    <li className="p-3"><Link to='#'>Home</Link></li>
                    <li className="p-3"><Link to='#'>About</Link></li>
                    <li className="p-3"><Link to='#'>News/Events</Link></li>
                    <li className="p-3"><Link to='#'>Team</Link></li>
                    <li className="p-3"><Link to='#'>Articles</Link></li>
                    <li className="p-3"><Link to='#'>Downloads</Link></li>
                    <li className="p-3"><Link to='#'>Contact</Link></li>
                    <li className="p-3 my-1 rounded-lg bg-secondaryR"><Link to='#'>Jaycess Cup 2022</Link></li>
                </ul>
            </div>
            <div className="md:hidden flex p-3">
                <div className="text-white">Current Page</div>
                <div className="text-white ml-auto cursor-pointer" onclick="OpenSidebar()"><FaBars/></div>
            </div>
        </div>
    </nav>
  )
}

export default Header