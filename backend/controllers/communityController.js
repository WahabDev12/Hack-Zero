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

const joinCommunity = (req, res) => {
    Community.findOneAndUpdate({_id: req.params.id},{
        $addToSet:{
            members:req.body.user._id
        }
    }).then(() => {
        console.log("member successfully added")
    })
        
}

const leaveCommunity = (req, res) => {
    Community.findOneAndUpdate({_id: req.params.id}, {
        $pull:{
            members:req.body.user._id
        }
    }).then(() => {
        console.log("member removed from community")
    })
}

module.exports = {getCommunities, createCommunity, joinCommunity, leaveCommunity}