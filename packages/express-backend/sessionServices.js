import mongoose from "mongoose";
import sessionModel from "./session.js";
import dotenv from 'dotenv';

dotenv.config();
const connectionString = process.env.MONGODB_URI;

mongoose.connect(connectionString, {}).catch((error) => console.log(error));

function addSession(session) {
    const sessionToAdd = new sessionModel(session);
    const promise = sessionToAdd.save();
    return promise;
}

function getAllSessions() {
    return sessionModel.find();
}

function findSessionById(id) {
    return sessionModel.findById(id);
}

function findSessionBySpace(space) {
    return sessionModel.find({ space: space });
}

function deleteSession(id) {
    return sessionModel.findByIdAndDelete(id);
}

export default {
    addSession,
    findSessionById,
    findSessionBySpace,
    getAllSessions,
    deleteSession
};