import React from 'react'
import Comment from "./Comment"
const Comments = () => {
  return (
    <>
        <div className='flex flex-col gap-8 lg:w-3/5'>
            <h1 className='text-gray-500 underline text-lg font-medium'>Comments</h1>
            <div className='flex gap-4 items-center justify-between w-full '>
                <textarea name="comment" id="comment" placeholder='Write a comment...' className='w-full p-4 rounded-xl bg-white'></textarea>
                <button className='bg-blue-800 text-white py-2 px-4 rounded-3xl font-medium'>Post</button>
            </div>
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
        </div>
      
    </>
  )
}

export default Comments
