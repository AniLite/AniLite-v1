import React from "react";
import characterList from "../Data/characterList.json";
import { Link } from "react-router-dom";

function TopCharactersPage() {
  return (
    <div className="grid grid-cols-12 gap-4 relative top-20 mb-60 w-full">
      <div className="col-span-1" />
      <div className="col-span-8">
        <p className="text-purple-500 font-quicksand text-5xl font-medium ">
          Top Characters
        </p>
      </div>
      <div className="col-span-2">
        <p className="text-white relative top-1/2 font-quicksand text-sm font-medium ">
          Showing {characterList.length} characters
        </p>
      </div>
      <div className="col-span-1" />
      <div className="col-span-1" />
      <div className="col-span-6">
        <div className="grid grid-cols-4 gap-2 relative w-full">
          {characterList.map((item, id) => (
            <div key={id} className="my-3">
              <div id="listitems" className="mx-3 h-full col-span-1" key={id}>
                <Link to={`/characters/${item.slug}`}>
                  <img
                    id="listitems"
                    className="w-full rounded-md"
                    src="https://media.kitsu.io/characters/images/411/original.jpg?1483096805"
                    alt=""
                  />
                </Link>
              </div>
              <div className="relative -top-10">
                <p className="text-white text-center font-quicksand mx-3">
                  {item.name}
                </p>
                <hr className="text-white mx-5" />
                <p className="text-white text-center font-quicksand">Anime</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="col-span-4">
        <div className="w-full my-2.5 h-96 bg-black rounded-lg"></div>
        <div className="w-full my-2.5 h-96 bg-black rounded-lg">
          <p className="relative text-white top-1/2 text-center">
            © AniLite 2021, made with {"<3"} by Shivansh & Aarush
          </p>
        </div>
      </div>
      <div className="col-span-1" />
    </div>
  );
}

export default TopCharactersPage;
