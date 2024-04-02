import { FaGoogle } from "react-icons/fa";

export default function GoogleBtn({className}) {
  return (
    <>
      <button className={`flex bg-black hover:bg-[#7A7A7A] justify-center text-white border items-center gap-2.5 px-[35px] py-[18px] md:my-0 ${className}`}>
            <FaGoogle />
            <div className="font-[15px]">CONTINUE WITH GOOGLE</div>
        </button>
    </>
  )
}
