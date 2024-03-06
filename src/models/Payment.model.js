import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
    order: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order',
        required: true,
    },
    paymentId: { 
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        enum: ['pending', 'completed', 'failed', 'cancelled'],
    },
    paymentMethod: {
        type: String,
        enum: ['cod', 'online'], 
    },
    createdAt: { 
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Payment', paymentSchema);
