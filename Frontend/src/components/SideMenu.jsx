import React from 'react'
import { Link } from 'react-router-dom'
import Search from './Search'

const SideMenu = () => {
  return (
    <div className='top-8 sticky h-max px-4'>
      <h1 className='font-medium text-sm mt-8 mb-4'>Serach</h1>
      <Search />
      <h1 className='font-medium text-sm mt-8 mb-4'>Filter</h1>
      <div>
        <label htmlFor="" className='flex items-center gap-2 cursor-pointer'>
            <input type="radio" name="sort" value="newest" className='cursor-pointer checked:bg-blue-800 bg-white w-4 h-4 appearance-none border-[1.5px]' /> Newest
        </label>
        <label htmlFor="" className='flex items-center gap-2 cursor-pointer'>
            <input type="radio" name="sort" value="popular" className='cursor-pointer checked:bg-blue-800 bg-white w-4 h-4 appearance-none border-[1.5px]' /> Most Popular
        </label>
        <label htmlFor="" className='flex items-center gap-2 cursor-pointer'>
            <input type="radio" name="sort" value="treding" className='cursor-pointer checked:bg-blue-800 bg-white w-4 h-4 appearance-none border-[1.5px]' /> Trending
        </label>
        <label htmlFor="" className='flex items-center gap-2 cursor-pointer'>
            <input type="radio" name="sort" value="oldest" className='cursor-pointer checked:bg-blue-800 bg-white w-4 h-4 appearance-none border-[1.5px]' /> Oldest
        </label>
      </div>
      <h1 className='font-medium text-sm mt-8 mb-4'>Categories</h1>
      <div className='underline text-gray-500 text-sm flex flex-col gap-2'>
        <Link to="/posts" >All</Link>
        <Link to="/posts?cat=web-design" >Web Design</Link>
        <Link to="/posts?cat=development" >Development</Link>
        <Link to="/posts?cat=marketing" >Marketing</Link>
        <Link to="/posts?cat=seo">Search Engine</Link>
        <Link to="/posts?cat=databases">Databases</Link>
      </div>
    </div>
  )
}

export default SideMenu
