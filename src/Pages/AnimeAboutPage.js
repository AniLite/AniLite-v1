import { Button, Card, Box, Typography, makeStyles } from "@material-ui/core";
import React from "react";
import animeDetail from "../Data/animeDetail.json";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import AnimeListCarousel from "../Components/AnimeListCarousel";
import Footer from "../Components/Footer";
import animeList from "../Data/animeList.json";
import { ReactComponent as Undraw_dreamer } from "../Media/Undraw_dreamer.svg";
import { ReactComponent as Undraw_Waiting__for_you } from "../Media/Undraw_Waiting__for_you.svg";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  infoCards: {
    padding: 6,
    marginBottom: 10,
    borderRadius: 15,
  },
}));

export default function AnimeAboutPage() {
  const classes = useStyles();
  return (
    <>
      <img
        className="w-full absolute"
        id="animeAboutCoverImageGradient"
        src={animeDetail.cover_image}
        alt=""
      />
      <div className="grid grid-cols-12 gap-4 relative top-40 mb-60 w-full">
        <div className="col-span-1" />
        <div className="col-span-10">
          <p className="text-white font-roboto text-6xl font-bold ">
            {animeDetail.name_en}
          </p>
        </div>
        <div className="col-span-1" />
        <div className="col-span-1" />
        <div className="col-span-3">
          <img className="w-9/12" src={animeDetail.poster_image} alt="" />
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
            {animeDetail.about}
          </p>
        </div>
        <div className="col-span-1" />
        <div className="col-span-1" />
        <div className="col-span-10">
          {animeDetail.genres.map((item, id) => (
            <Link to={`/genre/${item.name}`}>
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
                  {animeDetail.name_en}
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
                  {animeDetail.name_jp}
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
                  {animeDetail.type}
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
                  {animeDetail.is_completed ? "Completed" : "Ongoing"}
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
                  {animeDetail.num_of_eps}
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
                  {animeDetail.started}
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
                  {animeDetail.genres.map((item) => (
                    <Typography style={{ fontSize: "1.6rem" }} color="initial">
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
                  {animeDetail.studio}
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
                  {animeDetail.ended}
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
                  {animeDetail.rating}
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
          <Undraw_Waiting__for_you className="max-w-md" />
        </div>
        <div className="col-span-1" />
        <div className="col-span-1" />
        <div className="col-span-6">
          <p className="text-white font-quicksand text-5xl font-medium">
            Episode Summary
          </p>
          <AnimeListCarousel isLarge={false} needModal={true} />
        </div>
        <div className="col-span-4">
          <Undraw_dreamer className="absolute max-w-lg" />
        </div>
        <div className="col-span-1" />
        <div className="col-span-1" />
        <div className="col-span-6">
          <p className="text-white font-quicksand text-5xl font-medium">Cast</p>
          <AnimeListCarousel isLarge={false} needModal={false} />
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
          <AnimeListCarousel isLarge={true} data={animeList} />
        </div>
        <div className="col-span-1" />
      </div>
      <Footer />
    </>
  );
}
