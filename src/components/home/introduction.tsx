import Image from "next/image";

export default function Introduction() {
  return (
    <>
      <div className=" relative pointer-events-none">
        <header className="flex flex-col justify-center items-center gap-y-5 font-serif font-bold mb-30">
          <h1 className=" text-4xl tracking-[25px] font-thin font-serif bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500  bg-clip-text text-transparent">INTRODUCTION</h1>
          <p className="tracking-[15px]">イントロダクション</p>
        </header>
        <main>
          <Image className=" w-[50vw] mx-auto" src={"/introduction/intro-large.png"} width={750} height={1356} alt=""/>
        </main>
        <Image className=" absolute -top-30 left-0 w-[33vw]" src={'/introduction/boy.png'} width={900} height={1080} alt=""/>
        <Image className=" absolute bottom-0 right-0 w-[33vw]" src={'/introduction/girl.png'} width={900} height={1080} alt=""/>

      </div>
    </>
  );
}
