const Post = require('../models/postModel')

const getPosts = (req, res) => {
    Post.find()
        .then((posts) => {
            res.status(200).json(posts)
        })
}

const createPost = (req, res) => {
    const newPost = new Post({
        title: req.body.title,
        subContent: req.body.subContent
    })
    newPost.save()
}

module.exports = {getPosts, createPost}
