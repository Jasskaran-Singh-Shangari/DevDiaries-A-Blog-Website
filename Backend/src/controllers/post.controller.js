import { Post } from "../models/post.model.js"
import Imagekit from "imagekit"

export const getPosts=async (req, res)=>{
    const posts=await Post.find()
    res.status(200).send(posts)
}

export const getPost=async (req, res)=>{
    const post=await Post.findOne({slug: req.params.slug})
    res.status(200).send(post)
}

export const createPost=async (req, res)=>{
    const newPost=new Post(req.body)
    const post=await newPost.save() 
    res.status(200).send("A new post has been created...")
}

export const deletePost=async (req, res)=>{
    await Post.findByIdAndDelete(req.params.id)
    res.status(200).send("The post has been deleted")
}

const imagekit=new Imagekit({
    urlEndpoint: process.env.IK_URL_ENDPOINT,
    publicKey: process.env.IK_PUBLIC_KEY,
    privateKey: process.env.IK_PRIVATE_KEY
})

export const uploadAuth=async (req, res)=>{

}