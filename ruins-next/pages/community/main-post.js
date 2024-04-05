import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import postImg from "../../components/johnny/img/1868140_screenshots_20240113120319_1.jpg";
import profileImg from "../../components/johnny/img/16.jpg";
import { useRouter } from "next/router";
// import CommentModal from "@/component/community/comment-modal";
// import { useToggles } from "@/contexts/use-toggles";
import CommentModal from "@/components/johnny/modal-comment";
import { useToggles } from "@/contexts/use-toggles";
import { useBoards } from "@/contexts/use-boards";
import {
  RiMapPinFill,
  RiPriceTag3Fill,
  RiEmotionLaughFill,
  RiCloseLargeLine,
  RiArrowDropDownLine,
  RiAddLine,
  RiHeartLine,
} from "@remixicon/react";

export default function MainPost() {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };

  const { commentModal, setCommentModal } = useToggles();
  const { getPost } = useBoards();

  // useEffect(() => {
  //   getPost();
  // }, []);

  return (
    <>
      <div className="bg-292929 flex pc:items-start items-baseline justify-between w-ful p-5">
        <section className="bg-292929 text-white w-full pc:w-[1000px]   pc:p-10 pc:ml-20">
          {/* <!-- 標題區 --> */}
          <div className="flex justify-between mb-5">
            <div>
              <div className="text-[20px] border-b-2">{getPost[0].title}</div>
              <div>Feb 27, 2024</div>
            </div>
          </div>
          {/* <div className="flex my-2 gap-2 items-center size-[35px] overflow-hidden rounded-[100%]"> */}
          <div className="flex items-center gap-2 my-2 text-white">
            <Image
              className="rounded-[100%] size-[35px]"
              src={profileImg}
              layout="full"
              objectFit="cover"
              alt=""
            />
            NameHere@ccmail.com
          </div>
          {/* <!-- 文章 --> */}
          <div className="flex mb-2 gap-5">
            <div className="flex">
              <RiMapPinFill className="mr-2" />
              <span className="hidden pc:inline-block">待老坑山</span>
            </div>
            <div className="flex">
              <RiPriceTag3Fill className="mr-2" />
              <span className="hidden pc:inline-block">@小名@陳威宇@Tina</span>
            </div>
            <div className="flex">
              <RiEmotionLaughFill className="mr-2" />
              <span className="hidden pc:inline-block">覺得新奇</span>
            </div>
          </div>
          <div className="mb-2">{getPost[0].content}</div>

          {/* <!-- 圖片 --> */}
          <div className="mb-2">
            <Image src={postImg} alt="" />
          </div>
          {/* <!-- 留言按鈕 --> */}
          <div
            className="border-y-2 px-5 cursor-pointer flex items-center justify-center"
            onClick={() => setCommentModal(!commentModal)}
          >
            <button className="items-center flex text-[20px]">
              <RiAddLine size={"50px"} /> Add a Comment
            </button>
          </div>
          {commentModal ? <CommentModal /> : ""}
          {/* <!-- 留言 --> */}
          <div className="bg-575757 rounded-md pc:p-10 p-3 my-2">
            <div className="likeZone:flex justify-between mb-5">
              <div>
                <div className="text-[20px]">NameHere@ccmail.com</div>
                <div>role.name?</div>
              </div>
              <div className="likeZone:flex gap-2 items-center flex">
                <span>Feb 13(3 hr ago)</span>
                <span>
                  <RiHeartLine />
                </span>
                <span>
                  <RiArrowDropDownLine className=" bg-white text-gray-600" />
                </span>
              </div>
            </div>
            <div>
              <div>
                在這個現代化的世界中，我們常常著眼於高樓大廈和繁忙的街道，但往往忽略了城市中蘊藏的另一種美——廢墟。走進這些被遺棄的建築物，你會感受到一種截然不同的氛圍，
                伴隨著曾經熱鬧的歷史和靜靜的荒廢。廢墟不僅僅是城市的遺忘之地，更是一個充滿著神秘和探險的世界。
                在廢墟中，你可以發現被遺忘的故事。墻壁上褪色的塗鴉，斑駁的地板上殘留的痕跡，這些都是過去的痕跡，記錄著這個地方的生活和歷史。
                每一個廢墟都有著屬於自己的故事，等待著有心人的探索和發現。
              </div>
            </div>
          </div>
          {/* <!-- 留言回覆 --> */}
          <div className="bg-575757 rounded-md pc:p-10 p-3 w-[90%] my-2">
            <div className="likeZone:flex justify-between mb-5">
              <div>
                <div className="text-[20px]">NameHere@ccmail.com</div>
                <div>role.name?</div>
              </div>
              <div className="likeZone:flex gap-2 items-center flex">
                <span>Feb 13(3 hr ago)</span>
                <span>
                  <RiHeartLine />
                </span>
                <span>
                  <RiArrowDropDownLine className=" bg-white text-gray-600" />
                </span>
              </div>
            </div>
            <div>
              <div>
                在這個現代化的世界中，我們常常著眼於高樓大廈和繁忙的街道，但往往忽略了城市中蘊藏的另一種美——廢墟。走進這些被遺棄的建築物，你會感受到一種截然不同的氛圍，
                伴隨著曾經熱鬧的歷史和靜靜的荒廢。廢墟不僅僅是城市的遺忘之地，更是一個充滿著神秘和探險的世界。
                在廢墟中，你可以發現被遺忘的故事。墻壁上褪色的塗鴉，斑駁的地板上殘留的痕跡，這些都是過去的痕跡，記錄著這個地方的生活和歷史。
                每一個廢墟都有著屬於自己的故事，等待著有心人的探索和發現。
              </div>
            </div>
          </div>

          {/* <!-- 留言(隱藏留言回覆) --> */}
          <div className="bg-575757 rounded-md pc:p-10 p-3 my-2">
            <div className="likeZone:flex justify-between mb-5">
              <div>
                <div className="text-[20px]">NameHere@ccmail.com</div>
                <div>role.name?</div>
              </div>
              <div className="likeZone:flex gap-2 items-center flex">
                <span>Feb 13(3 hr ago)</span>
                <span>
                  <RiHeartLine />
                </span>
                <span>
                  <RiArrowDropDownLine className=" bg-white text-gray-600" />
                </span>
              </div>
            </div>
            <div>
              <div>
                在這個現代化的世界中，我們常常著眼於高樓大廈和繁忙的街道，但往往忽略了城市中蘊藏的另一種美——廢墟。走進這些被遺棄的建築物，你會感受到一種截然不同的氛圍，
                伴隨著曾經熱鬧的歷史和靜靜的荒廢。廢墟不僅僅是城市的遺忘之地，更是一個充滿著神秘和探險的世界。
                在廢墟中，你可以發現被遺忘的故事。墻壁上褪色的塗鴉，斑駁的地板上殘留的痕跡，這些都是過去的痕跡，記錄著這個地方的生活和歷史。
                每一個廢墟都有著屬於自己的故事，等待著有心人的探索和發現。
              </div>
              <div className="flex justify-end">
                <i className="ri-chat-4-fill pr-1"></i>399
              </div>
            </div>
          </div>
        </section>
        {/* <i className="ri-close-large-line pc:px-[100px] pc:text-[100px] text-[20px] text-white"></i> */}
        <div onClick={handleBack} className="hover:cursor-pointer">
          <RiCloseLargeLine
            className="text-white w-[20px] pc:w-[100px] pc:mt-[20px] pc:mr-[30px]"
            size={"pc:100px"}
          />
        </div>
      </div>
    </>
  );
}
