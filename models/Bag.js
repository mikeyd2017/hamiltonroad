const mongoose = require('mongoose');
const { Schema } = mongoose;

const bagSchema = new Schema({
    title: String,
    price: Number,
    sold: { type: Boolean, default: false}
})

module.exports = bagSchema