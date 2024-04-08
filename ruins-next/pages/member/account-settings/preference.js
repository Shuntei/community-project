import React from "react";
import Navbar from "@/components/linda/navbar/navbar";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { MdCheckBox } from "react-icons/md";
import AccountLayout from "@/components/linda/accountLayout";

export default function Preference() {
  return (
    <>
        <div className="flex w-full flex-col pt-[80px] items-center justify-center">
          <div className="md:py-[33px] md:px-[60px] px-[16px] w-full md:w-auto rounded-xl p-0 flex flex-col items-center md:justify-center md:bg-[#57575747] md:border-2 md:border-white md:shadow-[12px_12px_30px_0_rgba(255,255,255,0.3)] md:shadow-[-12px_-12px_30px_0_rgba(255,255,255,0.4)]">
            <div className="flex pb-[17px] flex-col md:justify-center items-center gap-[20px]">
              <div className="text-[36px] font-semibold pb-[10px] w-full md:w-auto">
                Preferences
              </div>
              <span className="text-[12px] md:max-w-[300px] md:text-center w-full">
                We respect your right to control the content that you wish to
                receive
              </span>
              <div className="flex flex-col items-start gap-[20px]">
                <div className="py-[10px] border-b border-white text-[12px] font-medium">
                  What you’d like to receive:
                </div>
                <div className="flex flex-col gap-[10px]">
                  <div className="flex gap-[6px] items-center">
                    <button>
                      <MdCheckBox className="text-xl" />
                    </button>
                    <p className="text-sm">Live & activity notifications</p>
                  </div>
                  <div className="flex gap-[6px] items-center">
                    <button>
                      <MdCheckBox className="text-xl" />
                    </button>
                    <p className="text-sm">Product updates and highlights</p>
                  </div>
                  <div className="flex gap-[6px] items-center">
                    <button>
                      <MdCheckBox className="text-xl" />
                    </button>
                    <p className="text-sm">Trip recommendations</p>
                  </div>
                  <div className="flex gap-[6px] items-center">
                    <button>
                      <MdCheckBox className="text-xl" />
                    </button>
                    <p className="text-sm">Game updates</p>
                  </div>
                  <div className="flex gap-[6px] items-center">
                    <button>
                      <MdCheckBoxOutlineBlank className="text-xl" />
                    </button>
                    <p className="text-sm">Unsubscribe from all</p>
                  </div>
                </div>
              </div>
            </div>
            <button className="bg-white text-black hover:bg-black hover:text-white flex text-[15px] max-w-[300px] mt-[10px] italic py-[18px] md:px-[98px] w-full border border-black hover:border-white justify-center items-center">
              SAVE CHANGE
            </button>
          </div>
        </div>
    </>
  );
}

Preference.getLayout = function getLayout(page) {
  return <AccountLayout>{page}</AccountLayout>;
};
