import React from "react";
import Navbar from "@/components/linda/navbar/navbar";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import AccountLayout from "@/components/linda/accountLayout";

export default function EditPassword() {
  return (
    <>
        <div className="flex w-full flex-col items-center md:p-0 p-[30px] gap-[37px]">
          <div className="pt-[50px] md:px-[80px] flex items-start w-full">
            <div className="flex flex-col gap-[30px] w-full">
              <div className="md:text-[30px] text-[24px] font-medium">
                Edit password
              </div>
              <div className="flex flex-col gap-[14px]">
                <div className="md:text-base text-[14px]">
                  For your security, we highly recommend that you choose a
                  unique password that you don’t use for any other online
                  account.
                </div>
              </div>
            </div>
          </div>
          <div className="gap-[25px] flex md:w-[40%] w-full flex-col">
            <div className="flex w-full flex-col gap-[6px]">
              <div className="text-[#969696] text-[14px]">Old password</div>
              <div className="flex relative">
                {" "}
                <input
                  type="password"
                  className="bg-[#191919] h-[44px] rounded focus:outline-none text-base text-white flex w-full p-[15px]"
                />{" "}
                <IoMdEye className="absolute bottom-[10px] right-[15px] md:text-3xl text-xl text-white" />
              </div>
            </div>
            <div className="flex w-full flex-col gap-[6px]">
              <div className="text-[#969696] text-[14px]">New password</div>
              <div className="flex relative">
                {" "}
                <input
                  type="password"
                  className="bg-[#191919] h-[44px] rounded focus:outline-none text-base text-white flex w-full p-[15px]"
                />{" "}
                <IoMdEye className="absolute bottom-[10px] right-[15px] md:text-3xl text-xl text-white" />
              </div>
            </div>
            <div className="flex w-full flex-col gap-[6px]">
              <div className="text-[#969696] text-[14px]">Repeat password</div>
              <div className="flex relative">
                {" "}
                <input
                  type="password"
                  className="bg-[#191919] h-[44px] rounded focus:outline-none text-base text-white flex w-full p-[15px]"
                />{" "}
                <IoMdEye className="absolute bottom-[10px] right-[15px] md:text-3xl text-xl text-white" />
              </div>
            </div>
            <button className="bg-black hover:bg-[#7A7A7A] flex items-center justify-center w-full py-[18px] italic border border-white">
              SAVE CHANGE
            </button>
          </div>
        </div>
    </>
  );
}

EditPassword.getLayout = function getLayout(page) {
  return <AccountLayout>{page}</AccountLayout>;
};