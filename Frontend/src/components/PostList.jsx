import React from 'react'
import PostListItem from './PostListItem'
import { useQuery } from '@tanstack/react-query'
import axios from "axios"

const PostList = () => {
  const fetchData=async ()=>{
    const res =  await axios.get(`${import.meta.env.VITE_API_URL}/posts`)
    return res.data
  }

  const { isPending, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: ()=> fetchData() ,
  })


  return (
    <div className='flex flex-col gap-8 mb-8'>
        <PostListItem />
        <PostListItem />
        <PostListItem />
        <PostListItem />
        <PostListItem />
        <PostListItem />
        <PostListItem />
        <PostListItem />
    </div>
  )
}

export default PostList;
