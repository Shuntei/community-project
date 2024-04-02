import React, { useRef, useState } from "react";
import Navbar from "@/components/linda/navbar/navbar";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import Checkbox from "@/public/checkbox.svg";
import CheckboxEmpty from "@/public/CheckboxEmpty.svg";
import Image from "next/image";
import GoogleBtn from "@/components/linda/buttons/googleBtn";
import AccountBtn from "@/components/linda/buttons/accountBtn";
import { z } from "zod";
import Router, { useRouter } from "next/router";
import { MB_SIGNUP } from "@/components/config/api-path";

const schemaName = z
  .string()
  .min(2, { message: "Your user name is too short" });
const schemaEmail = z.string().email({ message: "Email address is wrong" });

export default function Signup() {
  const router = useRouter()
  const [checked, setChecked] = useState(false);
  const [myForm, setMyForm] = useState({
    email: "",
    password: "",
    username: "",
    phone: "",
    birthday: "",
  });

  const [errors, setErrors] = useState({
    hasErrors: false,
    email: "",
    password: "",
    username: "",
    phone: "",
    birthday: "",
  });

  const handleChange = (e) => {
    setMyForm({ ...myForm, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    let initErrors = {
      hasErrors: false,
      email: "",
      password: "",
      username: "",
      phone: "",
      birthday: "",
    };

    const emailZod = schemaEmail.safeParse(myForm.email);
    if(!emailZod.success){
      initErrors = {
        ...initErrors, 
        hasErrors: true,
        email: emailZod.error.issues[0].message
      }
    }

    const nameZod = schemaName.safeParse(myForm.username)
    if(!nameZod.success){
      initErrors = {
        ...initErrors,
        hasErrors: true,
        username: nameZod.error.issues[0].message
      }
    }

    if(initErrors.hasErrors){
      setErrors(initErrors)
      return
    }

    const r = await fetch(MB_SIGNUP, {
      method: 'post',
      body: JSON.stringify(myForm),
      headers: {
        "Content-Type": "application/json"
      }
    })

    const result = await r.json()
    console.log(result);
    
    // if(result.success){
    //   router.push('/')
    // }
  };

  return (
    <>
      <Navbar />
      <form method="post" onSubmit={handleFormSubmit}>
        <div className="flex justify-center">
          <div className="flex md:w-1/2 md:py-0 px-[24px] pt-[75px] pb-[36px] md:h-lvh h-auto flex-col justify-center items-center gap-y-2.5 ">
            <div className="flex flex-col self-stretch items-center pb-[34px]">
              <div className="flex self-stretch border-b-[3px] text-white">
                <div className="flex md:flex-row w-full flex-col gap-[35px]">
                  <div className="text-[25px] flex justify-center">SIGNUP</div>
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
                    <div className="bg-white px-2 text-black">1</div>
                    <div className="text-[#9F9F9F] text-base">EMAIL</div>
                  </div>
                  <div className="text-[#EA7E7E] font-medium py-1 text-xs flex-1 uppercase">
                    {errors.email}
                  </div>
                  <div className="pl-[66px] py-3">
                    {" "}
                    <input
                      type="text"
                      name="email"
                      value={myForm.email}
                      onChange={handleChange}
                      className="bg-inherit focus:outline-none md:text-base text-[14px] text-white flex self-stretch w-full flex-1 text-base"
                    />{" "}
                  </div>
                </div>
                {/* Password input */}
                <div className="flex flex-col border-b self-stretch border-[#9F9F9F]">
                  <div className="flex gap-[30px] font-medium text-xl">
                    <div className="bg-white px-2 text-black">2</div>
                    <div className="text-[#9F9F9F] text-base">PASSWORD</div>
                  </div>
                  <div className="text-[#EA7E7E] font-medium py-1 text-xs flex-1"></div>
                  <div className="flex pl-[66px] py-3">
                    {" "}
                    <input
                      type="password"
                      name="password"
                      value={myForm.password}
                      onChange={handleChange}
                      className="bg-inherit focus:outline-none text-base text-white flex self-stretch w-full flex-1 text-base"
                    />{" "}
                    <IoMdEye className="md:text-3xl text-xl text-white" />
                  </div>
                </div>
                <div className="flex w-full md:flex-row flex-col">
                  {/* username input */}
                  <div className="flex flex-col flex-1 border-b self-stretch border-[#9F9F9F]">
                    <div className="flex gap-[30px] font-medium text-xl">
                      <div className="bg-white px-2 text-black">3</div>
                      <div className="text-[#9F9F9F] text-base">USERNAME</div>
                    </div>
                    <div className="text-[#EA7E7E] font-medium py-1 text-xs flex-1 uppercase">
                      {errors.username}
                    </div>
                    <div className="flex pl-[66px] py-3">
                      {" "}
                      <input
                        type="text"
                        name="username"
                        value={myForm.username}
                        onChange={handleChange}
                        className="bg-inherit focus:outline-none text-base text-white flex self-stretch w-full flex-1 text-base"
                      />{" "}
                    </div>
                  </div>
                  {/* phone input */}
                  <div className="flex flex-col flex-1 border-b self-stretch border-[#9F9F9F]">
                    <div className="flex gap-[30px] font-medium text-xl">
                      <div className="bg-white px-2 text-black">4</div>
                      <div className="text-[#9F9F9F] text-base">PHONE</div>
                    </div>
                    <div className="text-[#EA7E7E] font-medium py-1 text-xs flex-1"></div>
                    <div className="flex pl-[66px] py-3">
                      {" "}
                      <input
                        type="text"
                        name="phone"
                        value={myForm.phone}
                        onChange={handleChange}
                        className="bg-inherit focus:outline-none text-base text-white flex self-stretch w-full flex-1 text-base"
                      />{" "}
                    </div>
                  </div>
                  {/* Birthday, terms & agreement */}
                </div>
                <div className="flex flex-col w-full">
                  <div className="flex flex-col border-b self-stretch border-[#9F9F9F]">
                    <div className="flex gap-[30px] font-medium text-xl">
                      <div className="bg-white px-2 text-black">5</div>
                      <div className="text-[#9F9F9F] text-base">BIRTHDAY</div>
                    </div>
                    <div className="text-[#EA7E7E] font-medium py-1 text-xs flex-1"></div>
                    <div className="flex relative pl-[66px] py-3 self-stretch justify-between">
                      {" "}
                      <input
                        placeholder="YYYY/MM/DD"
                        type="date"
                        name="birthday"
                        value={myForm.birthday}
                        onChange={handleChange}
                        className="bg-inherit focus:outline-none text-base text-white flex self-stretch w-full flex-1 text-base"
                      />{" "}
                      <div className="flex gap-2.5 md:relative md:top-0 absolute top-[100px] right-0">
                        <div
                          onClick={() => {
                            setChecked(!checked);
                          }}
                        >
                          <Image
                            alt=""
                            src={checked ? Checkbox : CheckboxEmpty}
                            className="cursor-pointer md:w-[30px] w-[20px]"
                          />
                        </div>
                        {/* <Image src={CheckboxEmpty} className="md:w-[30px] w-[20px] /> */}
                        <div className="text-white md:text-[15px] text-[12px] flex items-end text-[#F1F1F1]">
                          I ACCEPT THE ACCOUNT AGREEMENT
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <GoogleBtn className="my-[70px]" />
          </div>
        </div>
        {/* <AccountBtn onClick={()=>{formRef.current.submit()}} type="button" text="create account" /> */}
        <button
          type="submit"
          className="flex w-full bg-white hover:bg-black pb-[13px] md:absolute bottom-0 left-0 fixed"
        >
          <div className="flex uppercase w-full items-center justify-center md:py-[30px] py-[20px] border-b border-black hover:border-white hover:text-white md:text-[24px] text-[20px]">
            create account
          </div>
        </button>
      </form>
    </>
  );
}
