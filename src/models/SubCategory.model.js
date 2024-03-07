import mongoose from 'mongoose';
import mongooseAggregatePaginate from 'mongoose-aggregate-paginate-v2';

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

subCategorySchema.plugin(mongooseAggregatePaginate);

module.exports = mongoose.model('SubCategory', subCategorySchema);
