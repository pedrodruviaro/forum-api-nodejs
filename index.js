const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const postsRoutes = require('./routes/posts')

dotenv.config()
const URI = process.env.MONGO_URI
const PORT = process.env.PORT || 3000
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(postsRoutes)

mongoose.connect(URI)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => console.log("Server running!"))
    })