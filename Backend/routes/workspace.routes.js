import express from "express"
import {verifyToken} from '../middleware/auth.middleware.js'
import { createWorkspace } from "../controllers/workpace.controller.js"

export const workspaceRoutes = express.Router()

workspaceRoutes.post("/createWorkspace", verifyToken, createWorkspace )