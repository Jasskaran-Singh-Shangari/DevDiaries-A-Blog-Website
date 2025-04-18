import React from 'react'
import { Link } from 'react-router-dom'
import MainCategories from '../components/MainCategories'
import FeaturedPosts from '../components/FeaturedPosts'
import PostList from '../components/PostList'
const Homepage = () => {
  return (
    <div>
        {/* BREADCRUMBS */}
        <div className='flex gap-4 my-4 '>
            <Link to="/">Home</Link>
            <span className='text-gray-600'>•</span>
            <span className='text-blue-800'>Blogs and Articles</span>
        </div>
        {/* INTRODUCTION */}
        <div className="flex items-center justify-between">
            {/* titles */}
            <div className=''>
                <h1 className='text-2xl md:text-4xl lg:text-6xl text-gray-800 font-bold'>Tech, Trends & Innovation Stay Ahead with Us!</h1>
                <p className='mt-8 text-md md:text-lg'>Share your achievements, insights, and innovations with your colleagues, because every story deserves to be told.</p>
            </div>
            {/* animated button */}
            <Link to="/write" className='relative hidden md:block'>
            <svg
            viewBox="0 0 200 200"
            width="200"
            height="200"
            className="text-lg tracking-widest animate-spin animatedButton"
          >
            <path
              id="circlePath"
              fill="none"
              d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
            />
            <text>
              <textPath href="#circlePath" startOffset="0%">
                Write your story •
              </textPath>
              <textPath href="#circlePath" startOffset="50%">
                Share your idea •
              </textPath>
            </text>
          </svg>
          <button className="absolute top-0 left-0 right-0 bottom-0 m-auto w-20 h-20 bg-blue-800 rounded-full flex items-center justify-center cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="50"
              height="50"
              fill="none"
              stroke="white"
              strokeWidth="2"
            >
              <line x1="6" y1="18" x2="18" y2="6" />
              <polyline points="9 6 18 6 18 15" />
            </svg>
          </button>
            </Link>
        </div>
        {/* CATEGORIES */}
        <MainCategories />
        {/* FEATURED POSTS */}
        <FeaturedPosts />
        {/* POST LIST */}
        <div>
          <h1 className='text-2xl my-8 text-gray-600 font-bold'>Recent Posts</h1>
          <PostList />
        </div>
    </div>
  )
}

export default Homepage
