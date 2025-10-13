type Params = {time:string,content:string}
export default function NewsItem({time,content}:Params) {
  return (
    <>
      <div className="group flex-1 relative  bg-white shadow-lg shadow-black/20 pt-4 px-4 pb-[30px] cursor-pointer">
        <h1 className=" text-sm text-[#00b4af] mb-3">{time}</h1>
        <div className=" h-full relative">
          {/*bg line */}
          <div className=" absolute top-0 left-0 h-full w-full underlined-text"></div>
          <p className="font-serif h-full font-bold underlined-text group-hover:blur-[1px] duration-200 ">
            {content}
          </p>
        </div>

        <div className=" absolute h-1 w-full left-0 bottom-0 bg-gradient-to-r from-[#00b4af] via-[#00b4af] to-purple-300"></div>
      </div>
    </>
  );
}
