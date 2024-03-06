import mongoose from 'mongoose';

const subCategorySchema = new mongoose.Schema({
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
    collections: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Collection',
            required: true,
        },
    ],
    isActive: { 
        type: Boolean,
        default: true,
    },
},{timestamps:true});

module.exports = mongoose.model('SubCategory', subCategorySchema);
