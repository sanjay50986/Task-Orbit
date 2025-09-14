import { baseUrl } from "@/services/baseUrl";
import React, { createContext, useContext, useState } from "react";
import { useAuthContext } from "./AuthContext";

const WorkspaceContext = createContext();

const WorkspaceProvider = ({ children }) => {

    const {token} = useAuthContext()
    const [workspaceName, setWorkspaceName] = useState("")
    const [workspaceDesc, setWorkspaceDesc] = useState("")
    const [workspaceId, setWorkspaceId] = useState("")

    const createWorkspace = async () => {
        try {
            
            const response = await fetch(`${baseUrl}/workspace/create`, {
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

            const data = await response.json()
            if(response.status === 201) {
                setWorkspaceId(data?.workspace?._id)
            }
        } catch (error) {
            toast.error(error.message || "Something went wrong")
        }
    }


  return (
    <WorkspaceContext.Provider value={{
        createWorkspace,
        setWorkspaceName,
        workspaceDesc,
        workspaceName,
        setWorkspaceDesc,
        workspaceId
    }}>
        {children}
    </WorkspaceContext.Provider>
    )
};

export default WorkspaceProvider;

export const useWorkspaceContext = () => {
    return useContext(WorkspaceContext)
}
