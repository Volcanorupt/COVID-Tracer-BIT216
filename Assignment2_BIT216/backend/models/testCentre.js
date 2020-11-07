const mongoose = require('mongoose');

const schema = mongoose.Schema({
    centreName: { type: String, required: true },
    centreTel: { type: String, required: true },
    centreAdd: { type: String, required: true }
});

module.exports = mongoose.model('testCentre', schema);