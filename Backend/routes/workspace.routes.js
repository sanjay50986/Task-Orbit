import express from "express"
import {verifyToken} from '../middleware/auth.middleware.js'
import { createWorkSpace, deleteWorkspace, getAllWorkspace, updateWorkspace } from "../controllers/workpace.controller.js"

export const workspaceRoutes = express.Router()

workspaceRoutes.post("/create", verifyToken, createWorkSpace)
workspaceRoutes.get("/get", verifyToken, getAllWorkspace)
workspaceRoutes.delete("/delete/:id", verifyToken, deleteWorkspace)
workspaceRoutes.put("/update/:id", verifyToken, updateWorkspace)