"use strict"

const router = require('express').Router()
const userRouter = require('./userRouter')
const mtgRouter = require('./mtgRouter')

router.use('/users', userRouter)
router.use('/mtg', mtgRouter)

module.exports = router