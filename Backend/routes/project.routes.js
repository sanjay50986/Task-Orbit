import exprees from "express"
import { createProject } from "../controllers/project.contoller.js"
import { verifyToken } from "../middleware/auth.middleware.js"

export const projectRoutes = exprees.Router()

projectRoutes.post("/:workspaceId/project", verifyToken, createProject)