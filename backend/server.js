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
const flashcardsRoute = require('./routes/flashcardsRoute')
const todoRoutes = require("./routes/TodoRoutes")
require('dotenv').config()
require("./config/db.js")

=======
<<<<<<< HEAD
const cors = require("cors")
const todoRoutes = require("./routes/TodoRoutes")
require('./config/db.js')



app.use(cors({
  origin:'http://localhost:3000',
=======
const commentRoutes = require('./routes/commentRoutes')
const flashcardsRoute = require('./routes/flashcardsRoute')
require('dotenv').config()
const todoRoutes = require("./routes/TodoRoutes")
require('./config/db.js')
>>>>>>> 9e9f5e912cc35b0e3e564c3e23e2464f527ab589

app.use(cors({
  origin:'http://localhost:3001',
>>>>>>> 1c2d601f5eb95b2e5f3596bb87479a7b0c538547
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
app.use(cors({
  origin:'http://localhost:3000',
  credentials: true
}))
=======
>>>>>>> 9e9f5e912cc35b0e3e564c3e23e2464f527ab589

<<<<<<< HEAD

=======
>>>>>>> 1c2d601f5eb95b2e5f3596bb87479a7b0c538547
app.use(passport.initialize())
app.use(passport.session())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/auth', authRoutes)
app.use('/community',communityRoutes)
app.use('/post',postRoutes)
<<<<<<< HEAD
=======
app.use('/comment', commentRoutes)
>>>>>>> 9e9f5e912cc35b0e3e564c3e23e2464f527ab589
app.use('/createcard', flashcardsRoute)
app.use('/flashcards', flashcardsRoute)
app.use("/todo",todoRoutes)

<<<<<<< HEAD

=======
>>>>>>> 9e9f5e912cc35b0e3e564c3e23e2464f527ab589
app.get('/', (req, res) => {

  res.send(`Hack Zero! <p> ${req.isAuthenticated()}</p>` )
})


<<<<<<< HEAD
PORT = 5000
=======

<<<<<<< HEAD
>>>>>>> 9e9f5e912cc35b0e3e564c3e23e2464f527ab589
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`)
=======
app.listen(process.env.PORT, () => {
  console.log(`App listening on port ${process.env.PORT}`)
>>>>>>> 1c2d601f5eb95b2e5f3596bb87479a7b0c538547
})