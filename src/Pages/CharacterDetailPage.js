import React from "react";
import { useHistory } from "react-router";
import Button from "@material-ui/core/Button";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { ReactComponent as UndrawLostOnline } from "../Media/UndrawLostOnline.svg";
import Footer from "../Components/Footer";
import { listCharacterDetail } from "../store/actions/characterActions";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { ReactComponent as Loader } from "../Media/Loader.svg";

function CharacterDetailPage() {
  const [display, setDisplay] = React.useState(false);
  let { characterName } = useParams();

  const characterDetail = useSelector((state) => state.characterDetail);
  const { character, error, loading } = characterDetail;

  const dispatch = useDispatch();

  React.useEffect(() => {
    if (character.slug !== characterName) {
      dispatch(listCharacterDetail(characterName));
    }
    setDisplay(true);
  }, [dispatch, characterName]);

  let desc = null;
  const description = () => {
    desc = character.about.replace(/<br>/g, "\n");
    desc = desc.replace(/<span class="spoiler">/g, "");
    desc = desc.replaceAll("</span>", "");
    desc = desc.replaceAll("<p>", "");
    desc = desc.replaceAll("</p>", "");
    return desc;
  };

  let history = useHistory();

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
    { display } && (
      <>
        <div className="grid grid-cols-12 gap-4 relative top-20 mb-60 w-full">
          <div className="col-span-1" />
          <div className="col-span-8">
            <p className="text-purple-500 font-quicksand text-5xl font-medium ">
              Character Details
            </p>
          </div>
          <div className="col-span-2 ">
            <Button
              variant="text"
              color="primary"
              className="left-1/3 fixed"
              onClick={history.goBack}
            >
              <ArrowBackIcon fontSize="large" />{" "}
              <span className="text-xl font-light font-quicksand ">
                {" "}
                Go Back
              </span>
            </Button>
          </div>
          <div className="col-span-1" />
          <div className="col-span-1" />
          <div className="col-span-7">
            <p className="text-white font-roboto text-4xl font-medium mb-3">
              {character.name}
            </p>
            <p className="text-white font-roboto text-2xl font-light ">
              {display &&
                character.anime.map((anime, key) =>
                  key === character.anime.length - 1 ? (
                    <Link to={`/anime-about/${anime.slug}`}>{anime.name}</Link>
                  ) : (
                    <>
                      <Link to={`/anime-about/${anime.slug}`}>
                        {anime.name}
                      </Link>
                      {", "}
                    </>
                  )
                )}
            </p>
            <hr className="text-white my-2" />
            {display && character.other_names !== "" ? (
              <p className="text-white font-quicksand text-xl font-light mt-4">
                <span className="text-purple-500 font-roboto">
                  Other Names:{" "}
                </span>
                {character.other_names}
              </p>
            ) : null}
            <p className="text-white font-quicksand text-xl font-light mt-4 whitespace-pre-wrap">
              {character.about ? description() : "Not Available"}
            </p>
          </div>
          <div className="col-span-1" />
          <div className="col-span-2">
            <img
              className="w-full opacity-100 sticky top-20 rounded-xl"
              src={
                character.image === ""
                  ? "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fc0f78fb-9444-4b33-849c-097988b52dc4/d6v4ofz-90d17e73-3600-4298-9f97-1d073ce674b2.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2ZjMGY3OGZiLTk0NDQtNGIzMy04NDljLTA5Nzk4OGI1MmRjNFwvZDZ2NG9mei05MGQxN2U3My0zNjAwLTQyOTgtOWY5Ny0xZDA3M2NlNjc0YjIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.MRQ4WpdkdCbQ8BuGG6a6f5d4fsv0G1ZJHBDXJ2fU2dg"
                  : character.image
              }
              alt=""
            />
          </div>
          <div className="col-span-1" />
        </div>
        <Footer />
      </>
    )
  );
}

export default CharacterDetailPage;
