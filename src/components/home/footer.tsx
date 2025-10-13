import Image from "next/image";
import X from "../x";
import FaceBook from "../facebok";
import Line from "../line";
export default function Footer() {
  return (
    <>
      <div className=" flex justify-between items-center py-25 px-20 bg-white">
        <Image className=" w-[30vw] h-auto" src={'/home/footer.png'} width={1576} height={370} alt=""/>
        <div className=" flex flex-col space-y-7 ">
          <div className=" flex justify-end items-center gap-x-10 text-xl font-serif">
            <div>SHARE</div>
            <div><X className="size-7 cursor-pointer hover:stroke-primary hover:fill-primary duration-200 "/></div>
            <div><FaceBook className="size-7 cursor-pointer hover:stroke-primary hover:fill-primary duration-200"/></div>
            <div><Line className="size-7 cursor-pointer hover:stroke-primary hover:fill-primary duration-200"/></div>
          </div>
          <div className=" flex justify-end text-xl font-serif">
            <div className=" pr-10 cursor-pointer hover:text-primary duration-200">CONTACT</div>
            <div  className=" px-10 border-x-2 border-black cursor-pointer hover:text-primary duration-200">PRIVACY POLICY</div>
            <div  className=" pl-10 cursor-pointer hover:text-primary duration-200">ANIPLEX</div>
          </div>
          <div>
            <p className=" font-black   font-serif text-right">このホームページに掲載されている一切の文書・図版・写真等を</p>
            <p className=" font-black  font-serif text-right">手段や形態を問わず複製、転載することを禁じます。</p>
          </div>
          <p className=" text-right text-sm">©三香見サカ・講談社／「薫る花は凛と咲く」製作委員会</p>
        </div>
      </div>
    </>
  );
}
