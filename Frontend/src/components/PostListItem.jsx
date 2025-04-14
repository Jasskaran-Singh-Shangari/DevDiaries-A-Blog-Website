import React from 'react'
import Image from "./Image"
import { Link } from 'react-router-dom'
import {format} from "timeago.js"
const PostListItem = ({post}) => {
  return (
    <div className='flex flex-col xl:flex-row gap-8 mb-4'>
      {/* IMAGE */}
      {post.img && <div className="md:hidden xl:block xl:w-1/3">
        <Image src={post.img} className="rounded-3xl object-cover" width="735" />
      </div>}
      {/* DETAILS AND TITLES */}
      <div className="xl:w-2/3">
        <div className="flex flex-col gap-4 mb-4 ">
            <Link to="/test" className='text-4xl font-semibold'>{post.title}</Link>
        </div>
        <div className='flex items-center gap-2 text-gray-600 text-sm'>
            <span>Wriiten by</span>
            <Link className='text-blue-800'>John Doe</Link>
            <span>on</span>
            <Link className='text-blue-800'>{post.category}</Link>
            <span>•</span>
            <span>{format(post.createdAt)}</span>
        </div>
        <p>{post.desc}</p>
        <Link to={`/${post.slug}`} className='text-blue-800 underline hover:text-purple-600'>Read more..</Link>
      </div>
    </div>
  )
}

export default PostListItem
