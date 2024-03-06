const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true, 
    },
    description: {
        type: String,
    },
    image: { 
        type: String,
    },
    subCategories: [
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'SubCategory'
        }
    ],
    isActive: { 
        type: Boolean,
        default: true,
    },
},{timestamps:true});

export const Category = mongoose.model('Category', categorySchema);
