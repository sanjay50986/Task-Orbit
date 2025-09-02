import { ProjectModel } from "../models/project.model.js";
import { STATUS_CODE } from "../utils/statusCode.js";

export const createProject = async (req, res) => {
  try {
    const {
      projectName,
      projectDescription,
      projectType,
      color,
      dueDate,
      dueTime,
    } = req.body;

    const userId = req.user.id;
    const {workspaceId} = req.params

    if (!projectName || !projectType || !color) {
      return res.status(STATUS_CODE.BAD_REQUEST).json({
        success: false,
        message: "All required fields must be provided",
      });
    }

    const project = await ProjectModel({
      projectName,
      projectDescription,
      projectType,
      color,
      workspaceId: workspaceId,
      createdBy: userId,
      dueDate,
      dueTime,
    });

    await project.save();

    res.status(STATUS_CODE.CREATED).json({
      success: true,
      message: "Project created successfully",
      project,
    });
  } catch (error) {
    return res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: error.message,
    });
  }
};
