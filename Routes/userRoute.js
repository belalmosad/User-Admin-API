const express = require('express');
const userRouter = express.Router();
const userController = require('../Controllers/userController');
const validationMiddleware = require('../Middlewares/validationMiddleware');
const { body } = require('express-validator');
const authMiddleware = require('../Middlewares/authMiddleware');

userRouter.route('/users')
    .get(userController.getAllUsers)
    .post([
        body('email').isEmail().withMessage('Incorrect Email Format'),
        body('password').isStrongPassword().withMessage('You should Enter Strong Password')
    ], validationMiddleware, userController.addUser)

userRouter.route('/users/:id')
    .get(authMiddleware,userController.getUserById)
    .put([
        body('email').isEmail().withMessage('Incorrect Email Format'),
        body('password').isStrongPassword().withMessage('You should Enter Strong Password')
    ], validationMiddleware, userController.updateUser)
    .delete(userController.deleteUser)


module.exports = userRouter;