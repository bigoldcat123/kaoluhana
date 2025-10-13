import { useEffect, useRef } from "react";
import MovieItem from "../MovieItem";


export default function MovieList() {
  const containerRef = useRef<HTMLUListElement>(null);
  useEffect(() => {
      if (containerRef.current) {
        const container = containerRef.current;
        container.scrollLeft = containerRef.current.scrollWidth / 2 - 100
      }
    }, []);
  return (
    <>
      <div>
        <header className="flex flex-col justify-center items-center gap-y-5 font-serif font-bold ">
          <h1 className=" text-4xl tracking-[25px] font-thin font-serif bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500  bg-clip-text text-transparent">MOVIE</h1>
          <p className="tracking-[15px]">ムービー</p>
        </header>
        <main className="mt-22">
          <div className="h-[clamp(220px,calc(39.375vw+40px),688px)] overflow-hidden ">
            <ul ref={containerRef} className="snap-x scroll-pl-6 snap-mandatory flex overflow-scroll gap-x-20 pb-50">
              <MovieItem info="新情報解禁PV" imageSrc="/movie/item1.jpg"/>
              <MovieItem info="本PV" imageSrc="/movie/item2.jpg"/>
              <MovieItem info="ファーストPV" imageSrc="/movie/item3.jpg"/>
              <MovieItem info="本PV" imageSrc="/movie/item2.jpg"/>
              <MovieItem info="新情報解禁PV" imageSrc="/movie/item1.jpg"/>
              <MovieItem info="本PV" imageSrc="/movie/item2.jpg"/>
              <MovieItem info="ファーストPV" imageSrc="/movie/item3.jpg"/>
              <MovieItem info="本PV" imageSrc="/movie/item2.jpg"/>
              <MovieItem info="新情報解禁PV" imageSrc="/movie/item1.jpg"/>
            </ul>
          </div>
        </main>
      </div>
    </>
  );
}
