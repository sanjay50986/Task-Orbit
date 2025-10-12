import { WorkspaceModel } from "../models/workspace.model.js"
import { STATUS_CODE } from "../utils/statusCode.js"

export const createWorkspace = async (req, res) => {
  const { workspaceIcon, name, description } = req.body;
  const userId = req.user._id;

  try {
    if (!name || !description) {
      return res.status(STATUS_CODE.BAD_REQUEST).json({
        success: false,
        message: "All fields are required"
      });
    }

    const workspaceName = await WorkspaceModel.findOne({ name: new RegExp(`^${name}$`, 'i') });

    if (workspaceName) {
      return res.status(STATUS_CODE.BAD_REQUEST).json({
        success: false,
        message: "Please type another name for the workspace"
      });
    }

    const workspace = await WorkspaceModel.create({
      workspaceIcon: workspaceIcon,
      name,
      description,
      ownerId: userId
    });

    console.log("workspace6")


    return res.status(STATUS_CODE.CREATED).json({
      success: true,
      message: "Workspace created successfully",
      workspace
    });

  } catch (error) {
    return res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Internal server error",
      error: error.message
    });
  }
};