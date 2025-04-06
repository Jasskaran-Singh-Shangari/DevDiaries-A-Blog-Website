import express from "express"

export const app=express()

// INITIALIZING ROUTES  

import userRouter from "./routes/user.route.js"
import postRouter from "./routes/post.route.js"
import commentRouter from "./routes/comment.route.js"

app.use("/users", userRouter)
app.use("/posts", postRouter)
app.use("/comments", commentRouter)
