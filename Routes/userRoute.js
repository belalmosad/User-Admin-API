const express = require('express');
const userRouter = express.Router();
const userController = require('../Controllers/userController');
const validationMiddleware = require('../Middlewares/validationMiddleware');
const {body} = require('express-validator');

userRouter.route('/users')
    .get(userController.getAllUsers)
    .post([
        body('email').isEmail().withMessage('Incorrect Email Format'),
        body('password').isStrongPassword().withMessage('You should Enter Strong Password')
    ], validationMiddleware, userController.addUser)


module.exports=userRouter;