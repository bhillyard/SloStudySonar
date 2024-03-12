//model for study sessions
import mongoose from "mongoose";

const SessionSchema = new mongoose.Schema(
    {
        sessionName:{
            type: String,
            required: true,
            trim: true
        },
        date:{
            type: String,
            required: true,
            trim: true
        },
        startTime:{
            type: String,
            required: true,
            trim: true
        },
        endTime:{
            type: String,
            required: true,
            trim: true
        },
        host:{
            type: String,
            required: true,
            trim: true
        },
        space:{
            type: String,
            required: true,
            trim: true
        },
        description:{
            type: String,
            required: true,
            trim: true
        },
        participants:{
            type: Array,
            required: true,
            trim: true
        },
        reviews:{
            type: Array,
            required: true,
            trim: true
        }
        
    },
    {collection: "sessions_list"}

);

const Session = mongoose.model("Session", SessionSchema);

export default Session;