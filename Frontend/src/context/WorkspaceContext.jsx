import { baseUrl } from "@/services/baseUrl";
import { workspaceApi } from "@/services/WorkspaceAPI";
import React, { createContext, useContext, useState } from "react";
import { toast } from "sonner";
import { useAuthContext } from "./AuthContext";

const WorkspaceContext = createContext();

const WorkspaceProvider = ({ children }) => {

    const {token} = useAuthContext()
    const [workspaceName, setWorkspaceName] = useState("")
    const [workspaceDesc, setWorkspaceDesc] = useState("")

    const createWorkspace = async () => {
        try {
            if(!workspaceName || !workspaceDesc) {
                toast.info("Workpace field are required!")
            }

            const response = await fetch(`${baseUrl}/workspace/${workspaceApi.create}`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({
                    workspaceName: workspaceName,
                    workSpaceDescription: workspaceDesc 
                })
            })

            if(response.status === 201) {
                toast.success("Workspace created successfully")
            }
        } catch (error) {
            toast.error(error.message || "Something went wrong")
        }
    }


  return (
    <WorkspaceContext.Provider value={{
        createWorkspace,
        setWorkspaceName,
        setWorkspaceDesc
    }}>
        {children}
    </WorkspaceContext.Provider>
    )
};

export default WorkspaceProvider;

export const useWorkspaceContext = () => {
    return useContext(WorkspaceContext)
}
