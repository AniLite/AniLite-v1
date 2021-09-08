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

const useStyles = makeStyles((theme) => ({
  infoCards: {
    padding: 6,
    marginBottom: 10,
    borderRadius: 15,
  },
}));

export default function AnimeAboutPage() {
  const [display, setDisplay] = React.useState(false);
  const { animeName } = useParams();
  const animeSlug = animeName;

  const animeDetail = useSelector((state) => state.animeDetail);

  const { anime, error, loading } = animeDetail;

  const dispatch = useDispatch();

  React.useEffect(() => {
    if (anime.slug !== animeSlug) {
      dispatch(listAnimeDetail(animeSlug));
    }
    setDisplay(true);
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
        <img
          className="w-full h-screen absolute"
          id="animeAboutCoverImageGradient"
          src={anime.cover_image}
          alt=""
        />
        <div className="grid grid-cols-12 gap-4 relative top-40 mb-60 w-full">
          <div className="col-span-1" />
          <div className="col-span-10">
            <p className="text-white font-roboto text-6xl font-bold ">
              {anime.name_en}
            </p>
          </div>
          <div className="col-span-1" />
          <div className="col-span-1" />
          <div className="col-span-3">
            <img className="w-9/12" src={anime.poster_image} alt="" />
          </div>
          <div className="col-span-1" />
          <div
            className="col-span-6 max-h-96 overflow-y-scroll p-3 rounded-xl"
            style={{
              backgroundImage:
                "linear-gradient(to bottom, rgba(0,0,0,0.6)0%, rgba(0,0,0,0.3)70%, transparent)",
            }}
          >
            <p className="text-white font-roboto text-lg font-normal whitespace-pre-wrap ">
              {anime.about}
            </p>
          </div>
          <div className="col-span-1" />
          <div className="col-span-1" />
          <div className="col-span-10">
            {display &&
              anime.genres.map((item, id) => (
                <Link key={id} to={`/top-anime/${item.name}`}>
                  <Button
                    key={id}
                    className="m-1"
                    color="secondary"
                    variant="outlined"
                    style={{ borderRadius: 20 }}
                  >
                    <p className="font-light font-quicksand">{item.name}</p>
                  </Button>
                </Link>
              ))}
          </div>
          <div className="col-span-1" />
          <div className="col-span-12" />
          <div className="col-span-1" />

          <div className="col-span-6">
            <p className="text-white font-quicksand text-5xl font-medium mb-10">
              Info
            </p>
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
            >
              <Masonry gutter="20px">
                <Card
                  className={classes.infoCards}
                  style={{ background: "#B847CB" }}
                >
                  <Box
                    fontWeight={700}
                    style={{
                      color: "white",
                    }}
                    fontSize={"2.3rem"}
                    lineHeight={1.3}
                  >
                    English Name
                  </Box>
                  <Box
                    fontWeight={400}
                    style={{
                      color: "white",
                      marginTop: 10,
                    }}
                    fontSize={"1.6rem"}
                  >
                    {anime.name_en}
                  </Box>
                </Card>
                <Card
                  className={classes.infoCards}
                  style={{ background: "#474CCB" }}
                >
                  <Box
                    fontWeight={700}
                    style={{
                      color: "white",
                    }}
                    fontSize={"2.3rem"}
                    lineHeight={1.3}
                  >
                    Japanese Name
                  </Box>
                  <Box
                    fontWeight={400}
                    style={{
                      color: "white",
                      marginTop: 10,
                    }}
                    fontSize={"1.6rem"}
                  >
                    {anime.name_jp}
                  </Box>
                </Card>
                <Card
                  className={classes.infoCards}
                  style={{ background: "#8D1697" }}
                >
                  <Box
                    fontWeight={700}
                    style={{
                      color: "white",
                    }}
                    fontSize={"2.3rem"}
                    lineHeight={1.3}
                  >
                    Format
                  </Box>
                  <Box
                    fontWeight={400}
                    style={{
                      color: "white",
                      marginTop: 10,
                    }}
                    fontSize={"1.6rem"}
                  >
                    {anime.type}
                  </Box>
                </Card>
                <Card
                  className={classes.infoCards}
                  style={{ background: "#AE4141" }}
                >
                  <Box
                    fontWeight={700}
                    style={{
                      color: "white",
                    }}
                    fontSize={"2.3rem"}
                    lineHeight={1.3}
                  >
                    Status
                  </Box>
                  <Box
                    fontWeight={400}
                    style={{
                      color: "white",
                      marginTop: 10,
                    }}
                    fontSize={"1.6rem"}
                  >
                    {anime.is_completed ? "Completed" : "Ongoing"}
                  </Box>
                </Card>
                <Card
                  className={classes.infoCards}
                  style={{ background: "#5400BE" }}
                >
                  <Box
                    fontWeight={700}
                    style={{
                      color: "white",
                    }}
                    fontSize={"2.3rem"}
                    lineHeight={1.3}
                  >
                    Episodes
                  </Box>
                  <Box
                    fontWeight={400}
                    style={{
                      color: "white",
                      marginTop: 10,
                    }}
                    fontSize={"1.6rem"}
                  >
                    {anime.num_of_eps}
                  </Box>
                </Card>
                <Card
                  className={classes.infoCards}
                  style={{ background: "#16973A" }}
                >
                  <Box
                    fontWeight={700}
                    style={{
                      color: "white",
                    }}
                    fontSize={"2.3rem"}
                    lineHeight={1.3}
                  >
                    Aired
                  </Box>
                  <Box
                    fontWeight={400}
                    style={{
                      color: "white",
                      marginTop: 10,
                    }}
                    fontSize={"1.6rem"}
                  >
                    {anime.started}
                  </Box>
                </Card>
                <Card
                  className={classes.infoCards}
                  style={{ background: "#AC0C63" }}
                >
                  <Box
                    fontWeight={700}
                    style={{
                      color: "white",
                    }}
                    fontSize={"2.3rem"}
                    lineHeight={1.3}
                  >
                    Genres
                  </Box>
                  <Box
                    fontWeight={400}
                    style={{
                      color: "white",
                      marginTop: 10,
                    }}
                  >
                    {display &&
                      anime.genres.map((item, key) => (
                        <Typography
                          key={key}
                          style={{ fontSize: "1.6rem" }}
                          color="initial"
                        >
                          {item.name}
                        </Typography>
                      ))}
                  </Box>
                </Card>
                <Card
                  className={classes.infoCards}
                  style={{ background: "#B88400" }}
                >
                  <Box
                    fontWeight={700}
                    style={{
                      color: "white",
                    }}
                    fontSize={"2.3rem"}
                    lineHeight={1.3}
                  >
                    Studio
                  </Box>
                  <Box
                    fontWeight={400}
                    style={{
                      color: "white",
                      marginTop: 10,
                    }}
                    fontSize={"1.6rem"}
                  >
                    {anime.studio}
                  </Box>
                </Card>
                <Card
                  className={classes.infoCards}
                  style={{ background: "#0AA2D2" }}
                >
                  <Box
                    fontWeight={700}
                    style={{
                      color: "white",
                    }}
                    fontSize={"2.3rem"}
                    lineHeight={1.3}
                  >
                    Ended
                  </Box>
                  <Box
                    fontWeight={400}
                    style={{
                      color: "white",
                      marginTop: 10,
                    }}
                    fontSize={"1.6rem"}
                  >
                    {anime.ended}
                  </Box>
                </Card>
                <Card />
                <Card
                  className={classes.infoCards}
                  style={{ background: "#FF0000" }}
                >
                  <Box
                    fontWeight={700}
                    style={{
                      color: "white",
                    }}
                    fontSize={"2.3rem"}
                    lineHeight={1.3}
                  >
                    Popularity
                  </Box>
                  <Box
                    fontWeight={400}
                    style={{
                      color: "white",
                      marginTop: 10,
                    }}
                    fontSize={"1.6rem"}
                  >
                    #123
                    <br />
                    (All Anime)
                  </Box>
                </Card>
                <Card
                  className={classes.infoCards}
                  style={{ background: "#38C8D1" }}
                >
                  <Box
                    fontWeight={700}
                    style={{
                      color: "white",
                    }}
                    fontSize={"2.3rem"}
                    lineHeight={1.3}
                  >
                    Rating
                  </Box>
                  <Box
                    fontWeight={400}
                    style={{
                      color: "white",
                      marginTop: 10,
                    }}
                    fontSize={"1.6rem"}
                  >
                    {anime.rating}
                  </Box>
                </Card>
                <Card />
                <Card />
                <Card
                  className={classes.infoCards}
                  style={{ background: "#5257D7" }}
                >
                  <Box
                    fontWeight={700}
                    style={{
                      color: "white",
                    }}
                    fontSize={"2.3rem"}
                    lineHeight={1.3}
                  >
                    Source
                  </Box>
                  <Box
                    fontWeight={400}
                    style={{
                      color: "white",
                      marginTop: 10,
                    }}
                    fontSize={"1.6rem"}
                  >
                    Manga
                  </Box>
                </Card>
              </Masonry>
            </ResponsiveMasonry>
          </div>
          <div className="col-span-4">
            <UndrawWaitingForYou className="max-w-md" />
          </div>
          <div className="col-span-1" />
          <div className="col-span-1" />
          <div className="col-span-6">
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
          <div className="col-span-4">
            <UndrawDreamer className="absolute max-w-lg" />
          </div>
          <div className="col-span-1" />
          <div className="col-span-1" />
          <div className="col-span-6">
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
          <div className="col-span-4"></div>
          <div className="col-span-1" />
          <div className="col-span-1" />
          <div className="col-span-10">
            <p className="text-white font-quicksand text-5xl font-medium ">
              Latest Anime
            </p>
          </div>
          <div className="col-span-1" />
          <div className="col-span-1" />
          <div className="col-span-10">
            {/* {display && <AnimeListCarousel isLarge={true} data={animeList} /> } */}
          </div>
          <div className="col-span-1" />
        </div>
        <Footer />
      </motion.div>
    )
  );
}
