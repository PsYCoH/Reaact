const mongoose = require('mongoose');

const UsermodelSchema = new mongoose.Schema({
    firstname: {
        type: String,
        match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
        required: true
    },
    lastname: {
        type: String,
        match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
        required: true
    },
    username: {
        ype: String,
        lowercase: true,
        match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
        index: true,
        trim: true,
        required: [true, 'Please add your username'],
        unique: true,
        minlength: 6
    },
    password: {
        type: String,
        trim: true,
        required: true
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model('UserModel', UsermodelSchema);