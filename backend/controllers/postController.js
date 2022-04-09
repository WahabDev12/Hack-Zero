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
        subContent: req.body.subContent,
        communityId: req.params.communityId
    })
    newPost.save()
}

const getPostById = (req, res) => {
    Post.findOne({_id: req.params.id})
        .then((post) => {
            res.status(200).json(post)
        })
}
module.exports = {getPosts, createPost, getPostById}
