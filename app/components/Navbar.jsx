"use client";
import Link from 'next/link'
import React, { useState } from 'react'
import Navlink from './Navlink'
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid"
import MenuOverlay from './MenuOverlay';

const Navbar = () => {

    const [navbarOpen, setNavbarOpen] = useState(false)

    const Navlinks = [
        {
            title: "About",
            path: "#about"
        },
        {
            title: "Projects",
            path: "#projects"
        },
        {
            title: "Contact",
            path: "#contact"
        }
    ]

  return (
    <nav className='border-b border-[#33353F] fixed top-0 left-0 right-0 bg-[#121212]  z-20'>
        <div className='flex flex-wrap items-center justify-between mx-auto px-4 py-2 lg:py-4'>
            <Link href='/' className='text-2xl md:text-5xl text-white font-semibold'>LOGO</Link>
            <div className='mobile-menu block md:hidden'>
            {
                !navbarOpen ? (
                    <button onClick={()=>setNavbarOpen(true)} className='text-slate-200 flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white'>
                        <Bars3Icon className='h-5 w-5'/>
                    </button>
                    ) : (
                    <button onClick={()=>setNavbarOpen(false)} className='text-slate-200 flex items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white'>
                        <XMarkIcon className='h-5 w-5'/>
                    </button>
                    )
            }
            </div>
            <div className='menu hidden md:block md:w-auto' id="navbar">
                <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                    {Navlinks.map((link, index) => (
                        <li key={index}>
                            <Navlink href={link.path} title={link.title}/>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        {navbarOpen && <MenuOverlay links={Navlinks}/>}
    </nav>
  )
}

export default Navbar
