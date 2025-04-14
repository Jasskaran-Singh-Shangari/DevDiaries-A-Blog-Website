import mongoose, {Schema} from "mongoose"

const postSchema=new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    img:{
        type: String,
        required: false,
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
    desc: {
        type: String,
        required: true
    }, 
    category:{
        type: String,
        required: true,
        default: "general"
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
    }, 
    slug:{
        type: String,
        required: true,
        unique: true
    }

}, {timestamps: true})

export const Post=mongoose.model("Post", postSchema)