import { app } from "./app.js";
import { connectDB } from "./db/connectDB.js";


connectDB()
.then(()=>{
    app.on("error", (error)=>{
        console.log(`ERROR: ${error}`)
    })
    app.listen(process.env.PORT, ()=>{
        console.log("Server is running...")
    })
})
.catch((error)=>{
    console.loog(`ERROR: ${error}`)
})