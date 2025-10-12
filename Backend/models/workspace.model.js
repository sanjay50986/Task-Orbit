import mongoose, { Schema } from "mongoose";


const workspaceSchema = new Schema(
  {
    workspaceIcon: {
      type: String,
      default: null
    },

    name: {
      type: String,
      required: true,
      unique: true
    },

    description: {
      type: String,
      required: true
    },

    ownerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    }
  },
  {
    timestamps: true
  }
)


export const WorkspaceModel = mongoose.model("Workspace", workspaceSchema)