import { WorkspaceModel } from "../models/workspace.model.js";
import { STATUS_CODE } from "../utils/statusCode.js";
import { UserModel } from "../models/user.model.js";
import { inviteMemberEmail } from "../utils/sendEmail.js";


// Create Workspace
export const createWorkSpace = async (req, res) => {
  const userId = req.user.id;

  try {
    const { workspaceName, workSpaceDescription, workSpaceIcon } = req.body;
    if (!workspaceName || !workSpaceDescription) {
      return res.status(STATUS_CODE.BAD_REQUEST).json({
        succes: false,
        message: "Workspace name and description are required",
      });
    }

    const workspace = await WorkspaceModel.create({
      workspaceName,
      workSpaceDescription,
      workSpaceIcon: workSpaceIcon || null,
      owner: userId,
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

// workspaceData
export const getAllWorkspace = async (req, res) => {
  const userId = req.user.id;
  if (!userId) {
    return res.status(STATUS_CODE.BAD_REQUEST).json({
      success: false,
      message: "user ID is required!",
    });
  }

  try {
    const workspace = await WorkspaceModel.find({ owner: userId });

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
    await WorkspaceModel.findByIdAndDelete(req.params.id);

    return res.status(STATUS_CODE.OK).json({
      succes: true,
      message: "Workspace deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting workspace:", error);
    res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Server error while deleting workspace",
    });
  }
};

export const updateWorkspace = async (req, res) => {
  try {
    const { workspaceName, workSpaceDescription, workSpaceIcon } = req.body;
    const updatedWorkspace = await WorkspaceModel.findByIdAndUpdate(
      req.params.id,
      {
        workspaceName,
        workSpaceDescription,
        workSpaceIcon: workSpaceIcon || null,
      },
      {
        new: true,
      }
    );

    if (!updatedWorkspace) {
      return res.status(STATUS_CODE.BAD_REQUEST).json({
        success: false,
        message: "Workspace not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Workspace updated successfully",
      workspace: updatedWorkspace,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error updating workspace",
      error: error.message,
    });
  }
};

export const inviteMemberToWorkspace = async (req, res) => {
  try {
    const { workspaceId } = req.params;
    const { email } = req.body;

    const workspace = await WorkspaceModel.findById(workspaceId);
    if (!workspace) {
      return res.status(STATUS_CODE.BAD_REQUEST).json({
        success: false,
        message: "Workspace not found",
      });
    }

    const user = await UserModel.findOne({ email });
    if (!user) {
      return res
        .status(STATUS_CODE.BAD_REQUEST)
        .json({ success: false, message: "User with this email not found" });
    }

    const existingMember = workspace.members.find(
      (member) => member.email === email
    );
    if (existingMember) {
      return res.status(400).json({
        success: false,
        message: "This user is already a member of the workspace",
      });
    }

    workspace.members.push({
      userId: user._id,
      email: user.email, 
      role: "member", 
      status: "invited",
    });
    await workspace.save();

    const inviteLink = `http://localhost:8000/invite/accept/${workspaceId}?email=${email}`

    await inviteMemberEmail(email, workspace.workspaceName, inviteLink)

    res.status(STATUS_CODE.OK).json({
      success: true,
      message: "Invitation sent successfully",
      workspace,
    });
  } catch (error) {
    console.error("Error inviting member:", error);
    res
      .status(STATUS_CODE.INTERNAL_SERVER_ERROR)
      .json({ success: false, message: "Server error" });
  }
};
