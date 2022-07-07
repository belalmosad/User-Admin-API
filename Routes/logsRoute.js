const express = require('express');
const logsRouter = express.Router();
const logsController = require('../Controllers/logsController');
const authMiddleware = require('../Middlewares/authMiddleware');

logsRouter.route('/logs')
    .get(authMiddleware,logsController.getLogs)

module.exports = logsRouter;