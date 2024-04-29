import React, { useEffect, useState } from "react";
import Notification from "@/components/linda/notification";
import profile1 from "@/public/images/profile1.jpg";
import profile2 from "@/public/images/profile2.jpg";
import AccountLayout from "@/components/linda/accountLayout";
import { useAuth } from "@/contexts/auth-context";
import { MB_GET_NOTIFICATIONS } from "@/components/config/api-path";

export default function Notifications() {
  const {auth} = useAuth()
  const [today, setToday] = useState(null)
  const [week, setWeek] = useState(null)
  const [month, setMonth] = useState(null)

  const getNotificationInfo = async () => {
    try {
      const r = await fetch(`${MB_GET_NOTIFICATIONS}/${auth.id}`)
      const result = await r.json()
      console.log(result.data);
      setToday(result.data.today)
      setWeek(result.data.week)
      setMonth(result.data.month)
    } catch (error) {
      console.log("Error fetching notification info:", error);
    }
  }

  const markAsRead = async ()=>{

  }

  useEffect(()=>{
    getNotificationInfo()
  }, [])
  return (
    <>
      <div className="flex w-full flex-col p-[15px]">
        <div className="md:py-[30px] p-0 flex flex-col items-center gap-[28px] w-full">
          <div className="flex py-[12px] md:px-[16px] flex-col rounded-md md:shadow-[12px_12px_30px_0_rgba(255,255,255,0.3)] md:shadow-[-12px_-12px_30px_0_rgba(255,255,255,0.4)]">
            <div className="flex flex-col gap-[22px]">
              <div className="font-semibold text-[20px]">NOTIFICATIONS</div>
              <div className="flex flex-col gap-[10px] md:pr-[70px]">
                <div className="py-[12px]">Today</div>
                <Notification
                  name={"albert"}
                  src={profile1}
                  text={"Going live in 1 hour!"}
                  hour={"2h"}
                />
                <Notification
                  name={"celinelin"}
                  src={profile2}
                  text={"Edited the travel info. Go check it out!"}
                  hour={"4h"}
                />
                <Notification
                  name={"joseph1209"}
                  src={profile1}
                  text={"Mentioned you in"}
                  highlight={" 1203 travel."}
                  hour={"16h"}
                />
                <div className="py-[12px]">Last 7 days</div>
                <Notification
                  name={"albert"}
                  src={profile1}
                  text={"Going live in 1 hour!"}
                  hour={"2h"}
                />
                <Notification
                  name={"celinelin"}
                  src={profile2}
                  text={"Edited the travel info. Go check it out!"}
                  hour={"4h"}
                />
                <Notification
                  name={"joseph1209"}
                  src={profile1}
                  text={"Mentioned you in"}
                  highlight={"1203 travel."}
                  hour={"16h"}
                />
                <div className="py-[12px]">Last 30 days</div>
                <Notification
                  name={"albert"}
                  src={profile1}
                  text={"Going live in 1 hour!"}
                  hour={"2h"}
                />
                <Notification
                  name={"celinelin"}
                  src={profile2}
                  text={"Edited the travel info. Go check it out!"}
                  hour={"4h"}
                />
                <Notification
                  name={"joseph1209"}
                  src={profile1}
                  text={"Mentioned you in"}
                  highlight={"1203 travel."}
                  hour={"16h"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Notifications.getLayout = function getLayout(page) {
  return <AccountLayout>{page}</AccountLayout>;
};
