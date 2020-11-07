const mongoose = require('mongoose');

const schema = mongoose.Schema({
    patientName: { type: String, required: true },
    patientType: { type: String, required: true },
    patientSymptoms: { type: String, required: true }
});

module.exports = mongoose.model('test', schema);