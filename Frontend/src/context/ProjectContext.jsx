import React, { createContext, useContext, useState } from 'react'
import { useAuthContext } from './AuthContext'
import { useWorkspaceContext } from './WorkspaceContext'
import { baseUrl } from '@/services/baseUrl'
import { toast } from 'sonner'

const ProjectContext = createContext()

const ProjectProvider = ({children}) => {

  const {token} = useAuthContext()
  const {workspaceId} = useWorkspaceContext()
  const [projectName, setProjectName] = useState("")
  const [projectType, setProjectType] = useState("")
  const [selectedColor, setSelectedColor] = useState("#A5D426");
  const [projectDesc, setProjectDesc] = useState("")
  const [dueDate, setDueDate] = useState("")
  const [dueTime, setDueTime] = useState("")

    const createProject = async () => {
        try {
            const response = await fetch(`${baseUrl}/projects/${workspaceId}/project`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({
                   projectName: projectName,
                   projectDescription: projectDesc,
                   projectType: projectType,
                   color: selectedColor,
                   dueDate: dueDate,
                   dueTime: dueTime
                })
            })

            if(response.status === 201) {
                console.log("project created")
            }
        } catch (error) {
            toast.error(error.message || "Something went wrong")
        }
    }
  return (
    <ProjectContext.Provider value={{
        createProject,
        setProjectName,
        setProjectType,
        selectedColor,
        setSelectedColor,
        projectName,
        projectType
    }}>
        {children}
    </ProjectContext.Provider>
  )
}

export default ProjectProvider

export const useProjectContext = () => {
    return useContext(ProjectContext)
}