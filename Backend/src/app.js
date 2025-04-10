import express from "express"
import cors from "cors"
export const app=express()

// MIDDLEWARES  

app.use(cors(process.env.CLIENT_URL))
app.use(express.json())
app.use((error, req, res, next)=>{
    res.json({
        message: error.message || "Something went wrong",
        status: error.status,
        stack:error.stack
    }).status(error.status)
})

// INITIALIZING ROUTES  

import userRouter from "./routes/user.route.js"
import postRouter from "./routes/post.route.js"
import commentRouter from "./routes/comment.route.js"
import webhookRouter from "./routes/webhook.route.js"

app.use("/users", userRouter)
app.use("/posts", postRouter)
app.use("/comments", commentRouter)
app.use("/webhooks", webhookRouter)
