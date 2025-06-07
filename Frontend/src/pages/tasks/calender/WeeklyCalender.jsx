import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";


const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const hours = Array.from({ length: 12 }, (_, i) => 8 + i); // 8 AM to 7 PM

function WeeklyCalender() {
  return (
    <div className="w-full border border-gray-200 rounded-lg">
      <div className="grid grid-cols-[100px_repeat(7,1fr)]  text-sm ">
        <div className="flex  items-center justify-center gap-5">
          <ChevronLeft  size={18}/>
          <ChevronRight  size={18} />
        </div>
        {days.map((day) => (
          <div key={day} className="text-center py-3 border-l first:border-l-0 border-gray-200">
            {day} 12
          </div>
        ))}
      </div>
      <div className="grid grid-cols-[100px_repeat(7,1fr)]">
        {hours.map((hour) => (
          <div key={"row-" + hour} className="contents">
            <div className="border-t text-[13px] text-center border-gray-200 pt-2 text-[#4B4F5C]">
              {hour > 12 ? `${hour - 12} PM` : `${hour} AM`}
            </div>
            {days.map((day) => (
              <div
                key={day + hour} 
                className="relative border-t border-l  border-gray-200 h-[160px] hover:bg-gray-50 transition-colors"
              >
               <div className="absolute border-l-3 z-0 top-2.5 left-2.5 right-2.5 p-1.5 h-[130px] bg-[#FCF9FF] border border-[#A259D1] rounded-md text-[11px]">
                  <h2>Design homepage layout</h2>
               </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeeklyCalender;
