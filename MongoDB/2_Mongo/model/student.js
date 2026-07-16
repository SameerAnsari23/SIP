const mongoose = require('mongoose');
const {Schema} = mongoose;

const studentSchema = new Schema({
    // name: String,
    // age: Number,
    // phone: Number,
    // email: String

    username: {
        type: String,
        required: true
    },
    age: Number,
    phone: Number,
    email: {
        type: String,
        required: true,
        unique: true
    }
})

module.exports = mongoose.model('student', studentSchema);