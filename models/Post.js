const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    author: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    question: {
        type: String,
        required: true
    },
    categories: {
        type: [String],
        required: true
    },
    likes: {
        type: Number
    },
    closed: {
        type: Boolean,
        default: false
    },
    comments: {
        type: Array
    }
}, { timestamps: true })

module.exports = mongoose.model('posts', PostSchema)