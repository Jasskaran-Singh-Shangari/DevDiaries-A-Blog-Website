import React from 'react'
import Image from "./Image"
import { Link } from 'react-router-dom'
const FeaturedPosts = () => {
  return (
    <div className='mt-4 flex flex-col lg:flex-row gap-8'>
        {/* FIRST */}
        <div className='flex flex-col w-full gap-4 lg:w-1/2'>
            {/* Image */}
            <Image src="Sunset1" className="rounded-3xl object-cover" w="895" />
            {/* DETAILS */}
            <div className='flex flex-row items-center gap-4'>
                <h1 className='font-semibold lg:text-lg '>01.</h1>
                <Link to="" className='text-blue-800 lg:text-lg'>Web Design</Link>
                <span className='text-gray-600 text-sm'>2 days ago</span>
            </div>
            {/* TITLE */}
            <Link to="/test" className='text-xl lg:text-3xl font-semibold lg:font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Link>
        </div>
        {/* OTHERS */}
        <div className='w-full flex flex-col gap-4 lg:w-1/2'> 
            {/* SECOND  */}
            <div className="flex justify-between gap-4 lg:h-1/3">
                <Image src="Sunset2" className="rounded-3xl object-cover w-1/3 aspect-video" />
                {/* DETAILS AND TITLES */}
                <div className="w-2/3">
                {/* DETAILS */}
                    <div className='flex items-center flex-nowrap text-sm lg:text-base gap-4 mb-4'>
                        <h1 className='font-semibold'>02.</h1>
                        <Link to="/test" className='text-blue-800'>Web Design</Link>
                        <span className='test-gray-600 text-sm'>2 days ago</span>
                    </div>
                    {/* TITLE */}
                    <Link to="/test" className='text-base sm:text-lg md:text-2xl lg:text-xl font-medium'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </Link>
                </div>  
            </div>
            {/* THIRD  */}
            <div className="flex justify-between gap-4 lg:h-1/3">
            <Image src="Sunset1" className="rounded-3xl object-cover w-1/3 aspect-video" />
                {/* DETAILS AND TITLES */}
                <div className="w-2/3">
                {/* DETAILS */}
                    <div className='flex items-center flex-nowrap text-sm lg:text-base gap-4 mb-4'>
                        <h1 className='font-semibold'>02.</h1>
                        <Link to="/test" className='text-blue-800'>Web Design</Link>
                        <span className='test-gray-600 text-sm'>2 days ago</span>
                    </div>
                    {/* TITLE */}
                    <Link to="/test" className='text-base sm:text-lg md:text-2xl lg:text-xl font-medium'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </Link>
                </div> 
            </div>    
            {/* FOURTH  */}
            <div className="flex justify-between gap-4 lg:h-1/3">
            <Image src="Sunset3" className="rounded-3xl object-cover w-1/3 aspect-video" />
                {/* DETAILS AND TITLES */}
                <div className="w-2/3">
                {/* DETAILS */}
                    <div className='flex items-center flex-nowrap text-sm lg:text-base gap-4 mb-4'>
                        <h1 className='font-semibold'>02.</h1>
                        <Link to="/test" className='text-blue-800'>Web Design</Link>
                        <span className='test-gray-600 text-sm'>2 days ago</span>
                    </div>
                    {/* TITLE */}
                    <Link to="/test" className='text-base sm:text-lg md:text-2xl lg:text-xl font-medium'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. </Link>
                </div> 
            </div>  
        </div>  
              
    </div>
  )
}

export default FeaturedPosts
