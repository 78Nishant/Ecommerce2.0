const authController=require('../controllers/auth.controller')
const express=require('express')
const authMiddleware = require('../middleware/auth')

const router=express.Router()

router
.post('/register',authController.register)
.post('/login',authController.login)
.get('/test',authMiddleware,authController.test)

module.exports=router;