import Image from "next/image";
import Loading from "./loading";
type Params = {imageSrc:string,info:string}
export default function MovieItem({imageSrc,info}:Params) {
  //max-h-[720px] max-w-[1280px] min-w-[70vw] min-h-[39.375vw]
  return (
    <>
      <li  className="min-h-[clamp(220px,calc(39.375vw+40px),688px)] snap-center snap-always min-w-[clamp(320px,70vw,1152px)]  relative">
        <Image src={imageSrc} width={1280} height={720} alt="" className="  min-w-[clamp(320px,70vw,1152px)] min-h-[clamp(180px,39.375vw,648px)] object-cover"/>
        <p className=" h-[40px] leading-[40px] text-center tracking-widest">{info}</p>
        <div className="absolute top-0 left-0  min-w-[clamp(320px,70vw,1152px)] min-h-[clamp(180px,39.375vw,648px)]  bg-black/50 hover:bg-transparent duration-300 cursor-pointer"></div>
        <Loading />
      </li>
    </>
  );
}
