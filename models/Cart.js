const mongoose = require('mongoose');
const { Schema } = mongoose;
const BagSchema = require('./Bag');

const cartSchema = new Schema({
    _user: { type: Schema.Types.ObjectId, ref: 'User'},
    bags: [BagSchema],
    totalPrice: Number,
    description: String
})

module.exports = cartSchema