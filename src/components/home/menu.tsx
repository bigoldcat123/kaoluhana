'use client'
import { cn, sleep } from "@/lib/utils";
import { useState } from "react";
const ANIMATION_DURATION = 300;
export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const open_menu = async () => {
    setIsAnimating(true)
    setIsOpen(!isOpen);
    await sleep(ANIMATION_DURATION);
    setIsAnimating(false)
  }
  return (
    <>
      <button disabled={isAnimating} onClick={open_menu} className=" fixed top-10 right-10 size-27 bg-gradient-to-b from-pink-300/45 to-primary/35 rounded-md cursor-pointer z-50"> hello i am a stik</button>
      <div className={cn(" absolute  h-screen w-full bg-red-50 top-0 left-0 z-40 duration-300", {
        '-translate-y-full':!isOpen
      })}>

      </div>
    </>
  );
}
