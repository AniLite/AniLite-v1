import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import "./AnimeListCarousel.css";
import { Modal, Fade, Backdrop, IconButton, Button } from "@material-ui/core";
import HighlightOffOutlinedIcon from "@material-ui/icons/HighlightOffOutlined";
import { ReactComponent as UndrawGardening } from "../Media/UndrawGardening.svg";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const responsive_large = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
  },
};

const responsive_small = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
  },
};

const responsive_small_noModal = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
  },
};

export default function AnimeListCarousel(props) {
  const [open, setOpen] = React.useState(false);
  const [details, setDetails] = React.useState([]);

  const handleOpen = (Detail, event) => {
    setDetails(Detail);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const prevEpi = () => {
    let index =
      props.episode_summary.map((e) => e[0].Title).indexOf(details[0]) - 1;

    setDetails([
      props.episode_summary[index][0].Title,
      props.episode_summary[index][0].Summary,
      props.episode_summary[index][0].Thumbnail,
      props.episode_summary[index][0]["Air Date"],
    ]);
  };

  const nextEpi = () => {
    let index =
      props.episode_summary.map((e) => e[0].Title).indexOf(details[0]) + 1;

    setDetails([
      props.episode_summary[index][0].Title,
      props.episode_summary[index][0].Summary,
      props.episode_summary[index][0].Thumbnail,
      props.episode_summary[index][0]["Air Date"],
    ]);
  };
  return (
    <>
      <Carousel
        className="py-10"
        responsive={
          props.isLarge
            ? responsive_large
            : props.needModal
            ? responsive_small
            : responsive_small_noModal
        }
        infinite={true}
        centerMode={props.isLarge ? true : false}
        ssr
      >
        {props.isLarge
          ? Array.from(props.data).map((item, id) => (
              <div key={id}>
                <div id="listitems" className="mx-3 h-full">
                  <Link to={`/anime-about/${item.slug}`}>
                    <img
                      id="listitems"
                      className="h-full rounded-md"
                      style={{ height: "250px" }}
                      src={item.poster_image}
                      alt=""
                    />
                  </Link>
                </div>
                <div className="relative -top-9 flex flex-col justify-center align-middle items-center h-16">
                  <p className="text-white text-center font-quicksand mx-3">
                    {item.name_en}
                  </p>
                  <hr
                    className="text-transparent w-4/6"
                    style={{
                      color: "white",
                      border: "0.01rem solid white",
                      height: "0px",
                    }}
                  />
                  <p className="text-purple-300 text-center font-quicksand">
                    {item.is_completed ? "Completed" : "Ongoing"}
                  </p>
                </div>
              </div>
            ))
          : props.needModal
          ? props.episode_summary.map((item, id) => {
              let Detail = [
                item[0].Title,
                item[0].Summary,
                item[0].Thumbnail,
                item[0]["Air Date"],
              ];
              return (
                <div key={id}>
                  <div
                    id="listitems"
                    className="mx-3 h-full"
                    onClick={(event) => handleOpen(Detail, event)}
                  >
                    <img
                      id="listitems"
                      className="w-full rounded-md"
                      src={
                        item[0].Thumbnail !== ""
                          ? item[0].Thumbnail
                          : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8fX8lNuugRezDb-xv_aMZ09LyTX-jQoGssA&usqp=CAU"
                      }
                      alt=""
                    />
                  </div>
                  <div className="relative -top-9  ">
                    <p className="text-white text-center font-quicksand mx-3">
                      {item[0].Title}
                    </p>
                    <hr className="text-white mx-5" />
                    <p className="text-white text-center font-light font-quicksand">
                      Episode {id + 1}
                    </p>
                    <p className="text-white text-center font-extralight font-quicksand">
                      {item[0]["Air Date"]}
                    </p>
                  </div>
                </div>
              );
            })
          : props.characters.map((item, id) => (
              <Link key={id} to={`/characters/${item.slug}`}>
                <div className="col-span-1 mx-4 mt-2.5">
                  <img
                    id="listitems"
                    className="w-full h-full rounded-md"
                    style={{ height: "240px" }}
                    src={
                      item.image === ""
                        ? "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fc0f78fb-9444-4b33-849c-097988b52dc4/d6v4ofz-90d17e73-3600-4298-9f97-1d073ce674b2.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2ZjMGY3OGZiLTk0NDQtNGIzMy04NDljLTA5Nzk4OGI1MmRjNFwvZDZ2NG9mei05MGQxN2U3My0zNjAwLTQyOTgtOWY5Ny0xZDA3M2NlNjc0YjIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.MRQ4WpdkdCbQ8BuGG6a6f5d4fsv0G1ZJHBDXJ2fU2dg"
                        : item.image
                    }
                    alt=""
                  />
                  <div className="relative -top-5">
                    <p className="text-white text-center font-quicksand mx-1">
                      {item.name}
                    </p>
                    <hr className="text-white mx-5" />
                    {/* <p className="text-white text-center font-quicksand">Anime</p> */}
                  </div>
                </div>
              </Link>
            ))}
      </Carousel>
      <Modal
        aria-labelledby="transition-modal-details"
        aria-describedby="transition-modal-description"
        open={open}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 4000,
        }}
        onKeyDown={handleClose}
        style={{
          direction: "flex",
          marginLeft: "auto",
          marginRight: "auto",
          alignItems: "center",
          justifyContent: "center",
          top: "50%",
          transform: "translateY(-50%)",
          width: "75%",
          backgroundColor: "rgba(0,0,0,0.5)",
          backgroundImage:
            details[2] !== ""
              ? "url(" + details[2] + ")"
              : "url(http://www.100hdwallpapers.com/cs_size/3d_abstract/ios_13_ipados_dark_mode_blue-cs_size.jpg)",
          backgroundBlendMode: "soft-light",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "75%",
        }}
      >
        <Fade in={open}>
          <div className="outline-none">
            <IconButton
              aria-label="Close"
              onClick={handleClose}
              style={{
                position: "absolute",
                top: 0,
                left: "90%",
                color: "rgba(255,255,255,0.5)",
              }}
            >
              <pre>Esc </pre>
              <HighlightOffOutlinedIcon
                className="hover:text-white"
                fontSize="large"
              />
            </IconButton>

            <div className="absolute text-white p-5 top-1/2 transform -translate-y-1/2 text-center w-full">
              <p className="absolute top-0">
                <span className="text-purple-500">Aired: </span> {details[3]}
              </p>
              <p className="font-quicksand font-semibold text-3xl my-2 text-center">
                {details[0]}
              </p>
              <p className="text-center mt-4">{details[1]}</p>
            </div>
            <div className="absolute top-1/2 w-full">
              {props.episode_summary &&
              props.episode_summary.map((e) => e[0].Title).indexOf(details[0]) -
                1 !==
                -1 ? (
                <IconButton color="secondary" onClick={prevEpi}>
                  <ArrowBackIosIcon color="secondary" />
                </IconButton>
              ) : (
                <IconButton disabled>
                  <ArrowBackIosIcon className="text-gray-600" />
                </IconButton>
              )}

              {props.episode_summary &&
              props.episode_summary.map((e) => e[0].Title).indexOf(details[0]) +
                1 !==
                props.episode_summary.length ? (
                <IconButton
                  className="float-right"
                  color="secondary"
                  onClick={nextEpi}
                >
                  <ArrowForwardIosIcon color="secondary" />
                </IconButton>
              ) : (
                <IconButton className="float-right" disabled>
                  <ArrowForwardIosIcon className="text-gray-600" />
                </IconButton>
              )}
            </div>
          </div>
        </Fade>
      </Modal>
    </>
  );
}
