import React, { createContext, useContext, useState } from 'react'


const ProjectContext = createContext()


const ProjectProvider = ({children}) => {

  const [ProjectName, setProjectName] = useState("")
  const [ProjectType, setProjectType] = useState("")
  const [ProjectColor, setProjectColor] = useState("")

  const createProject = async () => {
        try {
            if(!workspaceName || !workspaceDesc) {
                toast.info("Workpace field are required!")
            }

            const response = await fetch(`${baseUrl}/projects/${Proje}`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({
                    workspaceName: ProjectName,
                    workSpaceDescription: ProjectType 
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
    <ProjectContext.Provider value={{}}>
        {children}
    </ProjectContext.Provider>
  )
}

export default ProjectProvider

export const useProjectContext = () => {
    return useContext(ProjectContext)
}