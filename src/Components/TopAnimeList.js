import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { listGenres } from "../store/actions/genreActions";
import { ReactComponent as Loader } from "../Media/Loader.svg";
import { List, ListItem } from "@material-ui/core";
import { motion } from "framer-motion";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { listAnime } from "../store/actions/animeActions";
import { useLocation } from "react-router";

function colorGenerator() {
  var letters = "BCDEF".split("");
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * letters.length)];
  }
  return color;
}

function TopAnimeList(props) {
  const webpage = useLocation();
  const [genre, setGenre] = React.useState(null);
  const handleClick = (name, event) => {
    setGenre(name);
  };
  const genreList = useSelector((state) => state.genreList);
  const { genres, error, loading } = genreList;
  const animeList = useSelector((state) => state.animeList);
  const { animes } = animeList;
  const data = [...animes];
  const dispatch = useDispatch();

  // if (slugGenre !== null && genre === null) {
  //   data = data.filter((value) => {
  //     return value.genres.map((item) => item.slug).includes("comedy");
  //   });
  // }

  React.useEffect(() => {
    if (genres.length === 0) {
      dispatch(listGenres());
    }
    if (genre !== null) {
      dispatch(listAnime("genre=" + genre));
    }
  }, [dispatch, genres.length]);

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
      <div>
        {genres.map((item, id) => {
          let color = colorGenerator();
          return webpage.pathname === "/" ? (
            ![
              "cars",
              "demons",
              "documentary",
              "family",
              "friendship",
              "food",
              "anime-influenced",
              "Cooking",
              "dementia",
              "doujinshi",
              "gender-bender",
              "kids",
              "mature",
              "tokusatsu",
              "workplace",
              "yaoi",
              "youth",
              "yuri",
              "historical",
              "game",
              "law",
              "mahou-shoujo",
              "mahou-shounen",
              "medical",
              "parody",
              "police",
              "political",
              "racing",
              "samurai",
              "school",
              "shoujo-ai",
              "shounen-ai",
              "space",
              "super-power",
              "supernatural",
              "vampire",
              "zombies",
            ].includes(item.slug) ? (
              <Button
                key={id}
                className="m-1 py-1 opacity-80 hover:opacity-100"
                variant="outlined"
                style={{ borderRadius: 20, color: color, borderColor: color }}
                onClick={(event) => handleClick(item.name, event)}
              >
                <p className="font-roboto font-extralight ">{item.name}</p>
              </Button>
            ) : null
          ) : (
            <Button
              key={id}
              className="m-1 py-1 opacity-80 hover:opacity-100"
              variant="outlined"
              style={{ borderRadius: 20, color: color, borderColor: color }}
              onClick={(event) => handleClick(item.name, event)}
            >
              <p className="font-roboto font-extralight ">{item.name}</p>
            </Button>
          );
        })}
      </div>
      <div className="grid grid-cols-5 gap-1 relative w-full">
        {genre === null
          ? data.slice(0, 20).map((item, id) => (
              <>
                <div key={id} className="my-3">
                  <div className="mx-3 h-full col-span-1" key={id}>
                    <Link to={`/anime-about/${item.slug}`}>
                      <img
                        id="listitems"
                        className="rounded-md w-full"
                        style={{ height: "220px" }}
                        src={item.poster_image}
                        alt=""
                      />
                    </Link>
                    <p className="text-white text-center font-quicksand">
                      {item.name_en.length > 35
                        ? item.name_en.slice(0, 33) + "..."
                        : item.name_en}
                    </p>
                    <hr className="text-white mx-5" />
                    <p className="text-white text-center font-quicksand">
                      {item.is_completed ? "Completed" : "Ongoing"}
                    </p>
                  </div>
                  <div className=""></div>
                </div>
              </>
            ))
          : data.map((item, id) =>
              item.genres.map((name) =>
                name.name === genre ? (
                  <>
                    <>
                      <div key={id} className="my-3">
                        <div className="mx-3 h-full col-span-1" key={id}>
                          <Link to={`/anime-about/${item.slug}`}>
                            <img
                              id="listitems"
                              className="rounded-md w-full"
                              style={{ height: "220px" }}
                              src={item.poster_image}
                              alt=""
                            />
                          </Link>
                          <p className="text-white text-center font-quicksand">
                            {item.name_en.length > 35
                              ? item.name_en.slice(0, 33) + "..."
                              : item.name_en}
                          </p>
                          <hr className="text-white mx-5" />
                          <p className="text-white text-center font-quicksand">
                            {item.is_completed ? "Completed" : "Ongoing"}
                          </p>
                        </div>
                        <div className=""></div>
                      </div>
                    </>
                  </>
                ) : null
              )
            )}
      </div>
    </>
  );
}

export default TopAnimeList;
