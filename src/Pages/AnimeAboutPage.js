import React from "react";
import {
  makeStyles,
  Box,
  Grid,
  Typography,
  Button,
  Card,
  CardContent,
  Link,
  Modal,
  Backdrop,
  Fade,
} from "@material-ui/core";
import animeDetail from "../Data/animeDetail.json";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import LatestAnimeListCarousel from "../Components/LatestAnimeListCarousel";

const useStyles = makeStyles((theme) => ({
  coverImage: {
    height: "100vh",
    width: "100%",
    backgroundImage: "linear-gradient(red, green)",
  },
  coverImageGradient: {
    height: "100vh",
    background: (styleprops) => styleprops.background,
  },
  genreButton: {
    color: "white",
    borderColor: "white",
    borderRadius: 20,
    margin: 5,
    padding: "3px 10px",
    textAlign: "center",
  },
  infoCards: {
    padding: 6,
    marginBottom: 10,
    borderRadius: 15,
  },
  carousel: {
    margin: "10px 0px",
    padding: "0 30px 30px 0",
  },

  card: {
    margin: "0 10px 0 10px",
    height: "100%",
    borderRadius: 15,
    backgroundColor: "#222",
    textAlign: "center",
    color: "white",
  },
  img: {
    width: "100%",
    padding: "5%",
    borderRadius: 20,
    // maxHeight: "200px",
  },
  modal: {
    display: "flex",
    marginLeft: "auto",
    marginRight: "auto",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "rgba(0,0,0,0.8)",
  },
  paper: {
    backgroundColor: "rgba(0,0,0,0.8)",
    color: "white",
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const responsive = {
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
    items: 5,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 5,
  },
};

export default function AnimeAboutPage() {
  const [open, setOpen] = React.useState(false);
  const [details, setDetails] = React.useState([]);

  const handleOpen = (Detail, event) => {
    setDetails(Detail);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const styleprops = {
    background:
      "linear-gradient(to bottom, rgba(0,0,0, 0) 10%, rgba(0,0,0, 0.7) 50%, rgba(34, 34, 34, 1)), url(" +
      animeDetail.cover_image +
      ")",
  };
  const classes = useStyles(styleprops);
  return (
    <>
      <div className={classes.coverImageGradient}>
        <Grid
          container
          style={{ position: "relative", top: "20vh" }}
          spacing={1}
        >
          <Grid item xs={1} />

          <Grid item xs={10}>
            <Box
              fontWeight={700}
              style={{
                color: "white",
              }}
              fontSize="h3.fontSize"
            >
              {animeDetail.name_en}
            </Box>
          </Grid>
          <Grid item xs={1} />
          <Grid item xs={1} />
          <Grid item xs={2}>
            <img
              style={{ width: "100%" }}
              src={animeDetail.poster_image}
              alt=""
            />
          </Grid>
          <Grid item xs={2} />
          <Grid item xs={6}>
            <Typography
              style={{
                position: "relative",
                whiteSpace: "pre-wrap",
                maxHeight: 360,
                overflowY: "scroll",
                color: "white",
              }}
              variant="subtitle1"
              color="secondary"
              noWrap={true}
            >
              {animeDetail.about}
            </Typography>
          </Grid>
          <Grid item xs={1} />
          <Grid item xs={1} />
          <Grid item xs={10}>
            <div style={{ display: "flex", flexWrap: "wrap", marginTop: 20 }}>
              {animeDetail.genres.map((item) => (
                <Button variant="outlined" className={classes.genreButton}>
                  {item.name}
                </Button>
              ))}
            </div>
          </Grid>
        </Grid>
      </div>
      <Grid container spacing={1}>
        <Grid item xs={1} />
        <Grid item xs={6}>
          <Box
            fontWeight={700}
            style={{
              color: "white",
            }}
            fontSize="h3.fontSize"
          >
            Info
          </Box>
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
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={1} />
        <Grid item xs={1} />
        <Grid item xs={6}>
          <Box
            fontWeight={700}
            style={{
              color: "white",
            }}
            fontSize="h3.fontSize"
          >
            Episode Summary
          </Box>
          <Carousel
            className={classes.carousel}
            responsive={responsive}
            infinite={true}
            showDots={true}
            ssr
          >
            {animeDetail.episode_summary.map((item, id) => {
              let Detail = [item.Title, item.Summary];
              return (
                <div key={id}>
                  <Link
                    style={{ textDecoration: "none" }}
                    to={`/anime-about/${item.slug}`}
                  >
                    <Card
                      className={classes.card}
                      onClick={(event) => handleOpen(Detail, event)}
                    >
                      <img className={classes.img} src={item.Thumbnail} />
                      <CardContent style={{ padding: 5 }}>
                        <Typography
                          style={{ padding: 0, margin: 0 }}
                          gutterBottom
                          variant="h6"
                        >
                          {item.Title}
                        </Typography>
                        <Typography
                          style={{ padding: 0, margin: 0 }}
                          display={"inline"}
                          noWrap={true}
                          variant="body2"
                        >
                          {item.AirDate}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Link>
                </div>
              );
            })}
          </Carousel>
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={1} />
        <Grid item xs={1} />
        <Grid item xs={6}>
          <Box
            fontWeight={700}
            style={{
              color: "white",
            }}
            fontSize="h3.fontSize"
          >
            Cast
          </Box>
          <Carousel
            className={classes.carousel}
            responsive={responsive}
            infinite={true}
            showDots={true}
            ssr
          >
            {animeDetail.characters.map((item, id) => {
              return (
                <div style={{ textAlign: "center" }} key={id}>
                  <img
                    style={{
                      maxHeight: "200px",
                      // margin: "0 26px",
                      borderRadius: 15,
                    }}
                    src="https://media.kitsu.io/characters/images/411/original.jpg?1483096805"
                    alt=""
                  />
                  <Typography
                    style={{
                      padding: 0,
                      margin: 0,
                      // transform: "translateY(-100%)",
                      color: "white",
                    }}
                    noWrap={true}
                    variant="body1"
                  >
                    Luffy
                  </Typography>
                </div>
              );
            })}
          </Carousel>
        </Grid>
        <Grid item xs={4}></Grid>
        <Grid item xs={1} />
        <Grid item xs={1} />
        <Grid item xs={10}>
          <Box
            fontWeight={700}
            style={{
              color: "white",
            }}
            fontSize="h3.fontSize"
          >
            Similar Animes
          </Box>
          <LatestAnimeListCarousel />
        </Grid>
      </Grid>
      <Modal
        aria-labelledby="transition-modal-details"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2>{details[0]}</h2>
            <p>{details[1]}</p>
          </div>
        </Fade>
      </Modal>
    </>
  );
}
