import React from "react";
import SimpleMenu from "../Components/SimpleMenu";
import TopAnimeList from "../Components/TopAnimeList";
import Footer from "../Components/Footer";

export default function TopAnimePage() {
  return (
    <>
      <div className="grid grid-cols-12 gap-4 mt-20">
        <div className="col-span-1" />
        <div className="col-span-9">
          <p className="text-white font-quicksand text-5xl font-medium ">
            Top Anime
          </p>
        </div>
        <div className="col-span-1">
          <SimpleMenu menuItems={["All", "Airing", "Completed", "Favourite"]} />
        </div>
        <div className="col-span-1" />
        <div className="col-span-1" />
        <div className="col-span-10">
          <TopAnimeList />
        </div>
        <div className="col-span-1" />
      </div>
      <Footer />
    </>
  );
}
