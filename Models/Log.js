const { mongoose } = require("mongoose");

const schema = new mongoose.Schema({
    log: {
        type: String
    }
})

module.exports = mongoose.model('logs', schema);