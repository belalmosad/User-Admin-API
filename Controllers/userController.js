const User = require('../Models/User');

module.exports.getAllUsers = (req, res, next) => {
    User.find()
        .then((data) => res.status(200).json(data))
        .catch((error) => { next(error) })
}

module.exports.addUser = (req, res, next) => {
    let newUser = new User(req.body);
    newUser.save()
    .then(() => {res.status(201).json({message: 'New user added'})})
    .catch((err) => {next(err)})
}