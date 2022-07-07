const express = require('express');
const userRouter = express.Router();
const userController = require('../Controllers/userController');

userRouter.route('/users')
    .get(userController.getAllUsers)


module.exports=userRouter;