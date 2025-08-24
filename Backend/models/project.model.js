import mongoose from "mongoose";
import { ENUM } from "../utils/enum";

const projectSchema = new mongoose.Schema(
  {
    projectName: {
      type: String,
      required: true,
    },

    projectDescription: {
      type: String,
      required: true,
    },

    projectType: {
      type: String,
      required: true,
    },

    color: {
      type: String,
      required: true,
    },

    workspaceId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Workspace",
      required: true,
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      rwf: "User",
      required: true,
    },

    status: {
      type: String,
      enum: ENUM.PROJECT_STATUS,
      default: "active",
    },

    dueDate: {
      tyep: new Date(),
    },

    dueTime: {
      tyep: new Date(),
    },
  },

  {
    timestamps: true,
  }
);
