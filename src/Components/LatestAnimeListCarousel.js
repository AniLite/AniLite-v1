import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Typography } from "@material-ui/core";
import { Card, CardContent, CardMedia } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import "./LatestAnimeListCarousel.css";

const useStyles = makeStyles((theme) => ({
  grid: {
    // padding: '0 12px'
  },
  carousel: {
    margin: "10px 0px",
    padding: "0 30px 30px 0",
  },

  // media: {
  //   height: 0,
  //   paddingTop: "120%", // 16:9
  //   [theme.breakpoints.down("sm")]: {
  //     paddingTop: "150%",
  //   },
  // },

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
}));

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 7,
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

const images = [
  "https://media.kitsu.io/anime/poster_images/24/original.jpg?1597604321",
  "https://media.kitsu.io/anime/poster_images/30/original.png?1597698375",
  "https://media.kitsu.io/anime/poster_images/31/original.jpg?1597698802",
  "https://media.kitsu.io/anime/poster_images/34/original.jpg?1597604365",
  "https://media.kitsu.io/anime/poster_images/29/original.jpg?1597696956",
  "https://media.kitsu.io/anime/poster_images/35/original.jpg?1597690716",
  "https://media.kitsu.io/anime/poster_images/30/original.png?1597698375",
];

export default function LatestAnimeListCarousel(props) {
  const classes = useStyles();
  return (
    // <Grid className={classes.grid} container spacing={1} justifyContent='center'>
    // <Grid item xs={10} sm={10}>
    <Carousel
      className={classes.carousel}
      responsive={responsive}
      infinite={true}
      showDots={true}
      ssr
    >
      {images.map((item, id) => (
        <div key={id}>
          <Link
            style={{ textDecoration: "none" }}
            to={`/anime-about/${item[1].slug}`}
          >
            <Card className={classes.card}>
              <img className={classes.img} src={item} />
              <CardContent style={{ padding: 5 }}>
                <Typography
                  style={{ padding: 0, margin: 0 }}
                  gutterBottom
                  variant="h6"
                >
                  Hello
                </Typography>
                <Typography
                  style={{ padding: 0, margin: 0 }}
                  display={"inline"}
                  noWrap={true}
                  variant="body2"
                >
                  Completed
                </Typography>
              </CardContent>
            </Card>
          </Link>
        </div>
      ))}
    </Carousel>
    // </Grid>
    // </Grid>
  );
}
