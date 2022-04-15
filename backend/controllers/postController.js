const Post = require('../models/postModel')

const getPosts = (req, res) => {
    Post.find({communityId: req.params.id})
        .then((posts) => {
            res.status(200).json(posts)
        })
}

const createPost = (req, res) => {
    console.log(req.body)
    const newPost = new Post({
        title: req.body.post.title,
        subContent: req.body.post.subContent,
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

const submitUpvote = (req, res) => {
    Post.updateOne(
        {_id: req.body.postID},
        {$inc: {
            "upvotes":1
          }
        },
    ).then((res)=> {})
}

module.exports = {getPosts, createPost, getPostById, submitUpvote}
