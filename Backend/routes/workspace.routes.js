import express from "express"
import {verifyToken} from '../middleware/auth.middleware.js'
import { createWorkSpace, deleteWorkspace, getWorkspace } from "../controllers/workpace.controller.js"

export const workspaceRoutes = express.Router()

workspaceRoutes.post("/createWorkspace", verifyToken, createWorkSpace)
workspaceRoutes.get("/getWorkspace/:id", verifyToken, getWorkspace)
// workspaceRoutes.delete("/deleteWorkspace/:workpaceId", verifyToken, deleteWorkspace)