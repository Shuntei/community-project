import React from "react";
import { useRouter } from "next/router";
import Navbar from "@/components/linda/navbar/navbar";
import AccountBtn from "@/components/linda/buttons/accountBtn";

export default function ResetPassword() {
  const router = useRouter();

  const handleSendLink = () => {
    router.push("./checkEmail");
  };
  return (
    <>
      <Navbar />
      <div className="flex justify-center">
        <div className="flex md:w-5/12 md:py-0 pb-[36px] h-lvh pb-[140px] flex-col justify-center items-center gap-y-2.5 ">
          <div className="flex flex-col self-stretch items-center pb-[34px]">
            <div className="flex self-stretch border-b-[3px] text-white">
              <div className="flex md:flex-row w-full flex-col gap-[35px]">
                <div className="text-[25px] flex justify-center">
                  RESET PASSWORD
                </div>
                <a
                  href="./login"
                  className="md:text-base text-[15px] text-[#9F9F9F] flex justify-end items-end"
                >
                  LOGIN
                </a>
              </div>
              <div className="flex items-end justify-end md:block hidden flex-1 text-[#9F9F9F] font-thin text-xl">
                001946995
              </div>
            </div>
            <div className="flex flex-col items-start self-stretch">
              {/* Email input */}
              <div className="flex flex-col border-b self-stretch border-[#9F9F9F]">
                <div className="flex gap-[30px] font-medium text-xl">
                  <div className="text-[#9F9F9F] text-base">EMAIL</div>
                </div>
                <div className="text-[#EA7E7E] font-medium py-1 text-xs flex-1">
                  INVALID EMAIL
                </div>
                <div className="pl-[66px] py-3">
                  {" "}
                  <input
                    type="text"
                    className="bg-inherit focus:outline-none md:text-base text-[14px] text-white flex self-stretch w-full flex-1 text-base"
                  />{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AccountBtn onClick={handleSendLink} text='send link' />
    </>
  );
}
