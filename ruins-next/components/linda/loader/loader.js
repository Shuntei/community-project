import {useState, useEffect} from "react";
import styles from "./loader.module.css"
import { useAuth } from "@/contexts/auth-context";
import Router from "next/router";

export default function Loader({color = "white", children}) {
  const {auth} = useAuth()
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (auth.id) {
      setIsLoading(false);
    } else {
      const timer = setTimeout(() => {
        setIsLoading(false);
        if (!auth.id) {
          Router.push('/member/account/login');
        }
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [auth]);

  if(isLoading) {
    return (
      <>
      <div className="fixed h-lvh fixed inset-0 bg-black bg-opacity-50 z-[1000] flex justify-center items-center">
        <div className={styles['loadingio-spinner-rolling-2by998twmg8']}>
          <div className={styles["ldio-yzaezf3dcmj"]}>
            <div className={` border-4  ${color==="white"?'border-white' : 'border-black'} `}></div>
          </div>
        </div>
        <div className={`absolute inset-0 flex items-center justify-center ${color==="white"?'text-white' : 'text-black'} font-light text-[80px]`}>R</div>
      </div>
      </>
    );
  }

  if(auth.id){
    return children ? children : null;
  }

}
