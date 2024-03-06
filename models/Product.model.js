import mongoose from 'mongoose'

const productVariationSchema = new mongoose.Schema({
    colors: [
        {
            name: {
                type: String,
                required: true,
            },
            images: [
                {
                type: String,
                required: true,
                },
            ],
        },
    ],
    size: {
        type: String,
    },
    stock: {
        type: Number,
        default: 0,
        min: 0,
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
});


const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: true,
        lowercase:true,
        unique:true
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    comparePrice: {
        type: Number,
        default:0,
        min: 0,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
    },
    isActive:{
        type:bool,
        default:false
    },
    subcategory: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subcategory',
    },
    collection: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Collection',
    },
    images: [String],
    quantity: {
        type: Number,
        default: 0,
    },
    ratings: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'UserReview',
        },
    ],
    variations: [productVariationSchema], 
}, { timestamps: true }); 

export const Product = mongoose.model('Product', productSchema);
