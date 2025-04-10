import express from "express"
import { clerkWebhook } from "../controllers/webhook.controller.js"

const router=express.Router()

router.route("clerk").get(clerkWebhook)

export default router