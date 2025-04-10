import React from 'react'
import Image from "../components/Image" 
import { Link } from 'react-router-dom'
import PostMenuActions from '../components/PostMenuActions'
import Search from '../components/Search'
import Comments from '../components/Comments'

const SinglePostPage = () => {
  return (
    <div className='flex flex-col gap-8 mt-4'>
      {/* DETAILS */}
      <div className='flex gap-8'>
        {/* TITLE AND DETAILS */}
        <div className='flex flex-col gap-4 lg:w-3/5'>
        <h1 className='text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        <div className='flex items-center text-sm text-gray-500 gap-2'>
          <span>Written by</span>
          <Link to="" className="text-blue-800">John Doe</Link>
          <span>on</span>
          <Link to="" className="text-blue-800">Web Design</Link>
          <span>•</span>
          <span>2 days ago</span>
          </div>
          {/* DETAILS */}
          <p className='text-gray-500 font-medium'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero pariatur ipsa quia fugiat saepe, dolor corrupti dolorum quisquam. Nesciunt, laudantium reiciendis hic nam atque aspernatur.</p>
        </div>
        <div className='hidden lg:block w-2/5'>
          <Image src="Sunset3" w="600" className="rounded-2xl" />
        </div>
      </div>
      {/* CONTENT */}
      <div className='flex flex-col md:flex-row gap-12'>
        {/* TEXT */}
        <div className='lg:text-lg flex flex-col gap-6 text-justify'>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, atque? Rem consectetur asperiores soluta in, vel repellat! Dolores asperiores vel provident quo reprehenderit, aliquid magni quis libero? Soluta, laboriosam nobis.</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, atque? Rem consectetur asperiores soluta in, vel repellat! Dolores asperiores vel provident quo reprehenderit, aliquid magni quis libero? Soluta, laboriosam nobis.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, atque? Rem consectetur asperiores soluta in, vel repellat! Dolores asperiores vel provident quo reprehenderit, aliquid magni quis libero? Soluta, laboriosam nobis.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, atque? Rem consectetur asperiores soluta in, vel repellat! Dolores asperiores vel provident quo reprehenderit, aliquid magni quis libero? Soluta, laboriosam nobis.</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, atque? Rem consectetur asperiores soluta in, vel repellat! Dolores asperiores vel provident quo reprehenderit, aliquid magni quis libero? Soluta, laboriosam nobis.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, atque? Rem consectetur asperiores soluta in, vel repellat! Dolores asperiores vel provident quo reprehenderit, aliquid magni quis libero? Soluta, laboriosam nobis.
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, atque? Rem consectetur asperiores soluta in, vel repellat! Dolores asperiores vel provident quo reprehenderit, aliquid magni quis libero? Soluta, laboriosam nobis.</p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, atque? Rem consectetur asperiores soluta in, vel repellat! Dolores asperiores vel provident quo reprehenderit, aliquid magni quis libero? Soluta, laboriosam nobis.
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, atque? Rem consectetur asperiores soluta in, vel repellat! Dolores asperiores vel provident quo reprehenderit, aliquid magni quis libero? Soluta, laboriosam nobis.</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, atque? Rem consectetur asperiores soluta in, vel repellat! Dolores asperiores vel provident quo reprehenderit, aliquid magni quis libero? Soluta, laboriosam nobis.</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, atque? Rem consectetur asperiores soluta in, vel repellat! Dolores asperiores vel provident quo reprehenderit, aliquid magni quis libero? Soluta, laboriosam nobis.</p>
        </div>
        {/* MENU */}
        <div className='px-4 h-max sticky top-8 flex flex-col'>
          <h1 className='mb-4 flex flex-col gap-2 text-sm font-medium '>Author</h1>
          <div className='flex items-center gap-6 mb-4'>
            <Image src="Sunset1" w="20" h="20" className="rounded-full object-cover w-[50px] h-auto" />
            <Link to="" className='text-blue-800 font-medium'>John Doe</Link>
          </div>
          <p className='text-sm text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <div className='flex gap-4 mt-4'>
            <Link to=""><Image src="facebook.png" className="w-[20px]" /></Link>
            <Link to=""><Image src="instagram.webp" className="w-[20px]" /></Link>
          </div>

          <PostMenuActions />
          <h1 className='mt-8 mb-4 flex flex-col gap-2 text-sm font-medium'>Categories</h1>
          <div className="flex flex-col gap-2 text-sm">
            <Link to="/" className='underline'>All</Link>
            <Link to="/" className='underline'>Web Design</Link>
            <Link to="/" className='underline'>Development</Link>
            <Link to="/" className='underline'>Databases</Link>
            <Link to="/" className='underline'>Search Engines</Link>
            <Link to="/" className='underline'>Marketing</Link>
          </div>

          <div className='mt-8 mb-4 flex flex-col gap-2 text-sm font-medium'>
            <h1>Search</h1>
            <Search />
          </div>

        </div>
      </div>

      <Comments />
    </div>
  )
}

export default SinglePostPage
