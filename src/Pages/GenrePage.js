import React from "react";
import { useParams, useHistory } from "react-router";
import { Link } from "react-router-dom";
import animeList from "../Data/animeList.json";
import Button from "@material-ui/core/Button";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { ReactComponent as UndrawLostOnline } from "../Media/UndrawLostOnline.svg";
import genreList from "../Data/genreList.json";

function CharacterDetailPage() {
  let { genre } = useParams();
  let history = useHistory();

  return (
    <>
      <div className="grid grid-cols-12 gap-4 relative top-20 mb-60 w-full">
        <UndrawLostOnline className="absolute -top-40 max-w-lg left-2/3" />
        <div className="col-span-1" />
        <div className="col-span-8">
          <p className="text-purple-500 font-quicksand text-5xl font-medium ">
            {genre}
          </p>
        </div>
        <div className="col-span-2">
          <Button
            variant="text"
            color="primary"
            className="relative left-1/3"
            onClick={history.goBack}
          >
            <ArrowBackIcon fontSize="large" />{" "}
            <span className="text-xl font-light font-quicksand"> Go Back</span>
          </Button>
        </div>
        <div className="col-span-1" />
        <div className="col-span-1" />
        <div className="col-span-7">
          <p className="text-white font-roboto text-2xl font-light ">
            Genre Details here Lorem Ipsum Dolor Sit Amet
          </p>
          <hr className="text-white my-2" />
          <div className="grid grid-cols-4 gap-2">
            {animeList.map((item, id) =>
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
        </div>
        <div className="col-span-3">
          <div className="w-full my-2.5 h-96 bg-black rounded-lg"></div>
          <div className="w-full my-2.5 h-96 bg-black rounded-lg overflow-y-scroll">
            <p className="text-white my-2 font-roboto text-lg font-light  text-center">
              Other Genres
            </p>
            <div className="mx-1 my-2">
              {genreList.map((item, id) => (
                <Link to={`/genre/${item.name}`}>
                  <Button
                    key={id}
                    className="m-1 py-1 "
                    variant="outlined"
                    color="secondary"
                    style={{ borderRadius: 20 }}
                  >
                    <p className="font-roboto text-xs font-light ">
                      {item.name}
                    </p>
                  </Button>
                </Link>
              ))}
            </div>
          </div>
          <div className="w-full my-2.5 h-96 bg-black rounded-lg">
            <p className="relative text-white top-1/2 text-center">
              © AniLite 2021, made with {"<3"} by Shivansh & Aarush
            </p>
          </div>
        </div>
        <div className="col-span-1" />
      </div>
    </>
  );
}

export default CharacterDetailPage;
