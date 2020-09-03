"use strict"

const router = require('express').Router()
const userRouter = require('./userRouter')
const authentication = require('../middlewares/authentication');

const superheroesRouter = require('./superheroesRouter')
const pokemonRouter = require('./pokemonRouter')

router.use('/users', userRouter)
router.use('/pokemon', pokemonRouter)
router.use(authentication);
router.use('api/superheroes', superheroesRouter);

module.exports = router