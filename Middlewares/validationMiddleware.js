const { validationResult, body } = require('express-validator');

module.exports = (req, res, next) => {
    let validation = validationResult(req);
    if (!validation.isEmpty()) {
        let errorMesaages = validation.errors.reduce((current, error) => { return current + error.msg + " " }, "");
        let error = new Error(errorMesaages);
        throw error;
    }
    next();
}