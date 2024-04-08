import React from "react";
import Navbar from "@/components/linda/navbar/navbar";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import AccountBtn from "@/components/linda/buttons/accountBtn";

export default function CreateNewPassword() {
  return (
    <>
      <Navbar />
      <div className="flex w-full md:py-0 px-[24px] pt-[100px] pb-[150px] h-lvh flex-col justify-center items-center gap-y-2.5 ">
        <div className="flex flex-col md:w-5/12 items-center pb-[34px]">
          <div className="flex self-stretch border-b-[3px] text-white">
            <div className="flex md:flex-row w-full flex-col gap-[35px]">
              <div className="text-[25px] md:pb-0 pb-[40px] flex justify-center">CREATE NEW PASSWORD</div>
            </div>
            <div className="flex items-end justify-end md:block hidden flex-1 text-[#9F9F9F] font-thin text-xl">
              001946995
            </div>
          </div>
          <div className="flex flex-col items-start self-stretch">
            {/* Password input */}
            <div className="flex flex-col border-b self-stretch border-[#9F9F9F]">
              <div className="flex gap-[30px] font-medium text-xl">
                <div className="text-[#9F9F9F] text-base">NEW PASSWORD</div>
              </div>
              <div className="text-[#EA7E7E] font-medium py-1 text-xs flex-1">USE 8 OR MORE CHARACTERS MIXING LETTERS AND NUMBERS</div>
              <div className="flex pl-[66px] py-3">
                {" "}
                <input
                  type="password"
                  className="bg-inherit focus:outline-none text-base text-white flex self-stretch w-full flex-1 text-base"
                />{" "}
                <IoMdEye className="md:text-3xl text-xl text-white" />
              </div>
            </div>
             {/* Confirm Password input */}
             <div className="flex flex-col border-b self-stretch border-[#9F9F9F]">
              <div className="flex gap-[30px] font-medium text-xl">
                <div className="text-[#9F9F9F] text-base">CONFIRM PASSWORD</div>
              </div>
              <div className="text-[#EA7E7E] font-medium py-1 text-xs flex-1"></div>
              <div className="flex pl-[66px] py-3">
                {" "}
                <input
                  type="password"
                  className="bg-inherit focus:outline-none text-base text-white flex self-stretch w-full flex-1 text-base"
                />{" "}
                <IoMdEye className="md:text-3xl text-xl text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <AccountBtn text='save'/>
    </>
  );
}
