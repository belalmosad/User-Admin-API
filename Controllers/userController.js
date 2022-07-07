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

module.exports.getUserById = (req, res, next) => {
    User.findOne({id: req.params.id})
    .then((data) => {
        if(!data) {
            throw new Error('User Not Found')
        } else {
            res.status(200).json(data)
        }
    })
    .catch ((error) => next(error))
}

module.exports.updateUser = (req, res, next) => {
    User.updateOne({id: req.params.id}, {$set: req.body})
    .then((data) => {
        if(data.matchedCount == 0) {
            throw new Error('User Not Found')
        } else {
            res.status(200).json({message: 'User Updated'})
        }
    })
    .catch((error) => {next(error)})
}

module.exports.deleteUser = (req, res, next) => {
    User.deleteOne({id: req.params.id})
    .then((data) => {
        if(data.deletedCount == 0) {
            throw new Error('User Not Found')
        } else {
            res.status(200).json({message: 'User Deleted'})
        }
    })
    .catch((error) => next(error));
}