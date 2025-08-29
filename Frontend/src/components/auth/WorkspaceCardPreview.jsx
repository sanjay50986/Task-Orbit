import React from "react";
import workspace_icon from "@/assets/workspace_icon.png";
import { ChevronsUpDown } from "lucide-react";

const WorkspaceCardPreview = () => {
  return (
    <div className="bg-[#E2E5FD] rounded-xl pt-10 pl-10  relative">
      <div className="bg-white h-full rounded-tl-3xl pt-1 pl-1">
        <div className="bg-[#f5f5f5] rounded-tl-3xl h-full flex justify-between ">
          <div className=" w-[70%] space-y-3">
            <div className="border-b pb-6 border-gray-200 p-3 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="rounded-full h-8 w-8 bg-gray-300"></div>
                  <div className="rounded-sm h-4 w-20 bg-gray-300"></div>
                </div>
                <div className="rounded-sm h-5 w-5 bg-gray-300"></div>
              </div>

              <div className="flex items-center justify-between bg-white p-1.5 py-2 rounded-lg ">
                <div className="flex items-center gap-4">
                  <div className="rounded-md h-6 w-6 bg-gray-300"></div>
                  <div className="rounded-sm h-4 w-24 bg-gray-300"></div>
                </div>
                <div className="rounded-sm h-5 w-5 bg-gray-300"></div>
              </div>
            </div>

            <div className="absolute bg-white h-16 w-[72%] border rounded-lg border-gray-300 shadow-xl top-[180px] left-[14px] p-2">
              <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center justify-between">
                  <img
                    src={workspace_icon}
                    alt="workpace_icon"
                    height={50}
                    width={50}
                  />
                  <div>
                    <h5 className="font-medium text-[14px]">Creative Core</h5>
                    <p className="text-gray-400 text-[12px]  ">23 Members</p>
                  </div>
                </div>
                <ChevronsUpDown className="text-[#7f7f89]" size={18} />
              </div>
            </div>

            <div className="mt-20 p-3 space-y-2 border-b border-gray-200">
              <div className="flex items-center gap-4 bg-white p-1.5 py-2 rounded-lg ">
                <div className="rounded-md h-6 w-6 bg-gray-300"></div>
                <div className="rounded-sm h-4 w-40 bg-gray-300"></div>
              </div>

              <div className="flex items-center gap-4  p-1.5 py-2 rounded-lg ">
                <div className="rounded-md h-6 w-6 bg-gray-300"></div>
                <div className="rounded-sm h-4 w-40 bg-gray-300"></div>
              </div>
              <div className="flex items-center gap-4  p-1.5 py-2 rounded-lg ">
                <div className="rounded-md h-6 w-6 bg-gray-300"></div>
                <div className="rounded-sm h-4 w-40 bg-gray-300"></div>
              </div>
              <div className="flex items-center gap-4  p-1.5 py-2 rounded-lg ">
                <div className="rounded-md h-6 w-6 bg-gray-300"></div>
                <div className="rounded-sm h-4 w-40 bg-gray-300"></div>
              </div>
            </div>

            <div className=" p-3 space-y-2">
              <div className="flex items-center gap-4  p-1.5 py-2 rounded-lg ">
                <div className="rounded-md h-6 w-6 bg-gray-300"></div>
                <div className="rounded-sm h-4 w-40 bg-gray-300"></div>
              </div>
              <div className="flex items-center gap-4  p-1.5 py-2 rounded-lg ">
                <div className="rounded-md h-6 w-6 bg-gray-300"></div>
                <div className="rounded-sm h-4 w-40 bg-gray-300"></div>
              </div>
              <div className="flex items-center gap-4  p-1.5 py-2 rounded-lg ">
                <div className="rounded-md h-6 w-6 bg-gray-300"></div>
                <div className="rounded-sm h-4 w-40 bg-gray-300"></div>
              </div>
            </div>
          </div>

          <div className="bg-white  w-[30%] mt-2.5 rounded-tl-xl"></div>
        </div>
      </div>
    </div>
  );
};

export default WorkspaceCardPreview;
