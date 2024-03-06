import mongoose from "mongoose";

const couponSchema = new mongoose.Schema({
    code: {
        type: String,
        required: true,
        unique: true, 
    },
    discount: {
        type: Number, 
    },
    type: {
        type: String,
        enum: ['percentage', 'fixed'],
    },
    minOrderValue: {
        type: Number, 
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    startDate: { 
        type: Date,
    },
    endDate: { 
        type: Date,
    }
});

export const Coupon = mongoose.model('Coupon', couponSchema);
