import mongoose from "mongoose";

const workspaceSchema = new mongoose.Schema(
  {
    workspaceName: {
      type: String,
      required: true,
    },

    workSpaceDescription: {
      type: String,
      required: true,
    },

    workSpaceIcon: {
      type: String
    },

    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },

  {
    timestamps: true,
  }
);

export const WorkspaceModel = mongoose.model("Workspace", workspaceSchema)
