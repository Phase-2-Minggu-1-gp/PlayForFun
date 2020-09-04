"use strict"

const router = require('express').Router()
const userRouter = require('./userRouter')
// <<<<<<< HEAD
const mtgRouter = require('./mtgRouter')

router.use('/users', userRouter)
router.use('/mtg', mtgRouter)
// =======
const authentication = require('../middlewares/authentication');

const superheroesRouter = require('./superheroesRouter')
const pokemonRouter = require('./pokemonRouter')

router.use('/users', userRouter)
router.use('/pokemon', pokemonRouter)
router.use(authentication);
router.use('api/superheroes', superheroesRouter);
// >>>>>>> 4844f3bec542b88cca6ec9d6f0b267da507a2dc9

module.exports = router