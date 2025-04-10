import React from 'react'
import {useUser} from "@clerk/clerk-react"
import 'react-quill-new/dist/quill.snow.css';
import ReactQuill from "react-quill-new"
import useMutation from "@tanstack/react-query"

const Write = () => {

  const mutation = useMutation({
    mutationFn: async (newPost) => {
      const token=await getToken()
      return axios.post('/posts', newPost), {
        headers:{
          Authorization: `Bearer ${token}`
        }
      }
    },
  })

  const {isLoaded, isSignedIn}=useUser()
  if(!isLoaded) return (
    <div>
      <h1 className=''>Loading.....</h1>
    </div>
  )

  if(isLoaded && !isSignedIn) 
    return (
      <div className=''>
        <h1>You should log in</h1>
      </div>
  )

  const handleSubmt=(e)=>{
    e.preventDefault()
  }

  return (
    <div className='md:h-[calc(100vh-80px)] h-[calc(100vh-64px)] flex flex-col gap-6'>

      <h1 className='text-xl font-semibold'>Create a new post</h1>
      <form onSubmit={handleSubmt} action="" className='flex flex-col gap-6 flex-1 mb-4'>
        {/* CONTENT */}
        <button className='bg-blue-800 w-max px-4 py-2 shadow-lg rounded-3xl text-white'>Add a cover Image</button>

        <input type="text" className='text-4xl font-semibold outline-none bg-transparent' placeholder='My Awesome Story' />

        <div className='flex items-center gap-2'>
          <label htmlFor="category">Choose a category:</label>
          <select name="category" id="category" className='bg-white rounded-md shadow-md'>
            <option value="general">General</option>
            <option value="web-design">Web Design</option>
            <option value="marketing">Marketing</option>
            <option value="development">Development</option>
            <option value="seo">Search Engine</option>
            <option value="DB">Databases</option>
          </select>
        </div>

        <textarea name="desc" id="desc" className='bg-white p-4 shadow-md rounded-xl' placeholder="A Short Description..."></textarea>

        <ReactQuill theme="snow" className='flex-1 bg-white rounded-xl shadow-md ' />
        <button className='p-2 my-2 w-36 shadow-lg bg-blue-800 text-white rounded-3xl'>Post</button>
        
      </form>
    </div>
  )
}

export default Write
