import mongoose from "mongoose";
import reviewModel from "../schemas/review.js";
import dotenv from 'dotenv';

dotenv.config();
const connectionString = process.env.MONGODB_URI;

mongoose.connect(connectionString, {}).catch((error) => console.log(error));

function addReview(review) {
    const reviewToAdd = new reviewModel(review);
    const promise = reviewToAdd.save();
    return promise;
}

function getAllReviews() {
    return reviewModel.find();
}

function findReviewById(id) {
    return sessionModel.findById(id);
}

function findReviewBySpace(space) {
    return reviewModel.find({ space: space });
}

function findReviewByAuthor(author) {
    return reviewModel.find({ author: author });
}

function deleteReview(id) {
    return reviewModel.findByIdAndDelete(id);
}

export default {
    getAllReviews,
    addReview,
    findReviewById,
    findReviewBySpace,
    findReviewByAuthor,
    deleteReview
}

