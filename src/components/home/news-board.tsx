import NewsItem from "../news-item";

export default function NewsBoard() {
  return (
    <>
      <div className="w-[80vw] mx-auto ">
        <header className="flex flex-col justify-center items-start gap-y-5 font-serif font-bold ">
          <h1 className=" text-4xl tracking-[25px] font-thin font-serif bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500  bg-clip-text text-transparent">NEWS</h1>
          <p className="tracking-[15px] mb-10">ニュース</p>
        </header>
        <main className=" flex justify-between gap-x-8">
          <NewsItem time="2025.10.01" content="TVアニメ「薫る花は凛と咲く」LINEスタンプ・着せかえ販売開始！" />
          <NewsItem time="2025.09.28" content="第１３話　台本表紙イラスト使用壁紙プレゼント！" />
          <NewsItem time="2025.09.28" content="ABEMAにて全話一挙配信が決定！"/>
        </main>
      </div>
    </>
  );
}
