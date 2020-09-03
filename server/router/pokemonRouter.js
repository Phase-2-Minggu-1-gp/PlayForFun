"use strict"

const PokemonController = require('../controller/PokemonController')

const router = require('express').Router()

router.get('/list', PokemonController.showAll)
router.get('/list/grass', PokemonController.listByTypeGrass)

module.exports = router