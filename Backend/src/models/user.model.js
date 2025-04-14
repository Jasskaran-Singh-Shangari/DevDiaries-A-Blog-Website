import mongoose, {Schema} from "mongoose"

const userSchema= new Schema({
    clerkUserId:{
        type: String,
        required: true,
        unique: true
    },
    username:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        default: "Guest"
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: false
    },
    avatar:{
        type: String,
        required: true,
        unique: true
    },
    savedPosts:{
        type: [String],
        default: []
    }
}, {timestamps: true})

export const User=mongoose.model("User", userSchema)