const Log = require('../Models/Log');



module.exports = (req, res, next) => {

    let log = `method: ${req.method} url: ${req.originalUrl}`;
    let newLog = new Log({log});
        newLog.save()
            .then(() => {})
            .catch((error) => {next(error)})

    next();
}
