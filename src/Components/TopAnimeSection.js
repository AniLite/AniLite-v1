import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import {
  Button,
  Menu,
  MenuItem,
  Card,
  CardContent,
  Typography,
  Grid,
} from "@material-ui/core";
import genreList from "../Data/genreList.json";
import animeList from "../Data/animeList.json";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginTop: 10,
    marginBottom: 10,
    color: "white",
    border: "1px solid white",
    borderRadius: 20,
    width: 150,
  },

  buttongroup: {
    marginTop: 10,
    marginBottom: 10,
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      flexDirection: "row",
      overflow: "scroll",
      "&::-webkit-scrollbar": {
        display: "none",
      },
      msOverflowStyle: "none",
      scrollbarWidth: "none",
    },
  },
  button: {
    color: "white",
    borderColor: "white",
    padding: 3,
    margin: "0 10px 0 0",
    textTransform: "capitalize",
    fontSize: "0.7rem",
    borderRadius: 30,
  },
  list: {
    // display: "grid",
    // gridGap: 60,
    // gridRowStart: 1,
    // gridRowEnd: 3,
  },
  card: {
    margin: "10px 10px 10px 10px",
    // height: "100%",
    // width: "30%",
    borderRadius: 15,
    backgroundColor: "#202020",
    textAlign: "center",
    color: "white",
  },
  img: {
    width: "100%",
    padding: "5%",
    borderRadius: 20,
    // maxHeight: "200px",
  },
  showallbutton: {
    display: "flex",
    margin: 10,
    width: "100%",
    textTransform: "capitalize",
    padding: "3px 5px",
  },
}));

const data = [...animeList];

export default function TopAnimeSection(props) {
  const [genre, setGenre] = React.useState(null);
  const handleClick = (name, event) => {
    setGenre(name);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [value, setValue] = React.useState("All");

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, title) => {
    setValue(title);
    setAnchorEl(null);
  };

  const handleMenuItemClose = () => {
    setAnchorEl(null);
  };

  const classes = useStyles();
  return (
    <>
      <div>
        <Button
          className={classes.menuButton}
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleMenuClick}
        >
          {value}
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleMenuItemClose}
        >
          <MenuItem onClick={(event) => handleMenuItemClick(event, "All")}>
            All
          </MenuItem>
          <MenuItem
            onClick={(event) => handleMenuItemClick(event, "Top Airing")}
          >
            Top Airing
          </MenuItem>
          <MenuItem
            onClick={(event) => handleMenuItemClick(event, "Most Favourite")}
          >
            Most Favourite
          </MenuItem>
          <MenuItem
            onClick={(event) => handleMenuItemClick(event, "Lorem Ipsum")}
          >
            Lorem Ipsum
          </MenuItem>
          <MenuItem
            onClick={(event) => handleMenuItemClick(event, "Lorem Ipsum")}
          >
            Lorem Ipsum
          </MenuItem>
          <MenuItem
            onClick={(event) => handleMenuItemClick(event, "Lorem Ipsum")}
          >
            Lorem Ipsum
          </MenuItem>
        </Menu>
      </div>
      <div className={classes.buttongroup}>
        {genreList.map((item) => (
          <Button
            style={{ marginBottom: 5 }}
            className={classes.button}
            variant="outlined"
            color="default"
            onClick={(event) => handleClick(item.name, event)}
          >
            {item.name}
          </Button>
        ))}
      </div>
      <Grid container spacing={1} className={classes.list}>
        {genre === null
          ? data
              .map((anime) => [anime.rating, anime])
              .sort()
              .reverse()
              .slice(0, 15)
              .map((item, id) => (
                <Grid key={id} item xs={4}>
                  <Link
                    style={{ textDecoration: "none" }}
                    to={`/anime-about/${item.slug}`}
                  >
                    <Card className={classes.card}>
                      <img className={classes.img} src={item[1].poster_image} />
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
                </Grid>
              ))
          : animeList.map((item, id) =>
              item.genres.map((name) =>
                name.name === genre ? (
                  <Grid key={id} item xs={4}>
                    <Link to={`/anime-about/${item.slug}`}>
                      <Card className={classes.card}>
                        <img className={classes.img} src={item.poster_image} />
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
                  </Grid>
                ) : null
              )
            )}
      </Grid>
      <Button
        style={{
          height: "initial",
          color: "white",
          borderRadius: 15,
          borderColor: "white",
          background: "#363636",
          margin: "10px 0 30px 0",
          marginLeft: "auto",
          marginRight: 10,
        }}
        className={classes.showallbutton}
        variant="outlined"
      >
        Show All
      </Button>
    </>
  );
}
