const mongoose = require('mongoose');

const cartSchema = mongoose.Schema({
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true},
    productId: {type: mongoose.Schema.Types.ObjectId, ref: 'product', required: true},
    name: {type: String, required: true},
    price: {type: Number, required: false},
    destination: {type: String, required: false},
    info: {type: String, required: false},
    quantity: {type: Number, required: true},
    addedAt: {type: Date, default: Date.now},
}, {
    versionKey: false,
    timestamp: true,
});

const Cart = mongoose.model("cart", cartSchema);

module.exports = Cart;