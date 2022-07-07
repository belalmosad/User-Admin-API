const Log = require('../Models/Log');

module.exports.getLogs = (req, res, next) => {
    Log.find()
    .then((data) => {
        if(!req.isAdmin) {
            throw new Error('You are not authorized to see logs');
        } else {
            res.status(200).json({data});
        }
    })
    .catch((error) => {next (error)})
}
