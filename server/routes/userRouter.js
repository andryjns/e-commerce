'use strict'

require('dotenv').config()
const express = require('express')
const router = express.Router()
const userController = require('./../controllers/userController')
const isLogin = require('../middlewares/isLogin')

router.post('/signup', userController.signUp)
router.post('/signin', userController.signIn)

router.get('/findAll', isLogin, userController.findAll)
router.post('/updateOne/:id', isLogin, userController.updateOne)
router.post('/deleteOne/:id', isLogin, userController.deleteOne)

module.exports = router