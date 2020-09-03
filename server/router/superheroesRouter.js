"use strict"

const router = require('express').Router()
const Controller = require('../controller/superHeroesController')

router.get('/superheroes', Controller.findByName)

module.exports = router