const User = require('../Models/User');


module.exports.getAllUsers = (req, res, next) => {
    User.find()
        .then((data) => res.status(200).json(data))
        .catch((error) => { next(error) })
}

