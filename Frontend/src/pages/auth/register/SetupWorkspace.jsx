import TextInput from "@/components/textInput/TextInput";
import { Images, User } from "lucide-react";
import React from "react";
import workspace_icon from '@/assets/workspace_icon.png'

const SetupWorkspace = ({ onContinue }) => {
  return (
    <div className="bg-white rounded-2xl w-[520px] max-md:mx-4 ">
      <div className="p-6">
        <h1 className="text-[22px] font-medium ">Setting your workspace</h1>
        <p className="text-gray-600  text-[14px] pt-2">
          Name your workspace, add projects and tasks, and <br /> edit them
          anytime later.
        </p>
      </div>

      {/* Divider */}
      <div className="w-full h-1 bg-[#7575C6]" />

      {/*------Left---------*/}
      <div className="space-y-2 p-6">
        <div className="bg-[#f1f2fe] px-3 py-1.5 rounded-3xl inline-block">
          <h2 className="text-[12px] font-medium text-[#7575C6]">
            Set Workspace
          </h2>
        </div>

        <h1 className="text-[15px] font-medium pt-2">
          Organise your workspace, name it & describe it, useful when you have a team later on
        </h1>

        <div className="max-sm:border max-sm:border-gray-200 py-4 max-md:px-4 rounded-md flex md:flex-row flex-col items-center justify-between mb-4 mt-6">
          <div className="flex md:flex-row flex-col gap-2.5 items-center ">
            <div className="bg-gray-100 rounded-xl  border border-gray-200 p-2 py-2.5">
              {/* <User className="w-[30px] h-[30px]" /> */}
              <img src={workspace_icon} height={65} width={55}/>
            </div>

            <div className="max-md:text-center">
              <h1 className="text-[15px] font-medium ">Add profile image</h1>
              <p className="text-gray-600  text-[12px] ">
                Add your profile image with min size
              </p>
              <p className="text-gray-600  text-[12px]">
                400 <span>x</span> 400 px, max file size10 MB
              </p>
            </div>
          </div>

          <button className="flex items-center gap-1.5 border max-md:w-full max-md:justify-center max-md:mt-5 border-gray-300 p-2 rounded-md px-3 cursor-pointer shadow">
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

        <div className="flex justify-between items-center gap-4 mt-14">
          <button
            onClick={onContinue}
            className="secondary-btn text-white px-4 py-2 text-sm"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default SetupWorkspace;
