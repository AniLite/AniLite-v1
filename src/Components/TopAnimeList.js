import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { listGenres } from "../store/actions/genreActions";
import { ReactComponent as Loader } from "../Media/Loader.svg";
import { List, ListItem } from "@material-ui/core";
import { motion } from "framer-motion";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { listAnime } from "../store/actions/animeActions";

function colorGenerator() {
  var letters = "BCDEF".split("");
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * letters.length)];
  }
  return color;
}

function TopAnimeList(props) {
  const [genre, setGenre] = React.useState(null);
  const handleClick = (name, event) => {
    setGenre(name);
  };
  const genreList = useSelector((state) => state.genreList);
  const { genres, error, loading } = genreList;
  const animeList = useSelector((state) => state.animeList);
  const { animes } = animeList;
  const data = [...animes];
  const dispatch = useDispatch();
  // console.log("genre:", genre, "prevGenre:", prevGenre);

  React.useEffect(() => {
    if (genres.length === 0) {
      dispatch(listGenres());
    }
    if (genre !== null) {
      dispatch(listAnime("genre=" + genre));
    }
  }, [dispatch, genres.length]);

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
    <>
      <div>
        {genres.map((item, id) => {
          let color = colorGenerator();
          return (
            <Button
              key={id}
              className="m-1 py-1 opacity-80 hover:opacity-100"
              variant="outlined"
              style={{ borderRadius: 20, color: color, borderColor: color }}
              onClick={(event) => handleClick(item.name, event)}
            >
              <p className="font-roboto font-extralight ">{item.name}</p>
            </Button>
          );
        })}
      </div>
      <div className="w-full">
        <List>
          {genre === null
            ? data.slice(0, 20).map((item, id) => (
                <>
                  <Link key={id} to={`/anime-about/${item.slug}`}>
                    <ListItem
                      id={item.name_en}
                      component={motion.button}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.99 }}
                      className="hover:bg-gray-800 absolute my-2 rounded-xl "
                    >
                      <img
                        className="rounded-md max-h-28 "
                        src={item.poster_image}
                        alt={item.name_en}
                      />
                      <p className="text-white text-xl flex justify-center items-center w-full font-quicksand">
                        {item.name_en}
                      </p>
                      <motion.div
                        whileHover={{ x: 20 }}
                        className=" absolute w-full h-full"
                      >
                        <NavigateNextIcon
                          color="primary"
                          className="relative left-full top-1/2 transform -translate-y-1/2 -translate-x-20 "
                        />
                      </motion.div>
                    </ListItem>
                  </Link>
                </>
              ))
            : data.map((item, id) =>
                item.genres.map((name) =>
                  name.name === genre ? (
                    <>
                      <Link to={`/anime-about/${item.slug}`}>
                        <ListItem
                          key={id}
                          id={item.name_en}
                          component={motion.button}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.99 }}
                          className="hover:bg-gray-800 absolute my-2 rounded-xl "
                        >
                          <img
                            className="rounded-md max-h-28 "
                            src={item.poster_image}
                            alt={item.name_en}
                          />
                          <p className="text-white text-xl flex justify-center items-center w-full font-quicksand">
                            {item.name_en}
                          </p>
                          <motion.div
                            whileHover={{ x: 20 }}
                            className=" absolute w-full h-full"
                          >
                            <NavigateNextIcon
                              color="primary"
                              className="relative left-full top-1/2 transform -translate-y-1/2 -translate-x-20 "
                            />
                          </motion.div>
                        </ListItem>
                      </Link>
                    </>
                  ) : null
                )
              )}
        </List>
      </div>
    </>
  );
}

export default TopAnimeList;
