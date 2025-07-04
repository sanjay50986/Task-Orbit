import { CalendarDays, CircleDashed, Clock10, ClockFading, FolderOpenDot, ScrollText, Users } from 'lucide-react'
import React from 'react'

const CreateProject = ({ createProject, closeCreateProject }) => {
    return (
        <>
            {/* Backdrop Overlay */}
            {createProject && (
                <div
                    className="fixed inset-0 bg-gray-800/30 bg-opacity-50 backdrop-blur-[2px] transition-opacity"
                    onClick={closeCreateProject}
                />
            )}

            {/* Slide-in Panel */}
            <div
                className={`
      fixed top-0 right-0 bottom-0 z-20 left-auto bg-white shadow-xs
      transform transition-transform duration-500 ease-in-out xl:w-[30%] lg:w-[40%] sm:w-[60%] w-[95%]
      ${createProject ? "translate-x-0" : "translate-x-full"}
      overflow-y-auto max-h-screen hide-scrollbar
    `}
            >
                <div className="border-b p-5 border-gray-200 flex items-center gap-3">
                    <h2 className="text-[16px] font-medium text-[#4B4F5C]">Create New Project</h2>
                </div>

                <div className="my-6 px-5">
                    <input
                        type="text"
                        placeholder="Project title"
                        className="w-full font-semibold text-2xl outline-none"
                    />

                    <div className="grid sm:grid-cols-[160px_1fr] grid-cols-2 gap-y-7 mt-6 text-[15px] text-[#4B4F5C] font-medium">
                        {/* Status */}
                        <div className="flex items-center gap-2.5">
                            <CircleDashed size={18} />
                            <span className="text-[14px]">Status</span>
                        </div>
                        <select className="border border-gray-300 px-2 text-[14px] font-medium py-1 shadow-xs rounded-md outline-none w-[10rem]">
                            <option className="font-medium">Planned</option>
                            <option className="font-medium">In Progress</option>
                            <option className="font-medium">Completed</option>
                            <option className="font-medium">On Hold</option>
                        </select>

                        {/* Start Date */}
                        <div className="flex items-center gap-2.5">
                            <CalendarDays size={18} />
                            <span>Start Date</span>
                        </div>
                        <input
                            type="date"
                            className="outline-none"
                        />

                        {/* End Date */}
                        <div className="flex items-center gap-2.5">
                            <Clock10 size={18} />
                            <span>End Date</span>
                        </div>
                        <input
                            type="date"
                            className="outline-none"
                        />

                        {/* Priority */}
                        <div className="flex items-center gap-2.5">
                            <ClockFading size={18} />
                            <span>Priority</span>
                        </div>
                        <select className="border border-gray-300 px-2 text-[14px] font-medium py-1 shadow-xs rounded-md outline-none w-[9rem]">
                            <option className="font-medium">High</option>
                            <option className="font-medium">Medium</option>
                            <option className="font-medium">Low</option>
                        </select>

                        {/* Project Owner / Manager */}
                        <div className="flex items-center gap-2.5">
                            <Users size={18} />
                            <span>Project Owner</span>
                        </div>
                        <select className="border border-gray-300 px-2 text-[14px] font-medium py-1 shadow-xs rounded-md outline-none w-[9rem]">
                            <option className="font-medium">Select owner</option>
                        </select>

                        {/* Description */}
                        <div className="flex gap-2.5">
                            <ScrollText size={18} />
                            <span>Description</span>
                        </div>
                        <textarea
                            className="outline-none  border border-gray-200 rounded-lg p-2.5"
                            placeholder="Write project description"
                        />
                    </div>

                    <div className="flex my-12 justify-end gap-3">
                        <button onClick={closeCreateProject} className="cancel-btn">
                            Cancel
                        </button>
                        <button className="create-Btn">Create Project</button>
                    </div>
                </div>
            </div>
        </>

    )
}

export default CreateProject
