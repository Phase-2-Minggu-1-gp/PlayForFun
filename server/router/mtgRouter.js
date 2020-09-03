"use strict"

const router = require('express').Router()
const mtgController = require('../controller/mtgController')

router.get('/cards', mtgController.showCards)
router.get('/cards/:id', mtgController.showCardById)

module.exports = router