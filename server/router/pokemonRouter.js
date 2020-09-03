"use strict"

const PokemonController = require('../controller/PokemonController')

const router = require('express').Router()

router.get('/list', PokemonController.showAll)
router.get('/list/grass', PokemonController.listByTypeGrass)
router.get('/list/water', PokemonController.listByTypeWater)
router.get('/list/psychic', PokemonController.listByTypePsychic)
router.get('/list/lighting', PokemonController.listByTypeLightning)


module.exports = router