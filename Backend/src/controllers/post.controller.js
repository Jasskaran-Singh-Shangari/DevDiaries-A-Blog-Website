import { Post } from "../models/post.model.js"
import { User } from "../models/user.model.js"
import Imagekit from "imagekit"
import slugify from "slugify"

export const getPosts=async (req, res)=>{

    const page=parseInt(req.query.page) || 1
    const limit=parseInt(req.query.limit) || 2
    const posts=await Post.find()
    .populate("user", "username")
    .limit(limit)
    .skip((page-1)*limit)

    const totalPosts=Post.countDocuments()
    const hasMore=page*limit < totalPosts


    res.status(200).send({posts, hasMore})
}

export const getPost=async (req, res)=>{
    const post=await Post.findOne({slug: req.params.slug})
    res.status(200).send(post)
}

export const createPost=async (req, res)=>{
    const clerkUserId=req.auth.userId;

    if(!clerkUserId) res.status(401).json("Not authenticated")
    
    const user=await User.findOne({clerkUserId: clerkUserId})
    if (!user) res.status(410).json("User not found")

    const slug = slugify(req.body.title, { lower: true });


    const newPost=new Post({user:user._id, slug:slug, ...req.body})
    const post=await newPost.save() 
    res.status(200).json(post)
}

export const deletePost=async (req, res)=>{
    const clerkUserId=req.auth.userId;
    if(!clerkUserId) res.status(401).json("Not authenticated")
    
    const user=User.findOne({clerkUserId: clerkUserId})

    const deletedPost=await Post.findByIdAndDelete({
        _id: req.params.id,
        user: user._id
    })

    if (!deletedPost) return res.status(403).json("You can delete only your posts")

    res.status(200).send("The post has been deleted")
}

const imagekit=new Imagekit({
    urlEndpoint: process.env.IK_URL_ENDPOINT,
    publicKey: process.env.IK_PUBLIC_KEY,
    privateKey: process.env.IK_PRIVATE_KEY
})

export const uploadAuth=async (req, res)=>{
    const result=imagekit.getAuthenticationParameters();
    res.send(result)
}