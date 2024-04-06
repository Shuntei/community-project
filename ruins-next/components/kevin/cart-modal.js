import React, { useState } from "react";
import { RiStarFill } from "@remixicon/react";
import Image from "next/image";
import { useCart } from "@/hooks/use-cart";
import CartList from "@/components/kevin/cart-list";
import { RiAddFill } from "@remixicon/react";
import { RiSubtractFill } from "@remixicon/react";
import { RiCloseLargeLine } from "@remixicon/react";
import Link from "next/link";


function CartModal() {
  const {
    items,
    onDecreaseItem,
    onIncreaseItem,
    onRemoveItem,
    totalItems,
    totalPrice,
  } = useCart();

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <button onClick={openModal}>CART</button>
      {isOpen && (
        <div className="modal flex justify-end items-center fixed top-0 left-0 w-full h-full  bg-black/50 z-40 ">
          <div className="modal-content bg-white  rounded  z-50 md:w-[447px] w-[320px] h-[700px] p-5 relative">
            <div className="flex flex-col">
              <div className="flex justify-end">
                <button className="close text-[30px] " onClick={closeModal}>
                <RiCloseLargeLine />
                </button>
              </div>
              {items.map((v, i) => {
                return (
                  <div key={v.pid} className="flex w-full justify-between">
                    <div className="md:w-1/5  ">
                      <Image
                        src={v.img}
                        alt="Picture of camp"
                        width={100}
                        height={100}
                        className="aspect-square rounded-xl"
                        unoptimized={true}
                      />
                    </div>
                    <div className=" w-full md:px-5 px-2  space-y-5">
                      <div className="text-black text-base font-semibold font-['Noto Sans TC']">
                        {v.name}
                      </div>
                      <div className="flex justify-between">
                        <div className="text-neutral-400 text-xs font-medium font-['Noto Sans']">
                          深空灰
                        </div>
                        <div className="t text-neutral-300 text-xs font-extralight font-['IBM Plex Mono']">
                          {v.price}
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="flex justify-center items-center space-x-4">
                            {/* The default color is the current text color (currentColor) */}
                            <RiSubtractFill
                              color="black"
                              size="1em"
                              onClick={() => {
                                onDecreaseItem(v.pid);
                              }}
                            />
                            {/* The default size is 24 */}{" "}
                            <div className="text-black text-[13px] font-light font-['IBM Plex Mono']">
                              {v.qty}
                            </div>
                            {/* This sets the icon size to the current font size */}
                            <RiAddFill
                              color="black"
                              size="1em"
                              onClick={() => {
                                onIncreaseItem(v.pid);
                              }}
                            />
                          </div>
                        </div>
                        <div className="text-black text-base font-normal font-['IBM Plex Mono']">
                          $ {v.price * v.qty}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className="flex w-10/12 justify-between absolute bottom-20">
                <div className="text-black text-[13px] font-semibold font-['IBM Plex Mono']">
                  合計 {totalItems}項(TWD)
                </div>
                <div className="text-black text-xl font-semibold font-['IBM Plex Mono']">
                  $ {totalPrice}
                </div>
              </div>
              <div className="flex justify-center">
                <button className="py-3 absolute bottom-2">
                  <div className=" px-[98px] py-[18px] bg-black border border-black justify-center items-center gap-2.5 inline-flex">
                    <Link href="/shop/cart" className="text-white text-[15px] font-normal font-['IBM Plex Mono']">
                      CHECKOUT{/* <Link href="/shop/cart">CART</Link> */}
                    </Link>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartModal;
