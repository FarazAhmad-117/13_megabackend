import mongooseAggregatePaginate from 'mongoose-aggregate-paginate-v2';
import mongoose from 'mongoose'

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

categorySchema.plugin(mongooseAggregatePaginate);

export const Category = mongoose.model('Category', categorySchema);
