"use strict"

const router = require('express').Router()
const userRouter = require('./userRouter')
const pokemonRouter = require('./pokemonRouter')

router.use('/users', userRouter)
router.use('/pokemon', pokemonRouter)

module.exports = router