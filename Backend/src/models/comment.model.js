import mongoose, {Schema} from "mongoose"

const commentSchema=new Schema({
    author:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    content:{
        type: String
    },
    post:{
        type: mongoose.Schema.Types.OnjectId,
        ref:"Post",
        required: true
    }

}, {timestamps: true})

export const Comment=mongoose.model("Comment", commentSchema)