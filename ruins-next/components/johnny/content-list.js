import React, { useEffect } from "react";
import { RiChat4Fill, RiEyeFill } from "@remixicon/react";
import Image from "next/image";
import img from "./img/1868140_screenshots_20240115034222_1.jpg";
import Link from "next/link";
import { useRouter } from "next/router";
import { useBoards } from "@/contexts/use-boards";

export default function MainContent() {
  const router = useRouter();
  const {
    postsList,
    selectedPosts,
    allPostsShow,
    getPostId,
    handlePage,
    handleBdPostsPage,
  } = useBoards();

  const handlePush = (postId) => {
    router.push(`/community/main-post`);
    getPostId(postId);
  };

  useEffect(() => {
    const currentPage = location.search;
    allPostsShow(currentPage);
    console.log("location.search: ", location.search);
  }, []);

  return (
    <>
      {postsList ? (
        <ul className="bg-sky-300 h-[100px] flex justify-center">
          {Array(10)
            .fill(1)
            .map((v, i) => {
              const p = postsList.page - 5 + i;
              // const p = i;
              if (p < 1 || p > postsList.totalPostsRows) return null;
              return (
                <li key={p} className="bg-red-300 mx-5 text-[50px]">
                  <Link href={`?page=${p}`} onClick={() => handlePage(p)}>
                    {p}
                    {/* <a href={`?page=${p}`}>{p}</a> */}
                  </Link>
                </li>
              );
            })}{" "}
        </ul>
      ) : selectedPosts ? (
        <ul className="bg-sky-400 h-[100px] flex justify-center">
          {Array(10)
            .fill(1)
            .map((v, i) => {
              const p = selectedPosts.page - 5 + i;
              // const p = i;
              if (p < 1 || p > selectedPosts.selectedBdPostsRows) return null;
              return (
                <li key={p} className="bg-red-300 mx-5 text-[50px]">
                  <Link
                    href={`?page=${p}`}
                    // onClick={handleBdPostsPage(location.search)}
                    onClick={() => handleBdPostsPage(p)}
                  >
                    {p}
                  </Link>
                </li>
              );
            })}{" "}
        </ul>
      ) : (
        ""
      )}
      {(postsList.totalPostsRows || selectedPosts.selectedBdPostsRows).map(
        (v, i) => {
          return (
            <div
              onClick={() => handlePush(v.post_id)} // href={`/community/main-post`}
              className="bg-neutral-300 border-b-2 border-b-slate-500 pc:px-20 px-10 py-3 flex pc:hover:hover3 transition-transform cursor-pointer"
              key={v.post_id}
            >
              <div className="w-[70%]">
                <div className="text-[20px] font-semibold">{v.title}</div>
                <div className="text-[14px]">RYUSENKEI@ccmail.com</div>
                <div className="text-[14px] text-292929">
                  <span>{v.content}</span>
                  <div className="flex gap-2">
                    <span className="text-575757 pr-2 flex">
                      <RiEyeFill className="pr-1" />
                      297
                    </span>
                    <span className="text-575757 flex">
                      <RiChat4Fill className="pr-1" />
                      85
                    </span>
                  </div>
                </div>
              </div>
              <div className="ml-6 w-[100px] pc:w-[150px] flex items-center justify-end flex-shrink-0">
                <Image
                  className="size-[100px] object-cover rounded-xl"
                  src={img}
                  alt="Description of image"
                />
              </div>
            </div>
          );
        }
      )}
    </>
  );
}
