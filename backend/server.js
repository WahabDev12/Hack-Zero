require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const communityRoutes = require('./routes/communityRoutes')
const postRoutes = require('./routes/postRoutes')
const authRoutes = require('./routes/authRoutes')
const flashcardsRoute = require('./routes/flashcardsRoute')
const todoRoutes = require("./routes/TodoRoutes")
require('dotenv').config()
require("./config/db.js")


app.use(session({

    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({mongoUrl:"mongodb+srv://Jack:jack123@hack0db.nxzfz.mongodb.net/hack0"}),
    cookie: {maxAge: 180 * 60 * 1000}
  
}))
app.use(cors({
  origin:'http://localhost:3000',
  credentials: true
}))

app.use(passport.initialize())
app.use(passport.session())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/auth', authRoutes)
app.use('/community',communityRoutes)
app.use('/post',postRoutes)
app.use('/createcard', flashcardsRoute)
app.use('/flashcards', flashcardsRoute)
app.use("/todo",todoRoutes)


app.get('/', (req, res) => {

  res.send(`Hack Zero! <p> ${req.isAuthenticated()}</p>` )
})


PORT = 5000
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
})