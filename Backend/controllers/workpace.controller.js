import { WorkspaceModel } from "../models/workspace.model.js";
import { STATUS_CODE } from "../utils/statusCode.js";

// Create Workspace
export const createWorkSpace = async (req, res) => {
  const { workspaceName, workSpaceDescription, workSpaceIcon } = req.body;

  if (!workspaceName || !workSpaceDescription) {
    return res.status(STATUS_CODE.BAD_REQUEST).json({
      succes: false,
      message: "Workspace name and description are required",
    });
  }

  try {
    const workspace = await WorkspaceModel.create({
      workspaceName,
      workSpaceDescription,
      workSpaceIcon: workSpaceIcon || null,
      owner: req.user._id,
    });

    console.log(workspace)

    return res.status(STATUS_CODE.CREATED).json({
      succes: true,
      message: "Workspace created successfully",
      workspace,
    });
  } catch (error) {
    return res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message,
    });
  }
};

// workspaceData
export const getWorkspace = async (req, res) => {
  const id = req.user;
  console.log(id)

  if (!id) {
    return res.status(STATUS_CODE.BAD_REQUEST).json({
      success: false,
      message: "user ID is required!",
    });
  }

  try {
    const workspace = await WorkspaceModel.find({ owner: id });

    if (!workspace) {
      return res.status(STATUS_CODE.BAD_REQUEST).json({
        success: false,
        message: "Workspace not found",
      });
    }

    return res.status(STATUS_CODE.OK).json({
      success: true,
      message: "Workspace fetched succssfully",
      workspace,
    });
  } catch (error) {
    console.error("Error fetching workspaces:", error);
    return res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Server error while fetching workspaces",
    });
  }
};

// deleteWorkpace
export const deleteWorkspace = async (req, res) => {
  try {
    const workspaceId = req.params.id;
    const userId = req.user;

    console.log(userId)

    const workspace = await WorkspaceModel.findById(workspaceId);

    if (!workspace) {
      return res.status(STATUS_CODE.BAD_REQUEST).json({
        succes: false,
        message: "Workspace not found",
      });
    }

    if (workspace.owner.toString() !== userId) {
      return res.status(STATUS_CODE.UNAUTHORIZED).json({
        succe: false,
        message: "You are not allowed to delete this workspace",
      });
    }

    await WorkspaceModel.findByIdAndDelete(id);

    return res.status(STATUS_CODE.OK).json({
      succe: true,
      message: "Workspace deleted!",
    });
  } catch (error) {
      console.error("Error deleting workspace:", error);
      res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Server error while deleting workspace",
    });
  }
};
