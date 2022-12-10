const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    account: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
        unique: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    passwd: {
        type: String,
        unique: true
    },
    avatar: {
        type: String,
    },
    onstate: {
        type: Number,
    }
});

const User = mongoose.model('users', userSchema);

module.exports = User;