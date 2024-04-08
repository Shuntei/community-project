import ChannelAndMsg from "@/components/johnny/msg-left-bar";
import MessengerFollows from "@/components/johnny/msg-follows-bar";
import PageSelect from "@/components/johnny/page-select";
import React from "react";
import CentralMsg from "./central-msg";
import Navbar from "@/components/linda/navbar/navbar";
import Footer from "@/components/linda/footer/footer";
// import PageSelect from "../../component/community/page-select";
// import ChannelAndMsg from "../../component/community/channel-and-msg-bar";
// import MessengerFollows from "@/component/community/messenger-follows-bar";
// import CentralContentM from "./central-msg";

export default function MainMessenger() {
  const paddingBG = "bg-292929";

  return (
    <div className="bg-292929 h-screen">
      <Navbar className="bg-black" />
      <PageSelect paddingBG={paddingBG} />
      <ChannelAndMsg />
      <MessengerFollows />
      <CentralMsg />
      {/* <Footer /> */}
    </div>
  );
}
