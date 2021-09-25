import { Button, Card, Box, Typography, makeStyles } from "@material-ui/core";
import React from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { listAnimeDetail } from "../store/actions/animeActions";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import AnimeListCarousel from "../Components/AnimeListCarousel";
import Footer from "../Components/Footer";
import { motion } from "framer-motion";
import { ReactComponent as UndrawDreamer } from "../Media/UndrawDreamer.svg";
import { ReactComponent as UndrawWaitingForYou } from "../Media/UndrawWaitingForYou.svg";
import { Link } from "react-router-dom";
import { ReactComponent as Loader } from "../Media/Loader.svg";
import FadeInWhenVisible from "../Components/FadeInWhenVisible";

const useStyles = makeStyles((theme) => ({
  infoCards: {
    padding: 12,
    // marginBottom: 10,
    borderRadius: 15,
  },
}));

function colorGenerator() {
  var letters = "BCDEF".split("");
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * letters.length)];
  }
  return color;
}

export default function AnimeAboutPage() {
  const [display, setDisplay] = React.useState(false);
  const { animeName } = useParams();
  const animeSlug = animeName;
  const animeDetail = useSelector((state) => state.animeDetail);
  const { anime, error, loading } = animeDetail;

  const animeList = useSelector((state) => state.animeList);
  const { animes } = animeList;
  let data = [...animes];
  const dispatch = useDispatch();

  const [opacity, setOpacity] = React.useState(1);
  const listenScrollEvent = () => {
    if (window.scrollY > 5) {
      let opacity = window.scrollY / (0.5 * window.innerHeight);
      console.log(opacity);
      setOpacity(1 - opacity);
    } else {
      setOpacity(1);
    }
  };

  React.useEffect(() => {
    if (anime.slug !== animeSlug) {
      dispatch(listAnimeDetail(animeSlug));
    }
    setDisplay(true);
    window.addEventListener("scroll", listenScrollEvent);
    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, [dispatch, animeName]);

  const classes = useStyles();

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
      <motion.div
        animate={{ opacity: [0, 1] }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <div className="bg-black">
          <img
            className="w-full h-screen fixed opacity-50 filter blur-sm"
            id="animeAboutCoverImageGradient"
            src={anime.cover_image}
            alt=""
          />
        </div>

        <div className="grid grid-cols-12 gap-4 relative top-40 mb-60 w-full ">
          <div className="col-span-2" />
          {/* <div className="col-span-3">
            <img className="w-9/12" src={anime.poster_image} alt="" />
          </div>
          <div className="col-span-1" /> */}
          <div
            className="col-span-8 rounded-xl"
            // style={{
            //   backgroundImage:
            //     "linear-gradient(to bottom, rgba(0,0,0,0.6)0%, rgba(0,0,0,0.3)70%, transparent)",
            // }}
          >
            <p
              className="text-purple-500 font-roboto text-6xl font-bold"
              style={{
                textShadow: "2px 2px 5px black",
                opacity: opacity,
                letterSpacing: "1px",
              }}
            >
              {anime.name_en}
            </p>
            <br />
            <div className="col-span-2" />
            <div className="col-span-2" />
            <div className="col-span-8 rounded-xl" style={{ zIndex: 2 }}>
              <div className="max-h-96 overflow-y-scroll" style={{ zIndex: 2 }}>
                <p
                  className="text-white font-roboto text-lg font-normal whitespace-pre-wrap "
                  style={{
                    textShadow: "1px 1px 2px black",
                    opacity: opacity,
                    zIndex: 2,
                  }}
                >
                  {anime.about}
                </p>
              </div>
            </div>
            <div className="col-span-2" />
          </div>
          <div className="col-span-2" />
          <div className="col-span-2" />
          <div className="col-span-8">{/*  */}</div>

          <div className="col-span-1" />
        </div>
        <div
          className="grid grid-cols-12 gap-4 absolute mb-60 w-full"
          style={{ top: "50vh", paddingTop: "50vh" }}
          id="temp"
        >
          <div className="col-span-2" />
          <div className="col-span-8">
            <FadeInWhenVisible>
              <p
                className="text-purple-500 font-roboto text-6xl mb-10 font-bold"
                // style={{
                //   opacity: 1 - opacity,
                //   transform: "scale(" + (1 - opacity) + ")",
                // }}
              >
                {anime.name_en}
              </p>
            </FadeInWhenVisible>
          </div>
          <div className="col-span-2" />
          <div className="col-span-2" />
          <div className="col-span-3">
            <img className="w-9/12" src={anime.poster_image} alt="" />
            <div className="relative justify-center align-middle items-center w-9/12">
              {display &&
                anime.genres.map((item, id) => {
                  {
                    /* let color = colorGenerator(); */
                  }
                  return (
                    <Link key={id} to={`/top-anime/${item.slug}`}>
                      <Button
                        key={id}
                        className="m-1"
                        color="secondary"
                        variant="outlined"
                        style={{
                          borderRadius: 20,
                          // color: color,
                          // borderColor: color,
                        }}
                      >
                        <p className="font-light font-quicksand">{item.name}</p>
                      </Button>
                    </Link>
                  );
                })}
            </div>
          </div>
          <div className="col-span-5">
            {/* <p className="text-white font-quicksand text-5xl font-medium mb-10">
              Info
            </p> */}
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
            >
              <Masonry gutter="10px">
                <Card
                  className={classes.infoCards}
                  style={{ background: "#B847CB" }}
                >
                  <Box
                    fontWeight={500}
                    style={{
                      color: "white",
                    }}
                    fontSize={"2rem"}
                    lineHeight={1}
                  >
                    English Name
                  </Box>
                  <Box
                    fontWeight={300}
                    style={{
                      color: "white",
                      marginTop: 20,
                    }}
                    fontSize={"1.5rem"}
                    lineHeight={1}
                  >
                    {anime.name_en}
                  </Box>
                </Card>
                <Card
                  className={classes.infoCards}
                  style={{ background: "#474CCB" }}
                >
                  <Box
                    fontWeight={500}
                    style={{
                      color: "white",
                    }}
                    fontSize={"2rem"}
                    lineHeight={1}
                  >
                    Japanese Name
                  </Box>
                  <Box
                    fontWeight={300}
                    style={{
                      color: "white",
                      marginTop: 20,
                    }}
                    fontSize={"1.5rem"}
                    lineHeight={1}
                  >
                    {anime.name_jp}
                  </Box>
                </Card>
                <Card
                  className={classes.infoCards}
                  style={{ background: "#8D1697" }}
                >
                  <Box
                    fontWeight={500}
                    style={{
                      color: "white",
                    }}
                    fontSize={"2rem"}
                    lineHeight={1}
                  >
                    Format
                  </Box>
                  <Box
                    fontWeight={300}
                    style={{
                      color: "white",
                      marginTop: 20,
                    }}
                    fontSize={"1.5rem"}
                    lineHeight={1}
                  >
                    {anime.type}
                  </Box>
                </Card>
                <Card
                  className={classes.infoCards}
                  style={{ background: "#AE4141" }}
                >
                  <Box
                    fontWeight={500}
                    style={{
                      color: "white",
                    }}
                    fontSize={"2rem"}
                    lineHeight={1}
                  >
                    Status
                  </Box>
                  <Box
                    fontWeight={300}
                    style={{
                      color: "white",
                      marginTop: 20,
                    }}
                    fontSize={"1.5rem"}
                    lineHeight={1}
                  >
                    {anime.is_completed ? "Completed" : "Ongoing"}
                  </Box>
                </Card>
                <Card
                  className={classes.infoCards}
                  style={{ background: "#5400BE" }}
                >
                  <Box
                    fontWeight={500}
                    style={{
                      color: "white",
                    }}
                    fontSize={"2rem"}
                    lineHeight={1}
                  >
                    Episodes
                  </Box>
                  <Box
                    fontWeight={300}
                    style={{
                      color: "white",
                      marginTop: 20,
                    }}
                    fontSize={"1.5rem"}
                    lineHeight={1}
                  >
                    {anime.num_of_eps}
                  </Box>
                </Card>
                <Card
                  className={classes.infoCards}
                  style={{ background: "#16973A" }}
                >
                  <Box
                    fontWeight={500}
                    style={{
                      color: "white",
                    }}
                    fontSize={"2rem"}
                    lineHeight={1}
                  >
                    Aired
                  </Box>
                  <Box
                    fontWeight={300}
                    style={{
                      color: "white",
                      marginTop: 20,
                    }}
                    fontSize={"1.5rem"}
                    lineHeight={1}
                  >
                    {anime.started === "1111-11-11"
                      ? "Not yet Aired"
                      : anime.started}
                  </Box>
                </Card>
                <Card
                  className={classes.infoCards}
                  style={{ background: "#B88400" }}
                >
                  <Box
                    fontWeight={500}
                    style={{
                      color: "white",
                    }}
                    fontSize={"2rem"}
                    lineHeight={1}
                  >
                    Studio
                  </Box>
                  <Box
                    fontWeight={300}
                    style={{
                      color: "white",
                      marginTop: 20,
                    }}
                    fontSize={"1.5rem"}
                    lineHeight={1}
                  >
                    {anime.studio}
                  </Box>
                </Card>
                <Card
                  className={classes.infoCards}
                  style={{ background: "#0AA2D2" }}
                >
                  <Box
                    fontWeight={500}
                    style={{
                      color: "white",
                    }}
                    fontSize={"2rem"}
                    lineHeight={1}
                  >
                    Ended
                  </Box>
                  <Box
                    fontWeight={300}
                    style={{
                      color: "white",
                      marginTop: 20,
                    }}
                    fontSize={"1.5rem"}
                    lineHeight={1}
                  >
                    {anime.ended === "1111-11-11"
                      ? "Not yet Aired"
                      : anime.ended}
                  </Box>
                </Card>

                <Card
                  className={classes.infoCards}
                  style={{ background: "#FF0000" }}
                >
                  <Box
                    fontWeight={500}
                    style={{
                      color: "white",
                    }}
                    fontSize={"2rem"}
                    lineHeight={1}
                  >
                    Popularity
                  </Box>
                  <Box
                    fontWeight={300}
                    style={{
                      color: "white",
                      marginTop: 20,
                    }}
                    fontSize={"1.5rem"}
                    lineHeight={1}
                  >
                    {anime.popularity_rank}
                    <br />
                    (All Anime)
                  </Box>
                </Card>
                <Card
                  className={classes.infoCards}
                  style={{ background: "#38C8D1" }}
                >
                  <Box
                    fontWeight={500}
                    style={{
                      color: "white",
                    }}
                    fontSize={"2rem"}
                    lineHeight={1}
                  >
                    Rating
                  </Box>
                  <Box
                    fontWeight={300}
                    style={{
                      color: "white",
                      marginTop: 20,
                    }}
                    fontSize={"1.5rem"}
                    lineHeight={1}
                  >
                    {anime.rating}
                  </Box>
                </Card>

                <Card
                  className={classes.infoCards}
                  style={{ background: "#5257D7" }}
                >
                  <Box
                    fontWeight={500}
                    style={{
                      color: "white",
                    }}
                    fontSize={"2rem"}
                    lineHeight={1}
                  >
                    Age Rating
                  </Box>
                  <Box
                    fontWeight={300}
                    style={{
                      color: "white",
                      marginTop: 20,
                    }}
                    fontSize={"1.5rem"}
                    lineHeight={1}
                  >
                    {anime.age_rating}
                  </Box>
                </Card>
                <Card
                  className={classes.infoCards}
                  style={{ background: "#5257D7" }}
                >
                  <Box
                    fontWeight={500}
                    style={{
                      color: "white",
                    }}
                    fontSize={"2rem"}
                    lineHeight={1}
                  >
                    Directors
                  </Box>
                  <Box
                    fontWeight={300}
                    style={{
                      color: "white",
                      marginTop: 20,
                    }}
                    fontSize={"1.5rem"}
                    lineHeight={1}
                  >
                    {anime.directors}
                  </Box>
                </Card>
              </Masonry>
            </ResponsiveMasonry>
          </div>
          <div className="col-span-2" />
          {display && anime.episode_summary[0][0].Title !== null ? (
            anime.type === "Anime (TV)" ? (
              <>
                <div className="col-span-2" />
                <div className="col-span-8">
                  <p className="text-white font-quicksand text-5xl font-medium">
                    Episode Summary
                  </p>
                  {display && (
                    <AnimeListCarousel
                      isLarge={false}
                      needModal={true}
                      episode_summary={anime.episode_summary}
                    />
                  )}
                </div>
                <div className="col-span-2" />
              </>
            ) : null
          ) : null}
          {display && anime.characters.length !== 0 ? (
            <>
              <div className="col-span-2" />
              <div className="col-span-8">
                <p className="text-white font-quicksand text-5xl font-medium">
                  Characters
                </p>
                {display && (
                  <AnimeListCarousel
                    isLarge={false}
                    needModal={false}
                    characters={anime.characters}
                  />
                )}
              </div>
              <div className="col-span-2" />
            </>
          ) : null}
          <div className="col-span-2" />
          <div className="col-span-8">
            <p className="text-white font-quicksand text-5xl font-medium ">
              Latest Anime
            </p>
          </div>
          <div className="col-span-2" />
          <div className="col-span-2" />
          <div className="col-span-8">
            {display && (
              <AnimeListCarousel
                isLarge={true}
                data={data
                  .sort((a, b) => (a.started < b.started ? 1 : -1))
                  .slice(0, 15)}
              />
            )}
          </div>
          <div className="col-span-2" />
          <div className="col-span-12">
            <Footer />
          </div>
        </div>
      </motion.div>
    )
  );
}
