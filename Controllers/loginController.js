const bcrypt = require('bcrypt');
const User = require('../Models/User');
module.exports = (req, res, next) => {
    User.findOne({ email: req.body.email})
        .then((data) => {
            if(data == null) {
                throw new Error('Incorrect Email Or Password');
            } else {
                bcrypt.compare(req.body.password, data.password)
                .then((isEqual) => {
                    if(isEqual) {
                        res.status(200).json({message: 'Welcome', data});
                    } else {
                        throw new Error('Incorrect Email Or Password');
                    }
                })
                .catch((error) => {next(error)})
            }
        })
        .catch((error) => next(error))
}