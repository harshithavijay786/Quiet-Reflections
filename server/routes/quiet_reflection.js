const express = require("express")
const Post = require("../models/quiet_reflection")
const router = express.Router()

router
.post('/create', async (req, res) => {
  try {
    let post = await Post.createPost(req.body)
    res.send({post})
  } catch(err) {
    res.status(401).send({message: err.message})
  }
})

.post('/get', async(req, res) => {
  try {
    let post = await Post.getPost(req.body)
    res.send(post)
  } catch(err) {
    res.status(401).send({message: err.message})
  }
})

.put('/update', async(req, res) => {
  try {
    let post = await Post.updatePost(req.body)
    res.send(post)
  } catch(err) {
    res.status(401).send({message: err.message})
  }
})

.delete('/delete', async(req, res) => {
  try {
    let post = await Post.deletePost(req.body)
    res.send({success: "Post deleted successfully!"})
  } catch(err) {
    res.status(401).send({message: err.message})
  }
})

module.exports = router