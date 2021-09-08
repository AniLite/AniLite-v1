import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import "./AnimeListCarousel.css";
import { Modal, Fade, Backdrop, IconButton } from "@material-ui/core";
import HighlightOffOutlinedIcon from "@material-ui/icons/HighlightOffOutlined";
import { ReactComponent as UndrawGardening } from "../Media/UndrawGardening.svg";

const responsive_large = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
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
    // the naming can be any, depends on you.
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
  return (
    <>
      <Carousel
        className="py-10"
        responsive={props.isLarge ? responsive_large : responsive_small}
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
                      className="w-full h-full rounded-md"
                      src={item.poster_image}
                      alt=""
                    />
                  </Link>
                </div>
                <div className="relative -top-9  ">
                  <p className="text-white text-center font-quicksand mx-3">
                    {item.name_en}
                  </p>
                  <hr className="text-white mx-5" />
                  <p className="text-white text-center font-quicksand">
                    {item.is_completed ? "Completed" : "Ongoing"}
                  </p>
                </div>
              </div>
            ))
          : props.needModal
          ? props.episode_summary.map((item, id) => {
              let Detail = [item[0].Title, item[0].Summary];
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
                      src={item[0].Thumbnail}
                      alt=""
                    />
                  </div>
                  <div className="relative -top-9  ">
                    <p className="text-white text-center font-quicksand mx-3">
                      {item[0].Title}
                    </p>
                    <hr className="text-white mx-5" />
                    <p className="text-white text-center font-quicksand">
                      {item[0].AirDate}
                    </p>
                    <p className="text-white text-center font-quicksand">
                      Episode {id + 1}
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
                    src={
                      item.image === ""
                        ? "https://i.pinimg.com/originals/92/3c/28/923c28ecd5eaebf767ada2b853180c33.jpg"
                        : item.image
                    }
                    alt=""
                  />
                  <div className="relative -top-10">
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
          timeout: 500,
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
          backgroundColor: "rgba(0,0,0,0.95)",
          height: "75%",
        }}
      >
        <Fade in={open}>
          <div className="outline-none">
            <UndrawGardening className="max-w-xs opacity-50 absolute -top-1/3 left-10" />
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

            <div className="absolute text-white shadow-xl p-5 top-1/2 transform -translate-y-1/2 text-center ">
              <p className="font-quicksand font-semibold text-3xl my-2 ">
                {details[0]}
              </p>
              <p>{details[1]}</p>
            </div>
          </div>
        </Fade>
      </Modal>
    </>
  );
}
