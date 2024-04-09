import { useState, useEffect } from 'react'
import Navbar from '@/components/linda/navbar/navbar'
import { IoMdEye } from 'react-icons/io'
import { IoMdEyeOff } from 'react-icons/io'
import GoogleBtn from '@/components/linda/buttons/googleBtn'
import AccountBtn from '@/components/linda/buttons/accountBtn'
import { useAuth } from '@/contexts/auth-context'
import { z } from 'zod'
import { useRouter } from 'next/router'

const nameRe = new RegExp(/^[a-zA-Z0-9]+$/)
const schemaName = z
  .string()
  .min(3, { message: '' })
  .regex(nameRe, { message: '' })
const passwordRe = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)
const schemaPassword = z.string().regex(passwordRe, { message: '' })
const schemaEmail = z.string().email({ message: '' })

export default function Login() {
  const { login } = useAuth()
  const [showPass, setShowPass] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [loginFailed, setLoginFailed] = useState(false)
  const router = useRouter()

  const [myForm, setMyForm] = useState({
    account: '',
    password: '',
  })

  const [errors, setErrors] = useState({
    hasErrors: false,
    account: '',
    password: '',
  })

  const handleChange = (e) => {
    setMyForm({ ...myForm, [e.target.name]: e.target.value })
  }

  const handleShowPass = () => {
    setShowPass(!showPass)
  }

  const updateError = () => {
    let initErrors = {
      hasErrors: false,
      account: '',
      password: '',
    }

    if (loginFailed) {
      initErrors = {
        ...initErrors,
        hasErrors: false,
        password: 'Account or password is wrong',
      }
    }

    if (!myForm.account) {
      initErrors = {
        ...initErrors,
        hasErrors: true,
        account: 'Cannot be blank',
      }
    }

    if (!myForm.password) {
      initErrors = {
        ...initErrors,
        hasErrors: true,
        password: 'Cannot be blank',
      }
    } 

    if (initErrors.hasErrors) {
      setErrors(initErrors)
      return false
    } else {
      setErrors(initErrors)
      return true
    }
  }

  const handleLogin = (e) => {
    e.preventDefault()
    setSubmitted(true)

    const errorResult = updateError()

    if (errorResult) {
      login(myForm.account, myForm.password).then((result) => {
        if (result) {
          router.push('/')
        } else {
          console.log('failed')
          setLoginFailed(true)
        }
      })
    }
  }

  useEffect(() => {
    if (submitted) {
      updateError()
    }
  }, [myForm, loginFailed])

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
                  <div className="text-[#9F9F9F] text-base">ACCOUNT</div>
                </div>
                <div className={`h-[24px] ${errors.account ? 'text-[#EA7E7E]' : 'text-white'}  font-medium py-1 text-xs uppercase`}>
                  {errors.account ? errors.account : 'username or email'}
                </div>
                <div className="flex pl-[66px] py-3">
                  {' '}
                  <input
                    type="text"
                    name="account"
                    onChange={handleChange}
                    className="bg-inherit placeholder:uppercase focus:outline-none text-base text-white flex self-stretch w-full flex-1 text-base"
                  />{' '}
                </div>
              </div>
              {/* Password input */}
              <div className="flex flex-col border-b self-stretch border-[#9F9F9F]">
                <div className="flex gap-[30px] font-medium text-xl">
                  <div className="text-[#9F9F9F] text-base">PASSWORD</div>
                </div>
                <div className=" h-[24px] text-[#EA7E7E] font-medium py-1 text-xs uppercase">
                  {errors.password}
                </div>
                <div className="flex pl-[66px] py-3">
                  {' '}
                  <input
                     type={showPass ? "text" : "password"}
                    name="password"
                    onChange={handleChange}
                    className="bg-inherit focus:outline-none text-base text-white flex self-stretch w-full flex-1 text-base"
                  />{' '}
                  <div onClick={handleShowPass}>
                    {showPass ? (
                      <IoMdEye className="md:text-3xl text-xl text-white" />
                    ) : (
                      <IoMdEyeOff className="md:text-3xl text-xl text-white" />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:gap-[100px] gap-0 md:flex-row flex-col text-white md:items-center">
            <a
              href="./reset-password"
              className="border-b border-white ml-auto"
            >
              FORGOT PASSWORD
            </a>
            <GoogleBtn className="mt-[50px]" />
          </div>
        </div>
      </div>
      <AccountBtn onClick={handleLogin} text="login" />
    </>
  )
}
