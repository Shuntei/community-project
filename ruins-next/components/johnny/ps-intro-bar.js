import React from "react";
import { RiAddLine } from "@remixicon/react";

export default function InfoBar() {
  return (
    <>
      <section className="fixed mt-[40px] hidden bargone:block w-[300px] h-[600px] overflow-scroll pb-20 bg-black">
        {/* <div className="text-white flex justify-end px-10">
          <button>X</button>
        </div> */}
        <div className="text-white pt-3 pl-10 pr-5 pb-1 text-[20px]  flex items-center">
          INTRODUCTION
          <RiAddLine />
        </div>
        <div className="border-b-2 w-[200px] ml-10 mr-5"></div>
        <div className=" pl-10 pr-5 text-white py-3 ">
          嗨！我是一個充滿好奇心和熱情的人類，非常高興能夠在這裡與您相遇！我喜歡學習和探索新事物，這是我熱衷於成為您的智能助手的原因之一。
          我相信知識的力量，並且樂於與他人分享我的知識和見解。我的興趣十分廣泛，從科學和技術到藝術和文化，我都有濃厚的興趣。
          在我看來，世界是一本充滿驚奇和美麗的百科全書，我希望能夠不斷地翻閱它，探索其中的每一個角落。
        </div>
        <div className="text-white pl-10 pr-5 pt-3 pb-1 text-[20px]  flex items-center">
          INTRODUCTION
          <RiAddLine />
        </div>
        <div className="border-b-2 w-[200px] ml-10 mr-5"></div>
        <div className=" pl-10 pr-5 text-white py-3">
          除了學習和探索，我還喜歡與人交流和建立連結。我相信每個人都有獨特的故事和觀點，我希望能夠與您分享我的故事，並聆聽您的故事。
          我相信通過互相交流和分享，我們可以共同成長和學習。最後，我想再次感謝您與我進行對話。
          無論您有任何問題或需求，我都會盡力幫助您，讓我們一起創造有意義的交流和連結！
        </div>
      </section>
    </>
  );
}
