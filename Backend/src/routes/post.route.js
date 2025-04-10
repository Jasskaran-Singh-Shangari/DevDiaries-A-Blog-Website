import Router from "express"
import { createPost, getPosts, getPost, deletePost } from "../controllers/post.controller.js"

const router=Router()

router.route("/").get(getPosts)
router.route("/:slug").get(getPost)
router.route("/:id").delete(deletePost)

export default router