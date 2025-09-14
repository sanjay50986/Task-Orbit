import ProjectCardPreview from "@/components/auth/ProjectCardPreview";
import TextInput from "@/components/textInput/TextInput";
import { useProjectContext } from "@/context/ProjectContext";
import { Check, Images, User } from "lucide-react";
import React, { useState } from "react";

const SetupProject = ({ nextSub }) => {
  const colors = [
    "#36678D",
    "#6A68B1",
    "#55C0D3",
    "#754D75",
    "#A969DE",
    "#E573F1",
    "#2EDBCD",
    "#5EBB90",
    "#A5D426",
    "#FB6BA9",
    "#FFE13A",
    "#F9A069",
    "#F26964",
    "#BDBDBD",
    "#5A5A5A",
    "#8E6651",
  ];

  
  const { createProject, setProjectName, setProjectType, setSelectedColor, selectedColor } = useProjectContext();

  return (
    <div className="flex ">
      <div className="flex flex-col justify-between md:w-[50%] p-6">
        <div className="space-y-2">
          <div className="bg-[#f1f2fe] px-3 py-1.5 rounded-3xl inline-block">
            <h2 className="text-[12px] font-medium text-[#7575C6]">
              Add project
            </h2>
          </div>

          <h1 className="text-[15px] font-medium pt-2 pb-3">
            Create your first project, what project are you working on now?
          </h1>

          <div className="space-y-3.5">
            <TextInput
              label="Project name"
              placeholder="Aerotech web design"
              type="text"
              onChange={(e) => setProjectName(e.target.value)}
            />

            <TextInput
              label="Project type"
              placeholder="Web design project"
              type="text"
              onChange={(e) => setProjectType(e.target.value)}
            />

            <div className="flex flex-col">
              <h2 className="font-medium text-[13px]">Color</h2>
              <div className="border border-gray-200 p-3 rounded-md mt-1">
                <div className="grid xl:grid-cols-8 grid-cols-4  gap-2 max-w-md mx-auto">
                  {colors.map((color) => (
                    <div
                      key={color}
                      className={`w-10 h-10 rounded-full cursor-pointer relative flex items-center justify-center transition-all duration-200`}
                      style={{ backgroundColor: color }}
                      onClick={() => setSelectedColor(color)}
                    >
                      {selectedColor === color && (
                        <div className="absolute inset-0 rounded-full border-2 border-white shadow-md flex items-center justify-center">
                          <Check className="text-white w-4 h-4" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center gap-4 mt-6 ">
          <button className="primary-btn text-black px-4 py-2 text-sm">
            Skip for now
          </button>

          <button
            onClick={() => { nextSub(), createProject() }}
            className="secondary-btn text-white px-4 py-2 text-sm"
          >
            Continue
          </button>
        </div>
      </div>

      <div className="md:w-[50%] p-6 max-md:hidden">
        <ProjectCardPreview color={selectedColor} />
      </div>
    </div>
  );
};

export default SetupProject;
