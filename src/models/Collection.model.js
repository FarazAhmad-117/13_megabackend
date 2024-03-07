import mongoose, { Collection } from 'mongoose'
import mongooseAggregatePaginate from 'mongoose-aggregate-paginate-v2';


const collectionSchema = new mongoose.Schema({
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
    isActive: { 
        type: Boolean,
        default: true,
    },
    products:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        }
    ]
},{timestamps:true});

collectionSchema.plugin(mongooseAggregatePaginate);

export const Collection = mongoose.model('Collection', collectionSchema);
