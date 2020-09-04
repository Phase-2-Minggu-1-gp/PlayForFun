"use strict"

const router = require('express').Router()
const userController = require('../controller/userController')

router.post('/register', userController .register)
router.post('/login', userController.login)
router.post('/googlesign', userController.googleSign)

module.exports = router