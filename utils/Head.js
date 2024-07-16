'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button"
import {
  ArrowBigRight
} from "lucide-react"


function Headers() {

  const [top, setTop] = useState(true);

  // detect whether user has scrolled the page down by 10px 
  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 10 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);

  return (
    <>

      <header className='fixed w-full z-10 transition duration-300 ease-in-out'>
        <div className={`absolute w-full h-full md:bg-opacity-90 transition duration-300 ease-in-out ${!top && 'bg-white blur shadow-md'}`}></div>
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Site branding */}
            <div className="flex-shrink-0 mr-4 z-50">
              {/* Logo */}
              <Link href="/" className="block" aria-label="Cruip">
                <svg className="w-8 h-8" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <radialGradient cx="21.152%" cy="86.063%" fx="21.152%" fy="86.063%" r="79.941%" id="header-logo">
                      <stop stopColor="#4FD1C5" offset="0%" />
                      <stop stopColor="#81E6D9" offset="25.871%" />
                      <stop stopColor="#338CF5" offset="100%" />
                    </radialGradient>
                  </defs>
                  <rect width="32" height="32" rx="16" fill="url(#header-logo)" fillRule="nonzero" />
                </svg>
              </Link>
            </div>

            {/* Site navigation */}
            <nav className="flex flex-grow z-50">
              <ul className="flex flex-grow justify-end flex-wrap items-center">
                <li>
                  <Link href="/signin" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Sign in</Link>
                </li>
                <li>
                  <Link href="/signup" className=" text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3 z-20">
                    <Button variant='black'>Sign up  <ArrowBigRight size='20' /> </Button>
                  </Link>
                </li>
              </ul>
            </nav>

          </div>
        </div>
      </header>


    </>
  );
}

export default Headers;