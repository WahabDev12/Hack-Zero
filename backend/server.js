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
<<<<<<< HEAD
=======


>>>>>>> dadd29dda160462e8dfd5165386a58b7697c0e4a
const flashcardsRoute = require('./routes/flashcardsRoute')
const commentRoutes = require('./routes/commentRoutes')
const todoRoutes = require("./routes/TodoRoutes")
require('dotenv').config()
require("./config/db.js")

<<<<<<< HEAD

app.use(cors({
  origin:'http://localhost:3000',
=======

const cors = require("cors")
const todoRoutes = require("./routes/TodoRoutes")
require('./config/db.js')



app.use(cors({
  origin:'http://localhost:3000',



const commentRoutes = require('./routes/commentRoutes')
const flashcardsRoute = require('./routes/flashcardsRoute')
require('dotenv').config()
const todoRoutes = require("./routes/TodoRoutes")
require('./config/db.js')


app.use(cors({
  origin:'http://localhost:3000',
>>>>>>> dadd29dda160462e8dfd5165386a58b7697c0e4a
  credentials: true
}))

app.use(session({

    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({mongoUrl:"mongodb+srv://Jack:jack123@hack0db.nxzfz.mongodb.net/hack0"}),
    cookie: {maxAge: 180 * 60 * 1000}
  
}))
<<<<<<< HEAD


=======

app.use(cors({
  origin:'http://localhost:3000',
  credentials: true
}))



>>>>>>> dadd29dda160462e8dfd5165386a58b7697c0e4a
app.use(passport.initialize())
app.use(passport.session())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/auth', authRoutes)
app.use('/community',communityRoutes)
app.use('/post',postRoutes)
<<<<<<< HEAD
app.use('/comment', commentRoutes)
=======

app.use('/comment', commentRoutes)

>>>>>>> dadd29dda160462e8dfd5165386a58b7697c0e4a
app.use('/createcard', flashcardsRoute)
app.use('/flashcards', flashcardsRoute)
app.use("/todo",todoRoutes)




<<<<<<< HEAD
=======

>>>>>>> dadd29dda160462e8dfd5165386a58b7697c0e4a
app.get('/', (req, res) => {

  res.send(`Hack Zero! <p> ${req.isAuthenticated()}</p>` )
})

<<<<<<< HEAD


PORT = 5000

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)

=======
PORT = 5000



PORT = 5000




app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
>>>>>>> dadd29dda160462e8dfd5165386a58b7697c0e4a
})