const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    body : {type : String, required: true},
    author : {type: String, required: true}
}, {timestamps: true})


const postSchema = new mongoose.Schema({
    title : {
        type : String,
        required : true,
        minLength : 1,
        maxLength : 100
    },
    body : {
        type : String,
        required: true,
        minLength: 1,
        maxLength: 255
    },
    author: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 50
    },
    likes: {
        type: Number,
        default: 0
    },
    comments : [commentSchema]
}, {timestamps: true})


const Post = mongoose.model('Post', postSchema)
module.exports = Post