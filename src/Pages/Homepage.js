import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { makeStyles, Typography, Grid, Box, Button } from "@material-ui/core";
import LatestAnimeListCarousel from "../Components/LatestAnimeListCarousel";
import LatestMovieListCarousel from "../Components/LatestMovieListCarousel";
import TopAnimeSection from "../Components/TopAnimeSection";
import characterList from "../Data/characterList.json";

const useStyles = makeStyles((theme) => ({
  CarouselItem: {
    height: "100vh",
  },
  button: {
    display: "flex",
    margin: 10,
    textTransform: "capitalize",
    padding: "3px 5px",
  },
}));

export default function Homepage() {
  const classes = useStyles();
  return (
    <>
      <div>
        <Carousel fade>
          <Carousel.Item className={classes.CarouselItem}>
            <img
              className="d-block w-100"
              src="https://wallpapercave.com/wp/wp1858907.png"
              alt="Steins;Gate"
            />
            <Carousel.Caption>
              <h3>Steins;Gate</h3>
              <p>El Psy Congru</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className={classes.CarouselItem}>
            <img
              className="d-block w-100"
              src="https://c4.wallpaperflare.com/wallpaper/839/616/962/gasai-yuno-wallpaper-preview.jpg"
              alt="Future Diary"
            />

            <Carousel.Caption>
              <h3>Future Diary</h3>
              <p>Things we do for love</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className={classes.CarouselItem}>
            <img
              className="d-block w-100"
              src="https://c4.wallpaperflare.com/wallpaper/292/734/554/dragon-ball-super-8k-goku-black-4k-wallpaper-preview.jpg"
              alt="Dragon Ball Super"
            />

            <Carousel.Caption>
              <h3>Dragon Ball Super</h3>
              <p>Kame Hame Ha</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className={classes.CarouselItem}>
            <img
              style={{ height: "120%" }}
              className="d-block w-100"
              src="https://wallpapercave.com/wp/wp2538697.jpg"
              alt="When They Cry"
            />

            <Carousel.Caption>
              <h3>When They Cry</h3>
              <p>Mipaaah!</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <Grid container>
        <Grid item xs={1} />
        <Grid
          item
          style={{
            display: "flex",
            flexDirection: "row",
            alignContent: "center",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          xs={10}
        >
          <Box
            fontWeight={700}
            style={{
              color: "white",
            }}
            fontSize="h4.fontSize"
          >
            Latest Animes
          </Box>
          <div>
            <Button
              style={{
                height: "initial",
                color: "white",
                borderRadius: 15,
                borderColor: "white",
                background: "#363636",
                margin: "10px 0 0 0",
                marginLeft: "auto",
                marginRight: 10,
              }}
              className={classes.button}
              variant="outlined"
            >
              Show All
            </Button>
          </div>
        </Grid>
        <Grid item xs={1} />
        <Grid item xs={1} />
        <Grid item xs={10}>
          <LatestAnimeListCarousel />
        </Grid>
        <Grid item xs={1} />
        <Grid item xs={1} />
        <Grid item xs={6}>
          <Box
            fontWeight={700}
            style={{
              color: "white",
            }}
            fontSize="h4.fontSize"
          >
            Top Anime
          </Box>
          <TopAnimeSection />
        </Grid>
        <Grid item xs={4}>
          {/* <Box
            fontWeight={700}
            style={{
              color: "white",
            }}
            fontSize="h4.fontSize"
          >
            Air Schedule
          </Box> */}
        </Grid>
        <Grid item xs={1} />
        <Grid item xs={1} />
        <Grid
          item
          style={{
            display: "flex",
            flexDirection: "row",
            alignContent: "center",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          xs={10}
        >
          <Box
            fontWeight={700}
            style={{
              color: "white",
            }}
            fontSize="h4.fontSize"
          >
            Top Characters
          </Box>
          <div>
            <Button
              style={{
                height: "initial",
                color: "white",
                borderRadius: 15,
                borderColor: "white",
                background: "#363636",
                marginLeft: "auto",
                marginRight: 10,
              }}
              className={classes.button}
              variant="outlined"
            >
              Show All
            </Button>
          </div>
        </Grid>
        <Grid item xs={1} />
        <Grid item xs={1} />
        <Grid
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            flexWrap: "wrap",
          }}
          item
          xs={10}
        >
          {characterList.slice(0, 14).map((item, id) => (
            <div style={{ textAlign: "center" }} key={id}>
              <img
                style={{
                  maxHeight: "200px",
                  margin: "0 26px",
                  borderRadius: 15,
                }}
                src="https://media.kitsu.io/characters/images/411/original.jpg?1483096805"
                alt=""
              />
              <Typography
                style={{
                  padding: 0,
                  margin: 0,
                  transform: "translateY(-100%)",
                  color: "black",
                }}
                noWrap={true}
                variant="body1"
              >
                Luffy
              </Typography>
            </div>
          ))}
        </Grid>
        <Grid item xs={1} />
        <Grid item xs={1} />
        <Grid
          item
          style={{
            display: "flex",
            flexDirection: "row",
            alignContent: "center",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          xs={10}
        >
          <Box
            fontWeight={700}
            style={{
              color: "white",
            }}
            fontSize="h4.fontSize"
          >
            Latest Anime Movies
          </Box>
          <div>
            <Button
              style={{
                height: "initial",
                color: "white",
                borderRadius: 15,
                borderColor: "white",
                background: "#363636",
                margin: "10px 0 0 0",
                marginLeft: "auto",
                marginRight: 10,
              }}
              className={classes.button}
              variant="outlined"
            >
              Show All
            </Button>
          </div>
        </Grid>
        <Grid item xs={1} />
        <Grid item xs={1} />
        <Grid item xs={10}>
          <LatestMovieListCarousel />
        </Grid>
        <Grid item xs={1} />
        <Grid item xs={1} />
      </Grid>
    </>
  );
}
