"use strict"

const router = require('express').Router()
const userRouter = require('./userRouter')
const authentication = require('../middlewares/authentication');
const mtgRouter = require('./mtgRouter')
const superheroesRouter = require('./superheroesRouter')
const pokemonRouter = require('./pokemonRouter')


router.use('/users', userRouter)
// router.use(authentication);
router.use('/mtg', mtgRouter)
router.use('/pokemon', pokemonRouter)
router.use('/superheroes', superheroesRouter);

module.exports = router