import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav class="bg-slate-300">
        <div class="container mx-auto">
            <div class="flex items-center justify-around font-semibold">
                <ul class="hidden md:flex uppercase items-center gap-10 text-gray-600">
                    <li class="hover:text-black"><Link to='/'><p class="p-3">Home</p></Link></li>
                    <div class="p-3 group cursor-pointer">
                        <h2 class="group-hover:text-black">About</h2>
                        <div class="absolute top-10 hidden group-hover:block hover:block duration-700">
                            <div class="py-3">
                                <div class="w-4 h-4 left-4 absolute mt-1 bg-slate-300 rotate-45"></div>
                            </div>
                            <div class="bg-slate-300">
                                <li class="hover:text-black"><Link to='#'><p class="p-3">Objectives</p></Link></li>
                                <li class="hover:text-black"><Link to='#'><p class="p-3">Vision</p></Link></li>
                                <li class="hover:text-black"><Link to='#'><p class="p-3">Organogram</p></Link></li>
                                <li class="hover:text-black"><Link to='#'><p class="p-3">Donors and Partners</p></Link></li>
                            </div>
                        </div>
                    </div>
                    <div class="p-3 group cursor-pointer">
                        <h2 class="group-hover:text-black">Projects</h2>
                        <div class="absolute top-10 hidden group-hover:block hover:block duration-700">
                            <div class="py-3">
                                <div class="w-4 h-4 left-4 absolute mt-1 bg-slate-300 rotate-45"></div>
                            </div>
                            <div class="bg-slate-300">
                                <li class="hover:text-black"><Link to='#'><p class="p-3">Ongoing Projects</p></Link></li>
                                <li class="hover:text-black"><Link to='#'><p class="p-3">Completed Projects</p></Link></li>
                                <li class="hover:text-black"><Link to='#'><p class="p-3">All Projects</p></Link></li>
                            </div>
                        </div>
                    </div>
                    <li class="hover:text-black"><Link to='#'><p class="p-3">News</p></Link></li>
                    <div class="p-3 group cursor-pointer">
                        <h2 class="group-hover:text-black">Team</h2>
                        <div class="absolute top-10 hidden group-hover:block hover:block duration-700">
                            <div class="py-3">
                                <div class="w-4 h-4 left-4 absolute mt-1 bg-slate-300 rotate-45"></div>
                            </div>
                            <div class="bg-slate-300">
                                <li class="hover:text-black"><Link to='#'><p class="p-3">Board Members</p></Link></li>
                                <li class="hover:text-black"><Link to='#'><p class="p-3">Advisors</p></Link></li>
                                <li class="hover:text-black"><Link to='#'><p class="p-3">General Members</p></Link></li>
                                <li class="hover:text-black"><Link to='#'><p class="p-3">Life Members</p></Link></li>
                            </div>
                        </div>
                    </div>
                    <li class="hover:text-black"><Link to='#'><p class="p-3">Get Involved</p></Link></li>
                    <li class="hover:text-black"><Link to='#'><p class="p-3">Publications</p></Link></li>
                    <li class="hover:text-black"><Link to='#'><p class="p-3">Contact</p></Link></li>
                </ul>
                <ul class="sidebar md:hidden bg-primaryRegular absolute w-full h-full bottom-0 text-white duration-500 left-[-100%]">
                    <div class="flex">
                        <img src="#" alt="logo"/>
                        <div class="absolute right-4 cursor-pointer" onclick="HideSidebar()"><i class="fa-solid fa-xmark text-2xl text-primaryExtraDark"></i></div>
                    </div>
                    <li class="p-3"><Link to='#'>Home</Link></li>
                    <li class="p-3"><Link to='#'>About</Link></li>
                    <li class="p-3"><Link to='#'>News/Events</Link></li>
                    <li class="p-3"><Link to='#'>Team</Link></li>
                    <li class="p-3"><Link to='#'>Articles</Link></li>
                    <li class="p-3"><Link to='#'>Downloads</Link></li>
                    <li class="p-3"><Link to='#'>Contact</Link></li>
                    <li class="p-3 my-1 rounded-lg bg-secondaryR"><Link to='#'>Jaycess Cup 2022</Link></li>
                </ul>
            </div>
            <div class="md:hidden flex p-3">
                <div class="text-white">Current Page</div>
                <div class="text-white ml-auto cursor-pointer" onclick="OpenSidebar()"><i class="fa-solid fa-bars"></i></div>
            </div>
        </div>
    </nav>
  )
}

export default Header