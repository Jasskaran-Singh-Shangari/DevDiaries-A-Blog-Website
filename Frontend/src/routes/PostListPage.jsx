import React, { useState } from 'react'
import SideMenu from '../components/SideMenu'
import PostList from '../components/PostList'

const PostListPage = () => {

  const [open, setOpen]=useState(false)
  return (
    <div className=''>
      <h1 className='text-2xl font-medium mb-4 '>Development Posts</h1>
      <button className='md:hidden text-white bg-blue-800 px-4 py-2 text-sm rounded-2xl mb-4' onClick={()=>setOpen(prev=>!prev)}>{open ? "Close" : "Filter" }</button>
      <div className='flex flex-col-reverse gap-4 md:flex-row'>
        <div>
          <PostList />
        </div>
        <div className={`${open? "block": "hidden"} md:block`}>
          <SideMenu />
        </div>
      </div>
    </div>
    
  )
}

export default PostListPage
