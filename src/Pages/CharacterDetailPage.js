import React from "react";
import { useParams, useHistory } from "react-router";
import characterDetail from "../Data/characterDetail.json";
import Button from "@material-ui/core/Button";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { ReactComponent as Undraw_Lost_online } from "../Media/Undraw_Lost_online.svg";
import Footer from "../Components/Footer";

function CharacterDetailPage() {
  let { characterName } = useParams();
  let desc = characterDetail.about.replace(/<br>/g, "\n");
  desc = desc.replace(/<span class="spoiler">/g, "");
  desc = desc.replaceAll("</span>", "");
  let history = useHistory();

  return (
    <>
      <div className="grid grid-cols-12 gap-4 relative top-20 mb-60 w-full">
        <div className="col-span-1" />
        <div className="col-span-8">
          <p className="text-purple-500 font-quicksand text-5xl font-medium ">
            Character Details
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
          <p className="text-white font-roboto text-4xl font-medium mb-3">
            {characterDetail.name}
          </p>
          <p className="text-white font-roboto text-2xl font-light ">Anime</p>
          <hr className="text-white my-2" />
          <p className="text-white font-quicksand text-xl font-light mt-4">
            <span className="text-purple-500 font-roboto">Other Names: </span>
            {characterDetail.other_names}
          </p>
          <p className="text-white font-quicksand text-xl font-light mt-4 whitespace-pre-wrap">
            {desc}
          </p>
        </div>
        <div className="col-span-1" />
        <div className="col-span-2">
          <img
            className="w-full opacity-75 rounded-xl"
            src={characterDetail.image}
            alt=""
          />
          <Undraw_Lost_online className="max-w-lg " />
        </div>
        <div className="col-span-1" />
      </div>
      <Footer />
    </>
  );
}

export default CharacterDetailPage;
