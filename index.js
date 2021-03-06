'use strict'

const express = require('express')
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const cors = require('cors')
// Import Routes
const authRoute = require('./routes/auth')
const postRoute = require('./routes/posts')
const validate = require('./routes/refresh')

dotenv.config()
const db = ""

// Connect to DB
mongoose.connect(
  db, { useNewUrlParser: true }, () => {
    console.log('connected to DB')
  }
)

// Middleware
app.use(express.json())
app.use(cors())

// Route Middlewares
app.use('/api/user', authRoute)
app.use('/api/validate', validate)

app.use('/api/posts', postRoute)

// app.listen(8000, ip, () => console.log('Server is up and running'))
app.listen(9000, () => console.log('Server is up and running'))
