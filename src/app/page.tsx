'use client'
import Banner from "@/components/home/banner";
import Footer from "@/components/home/footer";
import Introduction from "@/components/home/introduction";
import MovieList from "@/components/home/MovieList";
import NewsBoard from "@/components/home/news-board";

export default function HomePage() {

  return (
    <>
      <Banner />
      <div className="h-50"></div>
      <MovieList />
      <div className="h-50"></div>
      <NewsBoard />
      <div className="h-80"></div>
      <Introduction />
      <div className="h-50"></div>
      <Footer/>

    </>
  );
}
