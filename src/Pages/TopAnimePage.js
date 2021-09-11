import React from "react";
import SimpleMenu from "../Components/SimpleMenu";
import TopAnimeList from "../Components/TopAnimeList";
import Footer from "../Components/Footer";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { ReactComponent as Loader } from "../Media/Loader.svg";

export default function TopAnimePage() {
  let { genre } = useParams();
  let genreSlug = null;
  genre !== "all" ? (genreSlug = genre.toLowerCase()) : (genreSlug = null);
  const genreList = useSelector((state) => state.genreList);
  const { error, loading } = genreList;
  return loading === true ? (
    <div className="w-full h-full absolute ">
      <Loader
        style={{ maxWidth: "10%" }}
        className="top-1/2 left-1/2 relative transform -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  ) : error ? (
    <h1>Error: {error}</h1>
  ) : (
    <>
      <div className="grid grid-cols-12 gap-4 mt-20">
        <div className="col-span-2" />
        <div className="col-span-7">
          <p className="text-white font-quicksand text-5xl font-medium ">
            Top Anime
          </p>
        </div>
        <div className="col-span-1">
          <SimpleMenu menuItems={["All", "Airing", "Completed", "Favourite"]} />
        </div>
        <div className="col-span-2" />
        <div className="col-span-2" />
        <div className="col-span-8">
          <TopAnimeList genre={genreSlug} />
        </div>
        <div className="col-span-2" />
      </div>
      <Footer />
    </>
  );
}
