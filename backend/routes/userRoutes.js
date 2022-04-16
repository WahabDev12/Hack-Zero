const {Router} = require('express')
const User = require('../models/userModel')
const router = Router()

router.get('/profile',(req,res) =>{

    res.status(200).json({
        isAuth:req.isAuthenticated(),
        message:  req.isAuthenticated() ? 'Currently authenicated' : ' Currently unauthenticated',
        user: req.user
        
    })

})

router.get('/logout', (req, res) => {

    req.logOut()
    req.session.destroy()
    res.status(200).json({
        isAuth:req.isAuthenticated(),
        message:  req.isAuthenticated() ? 'Currently authenicated' : ' Currently unauthenticated',
    })
})
module.exports = router