import Router from "express"
import { createPost, getPosts } from "../controllers/post.controller.js"

const router=Router()

router.route("/").get(getPosts).post(createPost)

// router.route("/:slug").get()

export default router