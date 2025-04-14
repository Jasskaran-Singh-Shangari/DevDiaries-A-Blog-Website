import Router from "express"
import { createPost, getPosts, getPost, deletePost, uploadAuth } from "../controllers/post.controller.js"

const router=Router()

router.route("/upload-auth").get(uploadAuth)
router.route("/").get(getPosts)
router.route("/").post(createPost)
router.route("/:slug").get(getPost)
router.route("/:id").delete(deletePost)

export default router