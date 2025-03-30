import React from 'react'
import { Link } from 'react-router-dom'
const MainCategories = () => {
  return (
    <div className='p-4 shadow-lg my-4 hidden md:flex rounded-xl lg:rounded-full bg-white items-center justify-center gap-8'>

        {/* Links */}
        <div className='flex-1 flex items-center justify-between flex-wrap'>
            <Link to="/posts" className="bg-blue-800 rounded-full text-white px-4 py-2">All Posts</Link>
            <Link to="/posts?cat=web-design" className='hover:bg-blue-50 rounded-full px-4 py-2'>Web Design</Link>
            <Link to="/posts?cat=seo" className='hover:bg-blue-50 rounded-full px-4 py-2'>Search Engine</Link>
            <Link to="/posts?cat=marketing" className='hover:bg-blue-50 rounded-full px-4 py-2'>Marketing</Link>
            <Link to="/posts?cat=databases" className='hover:bg-blue-50 rounded-full px-4 py-2'>Databases</Link>
        </div>
        <div className='text-xl font-medium'>|</div>
        {/* Search */}
        <div className='rounded-full bg-gray-100 flex items-center gap-2 p-2'>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="none"
                stroke="gray">
                <circle cx="10.5" cy="10.5" r="7.5" />
                <line x1="16.5" y1="16.5" x2="22" y2="22" />
            </svg>
            <input type="text" className='bg-transparent' id="search" placeholder='Search a post...' />
        </div>
      
    </div>
  )
}

export default MainCategories
