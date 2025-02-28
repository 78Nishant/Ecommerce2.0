'use client'

import React from 'react'
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Navbar = () => {
    const router=useRouter();
    return (
      <nav className="absolute z-50 top-0 left-0 w-full p-5 flex h-14 justify-between items-center text-white drop-shadow-xl  rounded-xl">
        <div className="text-xl font-bold flex">
            <img className="" src="https://img.icons8.com/material-two-tone/24/flash-on.png" alt="logo" />
                Fury
        </div>
        <ul className="hidden md:flex space-x-6">
          <li><a href="#" className="hover:text-red-600 transition duration-300 ease-in-out">Home</a></li>
          <li><a href="#" className="hover:text-red-600 transition duration-300 ease-in-out">Trending</a></li>
          <li><a href="#" className="hover:text-red-600 transition duration-300 ease-in-out">Contact us</a></li>
          <li><a href="#" className="hover:text-red-600 transition duration-300 ease-in-out">About us</a></li>
        </ul>
        <div className="hidden md:flex space-x-4">
        <Link href="/api/auth/login">
          <button className="border px-4 py-2 rounded-md bg-white">
           <img className="transition duration-300 ease-in-out hover:scale-110" src="https://img.icons8.com/ios-glyphs/30/shopping-cart--v1.png"  alt="cart"/>
          </button>
          </Link>
          <button onClick={()=>{router.push('/auth/login')}} className=" bg-white text-black border px-4 py-2 rounded-md">
            <p className="hover:scale-110 transition duration-300 ease-in-out ">Sign In</p>
            </button>
        </div>
      </nav>
    // <nav className="absolute z-50">
    //     <h1 className="text-black text-5xl">this is nav</h1>
    // </nav>
    );
  };

export default Navbar
