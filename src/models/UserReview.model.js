import mongoose from "mongoose";


const imageSchema = new mongoose.Schema({
    url: {
        type: String,
        required: true
    },
    caption: String
});


const userReviewSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
        required: true
    },
    ordered_product_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product', 
        required: true
    },
    rating_value: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    comment: String,
    images: [imageSchema]
},{timestamps:true});

const UserReview = mongoose.model('UserReview', userReviewSchema);

module.exports = UserReview;
