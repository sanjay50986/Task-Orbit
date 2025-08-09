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
