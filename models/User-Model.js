const mongoose = require('mongoose');

const UsermodelSchema = new mongoose.Schema({
    firstname: {
        type: String,
        trim: true,
        match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
        required: true
    },
    lastname: {
        type: String,
        trim: true,
        match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
        required: true
    },
    username: {
        type: String,
        trim: true,
        match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
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

module.exports = mongoose.model('Users', UsermodelSchema);