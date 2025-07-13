import mongoose from "mongoose";

const workspaceSchema = new mongoose.Schema({
    workspaceName: {
        type: String,
        required: true
    },

    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
})