const express = require('express');
const loginController = require('../Controllers/loginController.js');
const loginRouter = express.Router();

loginRouter.route('/login')
    .post(loginController)

module.exports=loginRouter;