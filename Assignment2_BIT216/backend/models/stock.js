const mongoose = require('mongoose');

const schema = mongoose.Schema({
    kitName: { type: String, required: true },
    numStock: { type: Number, required: true }
});

module.exports = mongoose.model('stock', schema);