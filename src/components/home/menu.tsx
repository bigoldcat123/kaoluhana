'use client'
import { cn, sleep } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";
import MenuItem from "../menu-item";
const ANIMATION_DURATION = 300;
export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const [showImage,setShowImage] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false);
  const [items, setItems] = useState([
    { title: "TOP", sub: "トップ", show: false },
    { title: "MOVIE", sub: "ムービー", show: false },
    { title: "NEWS", sub: "ニュース", show: false },
    { title: "ONAIR/STREAMING", sub: "オンエア/ストリーミング", show: false },
    { title: "Blu-ray&DVD", sub: "ブルーレイ＆ディーブイディー", show: false },
    { title: "INTRODUCTION", sub: "イントロダクション", show: false },
    { title: "STORY", sub: "あらすじ", show: false },
    { title: "CHARACTER", sub: "キャラクター", show: false },
    { title: "STAFF&CAST", sub: "スタッフ＆キャスト", show: false },
    { title: "MUSIC", sub: "ミュージック", show: false },
    { title: "SPECIAL", sub: "スペシャル", show: false },
  ])
  const open_menu = async () => {
    if (isOpen) {
      animate_close()
    }else {
      animate_open()
    }
  }
  async function animate_open() {
    setIsAnimating(true)
    setIsOpen(true)
    await sleep(ANIMATION_DURATION);
    setShowImage(true)
    for (let i = 0; i < items.length; i++) {
      await sleep(ANIMATION_DURATION / 3);
      items[i].show = true;
      setItems([...items])
    }
    setIsAnimating(false)
  }
  async function animate_close() {
    setIsAnimating(true)
    setShowImage(false)
    for (let i = 0; i < items.length; i++) {
      items[i].show = false;
    }
    setItems([...items])
    await sleep(ANIMATION_DURATION);
    setIsOpen(false)
    setIsAnimating(false)
  }

  return (
    <>
      <button disabled={isAnimating} onClick={open_menu} className=" fixed top-10 right-10 size-27 bg-gradient-to-b from-pink-300/45 to-primary/35 rounded-md cursor-pointer z-50"> hello i am a stik</button>
      <div className={cn(" absolute  h-screen w-full bg-white top-0 left-0 z-40 duration-300 flex", {
        '-translate-y-full':!isOpen
      })}>
        <div className=" flex-1 flex items-center justify-start">
          <Image className={cn(" w-full h-auto duration-300 ease-in-out", {
            " opacity-0 -translate-x-full ":!showImage
          })} src={'/menu/banner.jpg'} width={2200} height={1238} alt=""/>
        </div>
        <div className=" flex-1 flex flex-col pl-30 justify-center gap-y-5">
          {
            items.map(item => (
              <MenuItem key={item.title} title={item.title} sub={item.sub} show={item.show} />
            ))
          }
        </div>
      </div>
    </>
  );
}
