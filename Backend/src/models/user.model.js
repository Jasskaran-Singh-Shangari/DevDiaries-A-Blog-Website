import mongoose, {Schema} from "mongoose"

const userSchema= new Schema({
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
        required: true
    },
    avatar:{
        type: String
    },
    savedPosts:{
        type: [String],
        default: []
    }
}, {timestamps: true})

export const User=mongoose.model("User", userSchema)