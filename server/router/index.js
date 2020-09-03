"use strict"

const router = require('express').Router()
const userRouter = require('./userRouter')
const mtgRouter = require('./mtgRouter')
const authentication = require('../middlewares/authentication');

const superheroesRouter = require('./superheroesRouter')
const pokemonRouter = require('./pokemonRouter')


router.use('/users', userRouter)
// router.use(authentication);
router.use('/mtg', mtgRouter)
router.use('/pokemon', pokemonRouter)
router.use('api/superheroes', superheroesRouter);

module.exports = router