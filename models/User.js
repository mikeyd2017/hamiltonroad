const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    name: String,
    email: {type: Array, default: []}
});

mongoose.model('users', userSchema);