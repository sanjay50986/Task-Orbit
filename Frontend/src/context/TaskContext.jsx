import React, { createContext, useContext, } from 'react'

const TaskContext = createContext()

const TaskProvider = ({ children }) => {
    
    return (
        <TaskContext.Provider value={{
           
        }}>
            {children}
        </TaskContext.Provider>
    )
}

export default TaskProvider

export const useTaskContext = () => {
    return useContext(TaskContext)
}
