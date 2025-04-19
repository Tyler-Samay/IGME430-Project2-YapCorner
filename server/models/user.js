const mongoose = require('mongoose');

let UserModel = {};

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    premium: {
        type: Boolean,
        default: false,
    },
});

UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;