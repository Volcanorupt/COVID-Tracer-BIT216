const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    centreName: {type: String, required: true},
    centreTel: {type: String, required: true},
    centreAdd: {type: String, required: true}
});

module.exports = mongoose.model('RegisterCenter', postSchema);