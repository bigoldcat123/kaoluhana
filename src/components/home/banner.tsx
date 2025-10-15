'use client'
import MiniCard from "@/components/mini-card";
import Image from "next/image";
import {useState } from "react";

export default function Banner() {
  const [selected1, setSelected1] = useState(true);
  const [selected2, setSelected2] = useState(false);
  const [currentImage, setCurrentImage] = useState('/home/home1.jpg');
  return (
    <>
      <div className=" flex">
        <div  className="w-[68vw] overflow-hidden" >
          <Image quality={75} src={currentImage} className="w-full h-auto " height={2686} width={1900} alt="a image"></Image>
        </div>
        <div  className="relative flex-1">
          <Image alt="" width={210} height={1141} src={"/home/title.png"} className="mx-auto sticky top-100 -translate-y-90  h-[40vw] w-auto" />
          <div className=" absolute bottom-0 left-[0.5vw]">
            <MiniCard selected={selected1} onClick={() => { setSelected1(true); setSelected2(false); setCurrentImage('/home/home1.jpg')}} imageSrc="/home/home1.jpg"/>
            <MiniCard selected={selected2} onClick={() => { setSelected1(false); setSelected2(true); setCurrentImage('/home/home2.jpg')}} imageSrc="/home/home2.jpg"/>
          </div>
        </div>
      </div>
    </>
  );
}
