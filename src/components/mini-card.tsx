
import { cn } from "@/lib/utils";
import Image from "next/image";

type Params = {imageSrc:string,selected:boolean,onClick:()=>void}
export default function MiniCard({imageSrc,selected,onClick}:Params) {
  return (
    <>
      <div onClick={onClick} className={cn("relative h-[7vw] w-[4vw] bg-gradient-to-b from-purple-500 to-green-500 rounded-lg p-[0.2vw] mb-[0.2vw] cursor-pointer overflow-hidden",{
        'grayscale':!selected
      })}>
        <Image quality={1} src={imageSrc} alt="" height={2686} width={1900} className="h-full w-full object-cover rounded-md "/>
        <div className=" size-full hover:bg-red-50/60 duration-300 top-0 absolute left-0"></div>
      </div>
    </>
  );
}
