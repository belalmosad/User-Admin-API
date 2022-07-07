const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        let encodedToken = req.get('Authorization').split(' ')[1];
        let decodedToken = jwt.verify(encodedToken, process.env.SECRET_KEY);
        req.id = decodedToken.id;
        req.isAdmin = decodedToken.isAdmin;
        next();
    } catch (error) {
        error.message = 'You are noth authorized to show this data';
        next(error)
    }
}