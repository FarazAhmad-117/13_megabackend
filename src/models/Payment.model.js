import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

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

paymentSchema.plugin(mongooseAggregatePaginate);

module.exports = mongoose.model('Payment', paymentSchema);
