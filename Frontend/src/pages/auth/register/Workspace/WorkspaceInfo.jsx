import React from "react";
import workspace_icon from "@/assets/workspace_icon.png";
import TextInput from "@/components/textInput/TextInput";
import { Images, User } from "lucide-react";
import WorkspaceCardPreview from "@/components/auth/WorkspaceCardPreview";

const WorkspaceInfo = ({ nextSub, label }) => {
  return (
    <div className="flex ">
      <div className="flex flex-col justify-between md:w-[50%] p-6 ">
        <div className="space-y-2">
          <div className="bg-[#f1f2fe] px-3 py-1.5 rounded-3xl inline-block">
            <h2 className="text-[12px] font-medium text-[#7575C6]">
              {`Set ${label}`}
            </h2>
          </div>

          <h1 className="text-[15px] font-medium pt-2">
            Organise your workspace, name it & describe it, useful when you have
            a team later on
          </h1>

          <div className="max-lg:border max-lg:border-gray-200 py-4 max-lg:px-4 rounded-md flex lg:flex-row flex-col items-center justify-between mb-4 mt-6">
            <div className="flex lg:flex-row flex-col gap-2.5 items-center ">
              <div className="bg-gray-100 rounded-xl  border border-gray-200 p-2 py-2.5">
                {/* <User className="w-[30px] h-[30px]" /> */}
                <img src={workspace_icon} height={65} width={55} />
              </div>

              <div className="max-lg:text-center">
                <h1 className="text-[15px] font-medium ">Add profile image</h1>
                <div className="text-gray-600  text-[12px] pt-1">
                  <p>size 400 x 400 px, max.</p>
                  <p>file size 10 MB</p>
                </div>
              </div>
            </div>

            <button className="flex items-center gap-1.5 border max-md:w-full max-md:justify-center max-lg:mt-5 border-gray-300 p-2 rounded-md px-3 cursor-pointer shadow">
              <Images className="w-[18px] h-[18px]" />
              <span className="font-medium text-[13px]">Upload</span>
            </button>
          </div>

          <TextInput
            label="Workspace name"
            placeholder="Enter name"
            type="text"
          />

          <div className="flex flex-col mt-4">
            <label className="font-medium text-[13px]">Description</label>
            <textarea
              className="border border-gray-200 p-2 rounded-md outline-none mt-1 text-[14px] h-[150px] resize-none"
              placeholder="Add workspace description"
            />
          </div>
        </div>

        <div className="flex items-center justify-between mt-6">
          <button className="primary-btn px-4 text-black">Skip for now</button>

          <button onClick={nextSub} className="secondary-btn px-4  text-white">
            Continue
          </button>
        </div>
      </div>

      <div className="md:w-[50%] p-6 max-md:hidden">
        <WorkspaceCardPreview />
      </div>
    </div>
  );
};

export default WorkspaceInfo;
