"use strict"
//require
require('dotenv').config()
const express = require('express')
const router = require('./router')
const cors = require('cors')
const app = express()
const PORT = 3000

//body parser
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

//Router
app.use(router)


//listen
app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
  })