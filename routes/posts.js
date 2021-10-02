const routes = require("express").Router();
const Post = require("../models/Post");

routes.post("/new-post", async (req, res) => {
  const newPost = new Post(req.body);

  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (error) {
    res.status(400).json(error);
  }
});

// finding one post
routes.get("/posts/:id", async (req, res) => {
  const id = req.params.id;

  const post = await Post.findById(id);

  if (post) {
    res.json(post);
  } else {
    res.send("Not found");
  }
});

// adding comment
routes.patch("/posts/:id", async (req, res) => {

    const id = req.params.id
  const newComment = {
    name: req.body.name,
    content: req.body.content,
  };

  
  const post = await Post.findById(id)
  !post && res.status(400).json("Post not found!")

  const updatedComments = [...post.comments, newComment]
  console.log(post);


  try {
    const updatedPost = await Post.findByIdAndUpdate( id , {comments: updatedComments});
    res.status(200).json(updatedPost);
  } catch (error) {
      res.status(500).json(error)
  }
});

module.exports = routes;
