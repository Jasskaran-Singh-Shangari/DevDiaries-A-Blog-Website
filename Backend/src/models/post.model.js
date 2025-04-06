import mongoose, {Schema} from "mongoose"

const postSchema=new Schema({
    author:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    coverImage:{
        type: String,
        required: true,
        unique: false,
    },
    title:{
        type: String,
        required: true,
        unique: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }, 
    content:{
        type: String,
        required: true
    },
    isFeatured:{
        type: Boolean,
        default: false
    },
    visit:{
        type:Number,
        default: 0
    }

}, {timestamps: true})

export const Post=mongoose.model("Post", postSchema)