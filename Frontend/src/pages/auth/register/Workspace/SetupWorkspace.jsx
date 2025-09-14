import React, { useState } from "react";
import WorkspaceInfo from "./WorkspaceInfo";
import ProjectInfo from "./projectInfo";
import { useWorkspaceContext } from "@/context/WorkspaceContext";
import { toast } from "sonner";
import { useProjectContext } from "@/context/ProjectContext";

const SetupWorkspace = ({ onContinue }) => {

  const {workspaceName, workspaceDesc} = useWorkspaceContext()
  const {projectName, projectType, selectedColor} = useProjectContext()
  const [subStep, setSubStep] = useState(0);
  
  const subSteps = [
    { label: "Workspace", component: WorkspaceInfo },
    { label: "Project", component: ProjectInfo },
  ];

  const CurrentSubStep = subSteps[subStep];
  const SubComponent = CurrentSubStep.component;

  const nextSub = () => {

    if(subStep === 0) {
      if(!workspaceName || !workspaceDesc) {
        return toast.info("Workspace fields are required")
      }
    }

    if(subStep === 1) {
      if(!projectName || !projectType || !selectedColor) {
        return toast.info("Project fields are required")
      }
    }

    if (subStep < subSteps.length - 1) {
      setSubStep(subStep + 1);
    } else {
      onContinue();
    }
  };
  const progress = ((subStep + 1) / subSteps.length) * 100;

  return (
    <div className="bg-white rounded-xl md:w-[65%]">
      <div className="p-6">
        <h1 className="text-[22px] font-medium ">Setting your workspace</h1>
        <p className="text-gray-600  text-[14px] pt-2 w-[18rem]">
          Name your workspace, add projects and edit them anytime later.
        </p>
      </div>

      <div className="w-full h-1 bg-gray-200">
        <div
          className="h-1 bg-[#7575C6] transition-all duration-700"
          style={{ width: `${progress}%` }}
        />
      </div>

      <SubComponent nextSub={nextSub} label={CurrentSubStep.label} />
    </div>
  );
};

export default SetupWorkspace;
