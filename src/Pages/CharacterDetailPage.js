import React from "react";
import { useHistory } from "react-router";
import Button from "@material-ui/core/Button";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { ReactComponent as UndrawLostOnline } from "../Media/UndrawLostOnline.svg";
import Footer from "../Components/Footer";
import { listCharacterDetail } from "../store/actions/characterActions";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
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
                  key === character.anime.length - 1
                    ? anime.name
                    : anime.name + ", "
                )}
            </p>
            <hr className="text-white my-2" />
            <p className="text-white font-quicksand text-xl font-light mt-4">
              <span className="text-purple-500 font-roboto">Other Names: </span>
              {character.other_names}
            </p>
            <p className="text-white font-quicksand text-xl font-light mt-4 whitespace-pre-wrap">
              {character.about ? description() : "Not Available"}
            </p>
          </div>
          <div className="col-span-1" />
          <div className="col-span-2">
            <img
              className="w-full opacity-100 sticky top-20 rounded-xl"
              src={character.image}
              alt=""
            />
            <UndrawLostOnline className="max-w-lg " />
          </div>
          <div className="col-span-1" />
        </div>
        <Footer />
      </>
    )
  );
}

export default CharacterDetailPage;
