const express = require('express')
const app = express()
const passport = require('passport')
const session = require('express-session')
const cors = require('cors')
const MongoStore = require('connect-mongo')
const communityRoutes = require('./routes/communityRoutes')
const postRoutes = require('./routes/postRoutes')
const authRoutes = require('./routes/authRoutes')
const commentRoutes = require('./routes/commentRoutes')
require('dotenv').config()
require('./config/db.js')
app.use(cors({
  origin:'http://localhost:3001',
  credentials: true
}))
app.use(session({

    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({mongoUrl:process.env.DATABASE_URI}),
    cookie: {maxAge: 180 * 60 * 1000}
  
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/auth', authRoutes)
app.use('/community',communityRoutes)
app.use('/post',postRoutes)
app.use('/comment', commentRoutes)
app.get('/', (req, res) => {

  res.send(`Hack Zero! <p> ${req.isAuthenticated()}</p>` )
})

app.listen(process.env.PORT, () => {
  console.log(`App listening on port ${process.env.PORT}`)
})