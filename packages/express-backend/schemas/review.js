//model for reviews
import mongoose from "mongoose";

const SessionSchema = new mongoose.Schema(
    {
        space: {
            type: String,
            required: true,
            trim: true
        },
        review: {
            type: String,
            required: true,
            trim: true
        },
        rating: {
            type: Number,
            required: true,
            trim: true
        },
        author:{
            type: String,
            required: true,
            trim: true
        }
    },
    {collection: "reviews_list"}
);

const Review = mongoose.model("Review", SessionSchema);

export default Review;