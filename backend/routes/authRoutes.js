const {Router} = require('express')
const router = Router()
const passport = require('passport')
require('dotenv').config()
require('../services/googleAuth')
require('../services/outlookAuth')

router.get('/google', passport.authenticate('google', {scope: ['profile']}))

router.get('/google/callback', passport.authenticate('google', {

    successRedirect: '/',
    failureRedirect: '/failure'
}))

router.get('/outlook',
  passport.authenticate('windowslive', {
    scope: [
        'openid',
        'profile',
        'offline_access',
        'https://outlook.office.com/Mail.Read'
    ]
  })
);

router.get('/outlook/callback', 
  passport.authenticate('windowslive', {
      
    successRedirect: '/',
    failureRedirect: '/failure' 

}))

router.get('/failure',(req,res) =>{

    res.send('Unfortunately login failed... please try again')

})

module.exports = router