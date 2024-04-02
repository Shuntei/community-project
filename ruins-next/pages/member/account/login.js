import React from "react";
import Navbar from "@/components/linda/navbar/navbar";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import GoogleBtn from "@/components/linda/buttons/googleBtn";
import AccountBtn from "@/components/linda/buttons/accountBtn";

export default function Login() {
  return (
    <>
      <Navbar />
      <div className="flex h-lvh justify-center">
        <div className="flex md:w-1/2 md:py-0 px-[24px] pt-[75px] pb-[36px] md:h-lvh h-auto flex-col justify-center items-center gap-y-2.5 ">
          <div className="flex flex-col self-stretch items-center pb-[34px]">
            <div className="flex self-stretch border-b-[3px] text-white">
              <div className="flex md:flex-row w-full flex-col gap-[35px]">
                <div className="text-[25px] flex justify-center">LOGIN</div>
                <a
                  href="./signup"
                  className="md:text-base text-[15px] text-[#9F9F9F] flex justify-end items-end"
                >
                  SIGNUP
                </a>
              </div>
              <div className="flex items-end justify-end md:block hidden flex-1 text-[#9F9F9F] font-thin text-xl">
                001946995
              </div>
            </div>
            <div className="flex flex-col items-start self-stretch">
              {/* username input */}
              <div className="flex flex-col flex-1 border-b self-stretch border-[#9F9F9F]">
                <div className="flex gap-[30px] font-medium text-xl">
                  <div className="text-[#9F9F9F] text-base">USERNAME</div>
                </div>
                <div className="text-[#EA7E7E] font-medium py-1 text-xs flex-1">
                  THIS NAME IS ALREADY TAKEN, TRY ANOTHER
                </div>
                <div className="flex pl-[66px] py-3">
                  {" "}
                  <input
                    type="text"
                    name="username"
                    className="bg-inherit focus:outline-none text-base text-white flex self-stretch w-full flex-1 text-base"
                  />{" "}
                </div>
              </div>
              {/* Password input */}
              <div className="flex flex-col border-b self-stretch border-[#9F9F9F]">
                <div className="flex gap-[30px] font-medium text-xl">
                  <div className="text-[#9F9F9F] text-base">PASSWORD</div>
                </div>
                <div className="text-[#EA7E7E] font-medium py-1 text-xs flex-1"></div>
                <div className="flex pl-[66px] py-3">
                  {" "}
                  <input
                    type="password"
                    name="password"
                    className="bg-inherit focus:outline-none text-base text-white flex self-stretch w-full flex-1 text-base"
                  />{" "}
                  <IoMdEye className="md:text-3xl text-xl text-white" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:gap-[100px] gap-0 md:flex-row flex-col text-white md:items-center">
            <a href="./resetPassword" className="border-b border-white ml-auto">
              FORGOT PASSWORD
            </a>
            <GoogleBtn className="mt-[50px]" />
          </div>
        </div>
      </div>
      <AccountBtn text="login" />
    </>
  );
}
