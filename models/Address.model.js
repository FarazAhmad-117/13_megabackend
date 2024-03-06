import mongoose from 'mongoose';


const addressSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    isDefault:{
        type:Boolean,
        default:true
    },
    houseNumber: {
        type: String,
    },
    streetNumber: {
        type: String,
    },
    addressLine1: {
        type: String,
        required: true
    },
    addressLine2: {
        type: String
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    postalCode: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    }
},{timestamps:true});


export const Address = mongoose.model('Address', addressSchema);

