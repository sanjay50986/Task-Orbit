import { ChevronsUpDown, FolderOpenDot } from "lucide-react";
import React from "react";

const ProjectCardPreview = ({color}) => {
  console.log(color)
  return (
    <div className="bg-[#E2E5FD] rounded-xl pt-10 pl-10  relative">
      <div className="bg-[#f5f5f5] h-full rounded-tl-3xl pt-1 pl-1">
        <div className="bg-white rounded-tl-3xl h-full ">
          <div className="  space-y-3">
            <div className="border-b pb-6 border-gray-200 p-3 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="rounded-full h-8 w-8 bg-gray-300"></div>
                  <div className="rounded-sm h-4 w-20 bg-gray-300"></div>
                </div>
                <div className="rounded-sm h-5 w-5 bg-gray-300"></div>
              </div>
            </div>

            <div className="absolute bg-white h-16 w-[72%] border rounded-lg border-gray-300 shadow-xl top-[105px] left-[14px] p-2.5">
              <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center justify-between">
                  <FolderOpenDot size={40} style={{color: color}}/>
                  <div>
                    <h5 className="font-medium text-[16px] text-nowrap">
                      Arotech Web Page
                    </h5>
                    <p className="text-gray-500 text-[12px]  ">
                      Website design project
                    </p>
                  </div>
                </div>
                <ChevronsUpDown className="text-[#7f7f89]" size={18} />
              </div>
            </div>
          </div>

          <div className="mt-16 p-3 space-y-2 border-b border-gray-200">
            <div className="flex justify-between">
              <div className="flex items-center gap-2 ">
                <div className="rounded-sm h-5 w-5 bg-gray-300"></div>
                <div className="rounded-sm h-5 w-16 bg-gray-300"></div>
              </div>

              <div className="flex items-center  gap-2">
                <div className="rounded-sm h-5 w-5 bg-gray-300"></div>
                <div className="rounded-sm h-5 w-16 bg-gray-300"></div>
              </div>

              <div className="flex items-center  gap-2">
                <div className="rounded-sm h-5 w-5 bg-gray-300"></div>
                <div className="rounded-sm h-5 w-16 bg-gray-300"></div>
              </div>
            </div>

            <div className="border-l border-t border-b rounded-tl-xl rounded-bl-xl border-gray-200 mt-4 ">
              <div className="border-b border-gray-200 p-3">
                <div className="rounded-sm h-5 w-[200px] bg-gray-300"></div>
              </div>
              <div className="space-y-4 mt-5 p-3">
                <div className="rounded-sm h-5 w-[200px] bg-gray-300"></div>

                <div className="rounded-sm h-5 w-[200px] bg-gray-300"></div>

                <div className="rounded-sm h-5 w-[200px] bg-gray-300"></div>
              </div>
            </div>

            <div className="border-l border-t border-b rounded-tl-xl rounded-bl-xl border-gray-200 mt-4 ">
              <div className="border-b border-gray-200 p-3">
                <div className="rounded-sm h-5 w-[200px] bg-gray-300"></div>
              </div>
              <div className="space-y-4 mt-5 p-3">
                <div className="flex justify-between">
                  <div className="rounded-sm h-5 w-[200px] bg-gray-300"></div>
                  <div className="rounded-sm h-5 w-12 bg-gray-300"></div>
                </div>

                <div className="flex justify-between">
                  <div className="rounded-sm h-5 w-[200px] bg-gray-300"></div>
                  <div className="rounded-sm h-5 w-12 bg-gray-300"></div>
                </div>

                <div className="flex justify-between">
                  <div className="rounded-sm h-5 w-[200px] bg-gray-300"></div>
                  <div className="rounded-sm h-5 w-12 bg-gray-300"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCardPreview;
