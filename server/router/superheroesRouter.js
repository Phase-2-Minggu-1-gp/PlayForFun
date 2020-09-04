"use strict"

const router = require('express').Router()
const Controller = require('../controller/superHeroesController')

router.get('/random', Controller.getRandom)
router.get('/all', Controller.getNames)
router.get('/:name', Controller.getByName)

module.exports = router