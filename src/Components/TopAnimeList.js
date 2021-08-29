import { Button } from "@material-ui/core";
import React from "react";
import genreList from "../Data/genreList.json";
import animeList from "../Data/animeList.json";
import { Link } from "react-router-dom";

const data = [...animeList];

function colorGenerator() {
  var letters = "BCDEF".split("");
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * letters.length)];
  }
  return color;
}

function TopAnimeList() {
  const [genre, setGenre] = React.useState(null);
  const handleClick = (name, event) => {
    setGenre(name);
  };

  return (
    <>
      <div>
        {genreList.map((item, id) => {
          let color = colorGenerator();
          return (
            <Button
              key={id}
              className="m-1 py-1 "
              variant="outlined"
              style={{ borderRadius: 20, color: color, borderColor: color }}
              onClick={(event) => handleClick(item.name, event)}
            >
              <p className="font-roboto font-extralight ">{item.name}</p>
            </Button>
          );
        })}
      </div>
      <div className="grid grid-cols-4 gap-2">
        {genre === null
          ? data
              .map((anime) => [anime.rating, anime])
              .sort()
              .reverse()
              .slice(0, 20)
              .map((item, id) => (
                <div key={id} className="my-3">
                  <div
                    id="listitems"
                    className="mx-3 h-full col-span-1"
                    key={id}
                  >
                    <Link to={`/anime-about/${item.slug}`}>
                      <img
                        id="listitems"
                        className=" w-full rounded-md"
                        src={item[1].poster_image}
                        alt=""
                      />
                    </Link>
                  </div>
                  <div className="relative -top-10">
                    <p className="text-white text-center font-quicksand mx-3">
                      {item[1].name_en}
                    </p>
                    <hr className="text-white mx-5" />
                    <p className="text-white text-center font-quicksand">
                      {item[1].is_completed ? "Completed" : "Ongoing"}
                    </p>
                  </div>
                </div>
              ))
          : animeList.map((item, id) =>
              item.genres.map((name) =>
                name.name === genre ? (
                  <div key={id} className="my-3">
                    <div
                      id="listitems"
                      className="mx-3 h-full col-span-1"
                      key={id}
                    >
                      <Link to={`/anime-about/${item.slug}`}>
                        <img
                          id="listitems"
                          className="h-full w-full rounded-md"
                          src={item.poster_image}
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="relative -top-10">
                      <p className="text-white text-center font-quicksand mx-3">
                        {item.name_en}
                      </p>
                      <hr className="text-white mx-5" />
                      <p className="text-white text-center font-quicksand">
                        {item.is_completed ? "Completed" : "Ongoing"}
                      </p>
                    </div>
                  </div>
                ) : null
              )
            )}
      </div>
    </>
  );
}

export default TopAnimeList;
