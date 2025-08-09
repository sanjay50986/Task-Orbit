import express from "express"
import {verifyToken} from '../middleware/auth.middleware.js'
import { createWorkSpace } from "../controllers/workpace.controller.js"

export const workspaceRoutes = express.Router()

workspaceRoutes.post("/createWorkspace", verifyToken, createWorkSpace)