"use strict"

const router = require('express').Router()
const userRouter = require('./userRouter')
const authentication = require('../middlewares/authentication');

const superheroesRouter = require('./superheroesRouter')

router.use('/users', userRouter);

router.use(authentication);
router.use('api/superheroes', superheroesRouter);



module.exports = router