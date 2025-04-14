import React, { useState, useEffect } from 'react'
import {IKImage} from 'imagekitio-react';
import Image from './Image.jsx';
import { Link } from 'react-router-dom';
import { UserButton, SignedIn, SignedOut, useAuth } from '@clerk/clerk-react';
const Navbar = () => {
    const [open, setOpen]=useState(false);
    
  return (
    <div>
        <div className='w-full h-16 md:h-20 flex justify-between items-center'>
            {/* LOGO */}
            <Link to="/" className="w-8 h-8 text-2xl font-bold flex gap-2">
                {/* <Image src="../assets/Icons/LOGO.png"  w={32} h={32} alt="LOGO" /> */}
                <img src="../../public/LOGO.png" alt="LOGO" width="32" height="32" />
                <span className='logo'>DevDiaries</span>
            </Link>
            {/* MOBILE MENU */}
            <div className='md:hidden'>
                <div className='text-4xl cursor-pointer' onClick={()=>{setOpen((prev) => !prev)}}>
                {open ? "X" : "☰"}
                </div>
            </div>
            {/* MOBILE LINK LIST */}
            <div className={`w-full h-screen flex flex-col items-center justify-center absolute top-16 bg-[#e6e6ff] gap-8 font-medium text-lg transition-all ease-in-out
                ${open ? "-right-0": "-right-[100%] "}`}>
                    <p>MENU</p>
                    <Link to="/">Home</Link>
                    <Link to="/">Trending</Link>
                    <Link to="/">Most Popular</Link>
                    <Link to="/">About</Link>
                    <Link to="/">
                    <button className='bg-blue-800 rounded-3xl py-2 px-4 text-white'>Login 👋</button>
                    </Link>
                </div>
            {/* DESKTOP MENU */}
            <div className='hidden md:flex items-center justify-center gap-8 xl:gap-12'>
                <Link to="/">Home</Link>
                <Link to="/">Trending</Link>
                <Link to="/">Most Popular</Link>
                <Link to="/">About</Link>
                <SignedOut>
                    <Link to="/login">
                        <button className='bg-blue-800 cursor-pointer rounded-3xl py-2 px-4 text-white'>Login 👋</button>
                    </Link>
                </SignedOut>
                <SignedIn>
                    <UserButton />
                </SignedIn>
            </div>
        </div>
    </div>
  )
}

export default Navbar
