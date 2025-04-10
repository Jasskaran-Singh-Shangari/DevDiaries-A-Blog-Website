import React, { useState, useEffect } from 'react'
import {useUser} from "@clerk/clerk-react"
import 'react-quill-new/dist/quill.snow.css';
import ReactQuill from "react-quill-new"
import { useMutation } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"
import { toast } from 'react-toastify';
import { IKContext, IKUpload } from 'imagekitio-react';
import Upload from '../components/Upload';
const Write = () => {

  const [value, setValue]=useState("")
  const [cover, setCover]=useState("")
  const [progress, setProgress]=useState(0)
  const [img, setImg]=useState("")
  const [vid, setVid]=useState("")
  const navigate=useNavigate()
  const mutation = useMutation({
    mutationFn: async (newPost) => {
      // const token=await getToken()
      return axios.post(`${import.meta.env.VITE_API_URL}/posts`,newPost), 
      {
        headers:{
          Authorization: `Bearer ${token}`
        }
      }
    },
    onSuccess:(res)=>{
      toast.success("Post successfully created...")
      navigate(`/${res.data.slug}`)
    }
  })

  useEffect(()=>{
    img && setValue(prev=>prev+`<p><image src="${img.url}"/></p>`)
  }, [img])
  useEffect(()=>{
    vid && setValue(prev=>prev + `<p><iframe src="${vid.url}" className="ql-video" /></p>`)
  }, [vid])

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
    const formData=new FormData(e.target)
    const data={
      img: cover.filePath || "",
      title: formData.get("title"),
      category: formData.get("category"),
      desc: formData.get("desc"),
      content: value
    }
    console.log(data)

    mutation.mutate(data)
  }

  

  return (
    <div className='md:h-[calc(100vh-80px)] h-[calc(100vh-64px)] flex flex-col gap-6'>

      <h1 className='text-xl font-semibold'>Create a new post</h1>
      <form onSubmit={handleSubmt} action="" className='flex flex-col gap-6 flex-1 mb-4'>
        {/* CONTENT */}
        <Upload type="image" setProgress={setProgress} setData={setCover}>
          <button className='bg-blue-800 w-max px-4 py-2 shadow-lg rounded-3xl text-white'>Add a cover Image</button>
        </Upload>
        

        <input type="text" className='text-4xl font-semibold outline-none bg-transparent' placeholder='My Awesome Story' name='title' />

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

        <div className='flex flex-1'>
          <div className='flex flex-col gap-2 mr-2'>
          <Upload type="image" setProgress={setProgress} setData={setImg}>🌆</Upload>
          <Upload type="video" setProgress={setProgress} setData={setVid}>📽️</Upload>
          </div>
          <ReactQuill theme="snow" className='flex-1 bg-white rounded-xl shadow-md ' value={value} onChange={setValue} readOnly={progress>0 && progress<100} />
        </div>
        <button disabled={mutation.isPending || (progress>0 && progress<100)} className='p-2 my-2 w-36 shadow-lg bg-blue-800 text-white rounded-3xl 
        disabled:bg-blue-400 disabled:cursor-not-allowed'>
          {mutation.isPending ? "Loading" : "Post"}
          </button>
        {mutation.isError? (
           <span>{mutation.error.message}</span> 
        ) : null}
      </form>
    </div>
  )
}

export default Write
