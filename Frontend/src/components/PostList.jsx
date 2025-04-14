import React from 'react'
import PostListItem from './PostListItem'
import { useInfiniteQuery, useQuery } from '@tanstack/react-query'
import axios from "axios"
import InfiniteScroll from "react-infinite-scroll-component"

const PostList = (pageParam) => {
  const fetchData=async ()=>{
    const res =  await axios.get(`${import.meta.env.VITE_API_URL}/posts`, 
      {params:{page:pageParam}}
    )
    return res.data
  }

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ['posts'],
    queryFn: (pageParam = 1)=> fetchData(),
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => lastPage.hasMore ? pages.length+1 : undefined,
  })

  if (status === "loading") return "Loading ...";

  if (status === "error") return `Something went wrong...`

  const allPosts=data?.pages?.flatMap(page=>page.posts) || []

  
  return (
    <InfiniteScroll
      dataLength={allPosts.length} 
      next={fetchNextPage}
      hasMore={!!hasNextPage}
      loader={<h4>Loading more posts...</h4>}
      endMessage={
        <p style={{ textAlign: 'center' }}>
          <b className='m-4'>All posts loaded</b>
        </p>
      }> {allPosts.map((post)=>(
                <PostListItem key={post._id}post={post} />))} </InfiniteScroll>
        
  )
}

export default PostList;
