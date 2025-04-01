import React from 'react'
import Image from "./Image"
import { Link } from 'react-router-dom'
const PostListItem = () => {
  return (
    <div className='flex flex-col xl:flex-row gap-8'>
      {/* IMAGE */}
      <div className="md:hidden xl:block xl:w-1/3">
        <Image src="Sunset1" className="rounded-3xl object-cover" width="735" />
      </div>
      {/* DETAILS AND TITLES */}
      <div className="xl:w-2/3">
        <div className="flex flex-col gap-4 mb-4 ">
            <Link to="/test" className='text-4xl font-semibold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet .</Link>
        </div>
        <div className='flex items-center gap-2 text-gray-600 text-sm'>
            <span>Wriiten by</span>
            <Link className='text-blue-800'>John Doe</Link>
            <span>on</span>
            <Link className='text-blue-800'>Web Design</Link>
            <span>•</span>
            <span>2 days ago</span>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit aspernatur repellat cum, esse totam eveniet delectus nobis dicta maxime quidem qui quisquam consectetur explicabo quam debitis. Quasi alias ex cum?</p>
        <Link to="/test" className='text-blue-800 underline hover:text-purple-600'>Read more..</Link>
      </div>
      

    </div>
  )
}

export default PostListItem
