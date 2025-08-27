import React from "react";
import create_account_icon from "@/assets/create_account_icon.png";

const SetupSuccessShow = () => {
  return (
    <div className="flex justify-center items-center rounded-xl max-sm:mx-4 w-[460px] bg-white p-1">
      <div className="bg-gradient-to-b  from-[#7575C6]/10 from-10% to-white to-80% w-full  rounded-xl flex flex-col items-center p-8">
        <img
          src={create_account_icon}
          alt="create account icon"
          height={160}
          width={160}
        />
        <h1 className="text-[20px] font-semibold py-4 text-nowrap">
          Success create account!
        </h1>
        <p className="text-gray-600 text-center text-[14px]">
          Congratulations, you have successfully created an account and set up a
          workspace, from now on!
        </p>
        <div className="flex justify-center mt-5">
          <button className="secondary-btn text-white px-4 py-2 text-sm">
            Go to home
          </button>
        </div>
      </div>
    </div>
  );
};

export default SetupSuccessShow;
