const mongoose = require('mongoose');

const schema = mongoose.Schema({
    officerName: { type: String, required: true },
    officerPosition: { type: String, required: true },
    testCentreId: { type: String, required: true }
});

module.exports = mongoose.model('tester', schema);