const bcrypt = require('bcrypt');
const User = require('../Models/User');
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    User.findOne({ email: req.body.email})
        .then((data) => {
            if(data == null) {
                throw new Error('Incorrect Email Or Password');
            } else {
                bcrypt.compare(req.body.password, data.password)
                .then((isEqual) => {
                    if(isEqual) {
                        let token = jwt.sign({
                            id: data.id,
                            isAdmin: data.isAdmin

                        },process.env.SECRET_KEY, {expiresIn: "2h"})
                        res.status(200).json({message: 'Welcome', token});
                    } else {
                        throw new Error('Incorrect Email Or Password');
                    }
                })
                .catch((error) => {next(error)})
            }
        })
        .catch((error) => next(error))
}