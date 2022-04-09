const Community = require('../models/communityModel')

const getCommunities = (req, res) => {
    Community.find()
        .then((communities) => {
            res.status(200).json(communities)
        })
}

const createCommunity = (req, res) => {
    const newCommunity = new Community({
        name: req.body.name
    })
    newCommunity.save()
}

module.exports = {getCommunities, createCommunity}