import mongoose from "mongoose";
import { ENUM } from "../utils/enum.js";

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
      type: String,
    },

    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    members: [
      {
        userId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },

        email: {
          type: String,
          required: true,
        },

        role: {
          type: String,
          enum: ENUM.ROLES,
          default: "member",
        },

        status: {
          type: String,
          enum: ENUM.INVITE_MEMBER,
          default: "invited",
        },
      },
    ],
  },

  {
    timestamps: true,
  }
);

export const WorkspaceModel = mongoose.model("Workspace", workspaceSchema);
