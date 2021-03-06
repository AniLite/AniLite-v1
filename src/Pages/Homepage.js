import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Button } from "@material-ui/core";
import AnimeListCarousel from "../Components/AnimeListCarousel";
import SimpleMenu from "../Components/SimpleMenu";
import TopAnimeList from "../Components/TopAnimeList";
import { NavLink, Link } from "react-router-dom";
import Footer from "../Components/Footer";
import { motion } from "framer-motion";
import { ReactComponent as Loader } from "../Media/Loader.svg";
import { useSelector } from "react-redux";

export default function Homepage() {
  const animeList = useSelector((state) => state.animeList);
  const { animes, error, loading } = animeList;

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   if (animes.length == 0) {
  //     dispatch(listAnime());
  //   }
  // }, [dispatch]);

  const data = [...animes];
  const movies = data.filter((value) => {
    return value.type.includes("Anime (MOVIE)");
  });

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
    <motion.div
      animate={{ opacity: [0, 1] }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <div id="listitems" className="w-full mb-10">
        <Carousel fade pause={false}>
          <Carousel.Item className="max-h-screen">
            <Link to={"/anime-about/re-zero-kara-hajimeru-isekai-seikatsu"}>
              <img
                className="d-block w-100"
                src="https://i.pinimg.com/originals/31/4e/9a/314e9a89ae515e47879bcb8198ccfa76.png"
                alt="Re:Zero"
              />

              <Carousel.Caption>
                <h3>Re:ZERO -Starting Life in Another World</h3>
                <p>Just Believe In Me</p>
              </Carousel.Caption>
            </Link>
          </Carousel.Item>
          <Carousel.Item className="max-h-screen">
            <Link to={"/anime-about/steins-gate"}>
              <img
                id="listitems"
                className="d-block w-100"
                src="https://wallpapercave.com/wp/wp1858907.png"
                alt="Steins;Gate"
              />
              <Carousel.Caption>
                <h3>Steins;Gate</h3>
                <p>El Psy Congru</p>
              </Carousel.Caption>
            </Link>
          </Carousel.Item>
          <Carousel.Item className="max-h-screen">
            <Link to={"/anime-about/mirai-nikki-tv"}>
              <img
                className="d-block w-100"
                src="https://images.alphacoders.com/902/902431.jpeg"
                alt="Future Diary"
              />

              <Carousel.Caption>
                <h3>Future Diary</h3>
                <p>Things we do for love</p>
              </Carousel.Caption>
            </Link>
          </Carousel.Item>
          <Carousel.Item className="max-h-screen">
            <Link to={"/anime-about/kakegurui"}>
              <img
                style={{ height: "120%" }}
                className="d-block w-100"
                src="https://images6.alphacoders.com/860/thumb-1920-860275.png"
                alt="Kakegurui"
              />

              <Carousel.Caption>
                <h3>Kakegurui</h3>
                <p>Gamble Everything!</p>
              </Carousel.Caption>
            </Link>
          </Carousel.Item>
          <Carousel.Item className="max-h-screen">
            <Link to={"/anime-about/elfen-lied"}>
              <img
                style={{ height: "120%" }}
                className="d-block w-100"
                src="https://i.pinimg.com/originals/68/26/cf/6826cf7624a62cf998978c64be29193f.png"
                alt="Elfen Lied"
              />

              <Carousel.Caption>
                <h3>Elfen Lied</h3>
                <p>Lilium</p>
              </Carousel.Caption>
            </Link>
          </Carousel.Item>
          <Carousel.Item className="max-h-screen">
            <Link to={"/anime-about/charlotte"}>
              <img
                style={{ height: "120%" }}
                className="d-block w-100"
                src="https://wallpaperaccess.com/full/6245397.jpg"
                alt="Charlotte"
              />

              <Carousel.Caption>
                <h3>Charlotte</h3>
                <p>Its a promise</p>
              </Carousel.Caption>
            </Link>
          </Carousel.Item>
          <Carousel.Item className="max-h-screen">
            <Link to={"/anime-about/youjo-senki"}>
              <img
                style={{ height: "120%" }}
                className="d-block w-100"
                src="https://wallpaperaccess.com/full/1476027.png"
                alt="Saga of Tanya the Evil"
              />

              <Carousel.Caption>
                <h3>Saga of Tanya the Evil</h3>
                <p>I don't believe in God</p>
              </Carousel.Caption>
            </Link>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-2" />
        <div className="col-span-7">
          <p className="text-purple-500 font-quicksand text-5xl font-medium ">
            Latest Anime
          </p>
        </div>
        <div className="col-span-1">
          <NavLink to="/latest-anime" exact>
            <Button variant="outlined" color="primary">
              Show All
            </Button>
          </NavLink>
        </div>
        <div className="col-span-2" />
        <div className="col-span-2" />
        <div className="col-span-8">
          <AnimeListCarousel
            isLarge={true}
            data={data
              .sort((a, b) => (a.started < b.started ? 1 : -1))
              .slice(0, 15)}
          />
        </div>
        <div className="col-span-2" />
        <div className="col-span-2" />
        <div className="col-span-7">
          <p className="text-purple-500 font-quicksand text-5xl font-medium ">
            Top Anime
          </p>
        </div>
        <div className="col-span-1">
          <SimpleMenu menuItems={["All", "Airing", "Completed", "Favourite"]} />
        </div>
        <div className="col-span-2" />
        <div className="col-span-2" />
        <div className="col-span-8 mb-10">
          <TopAnimeList genre={null} />
          <NavLink to="/top-anime/all" exact>
            <Button
              className="w-full my-2 text-white bg-gradient-to-b from-transparent to-purple-500"
              variant="text"
            >
              Show All
            </Button>
          </NavLink>
        </div>

        <div className="col-span-2" />
        {/* <div className="col-span-2" />
        <div className="col-span-7">
          <p className="text-white font-quicksand text-5xl font-medium mt-2">
            Top Characters
          </p>
        </div>
        <div className="col-span-1">
          <NavLink to="/top-characters" exact>
            <Button variant="outlined" color="primary">
              Show All
            </Button>
          </NavLink>
        </div>
        <div className="col-span-2" />
        <div className="col-span-2" />
        <div className="col-span-8">
          <div className="grid grid-cols-7 gap-4">
            {characterList.slice(0, 14).map((item, id) => (
              <NavLink to={`/characters/${item.slug}`}>
                <div key={id} className="col-span-1">
                  <img
                    id="listitems"
                    className="w-full rounded-md"
                    src="https://media.kitsu.io/characters/images/411/original.jpg?1483096805"
                    alt=""
                  />
                  <div className="relative -top-10">
                    <p className="text-white text-center font-quicksand mx-1">
                      {item.name}
                    </p>
                    <hr className="text-white mx-5" />
                    <p className="text-white text-center font-quicksand">
                      Anime
                    </p>
                  </div>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
        <div className="col-span-2" /> */}
        <div className="col-span-2" />
        <div className="col-span-7">
          <p className="text-purple-500 font-quicksand text-5xl font-medium ">
            Latest Movies
          </p>
        </div>
        <div className="col-span-1">
          <NavLink to="/latest-anime/movies" exact>
            <Button variant="outlined" color="primary">
              Show All
            </Button>
          </NavLink>
        </div>
        <div className="col-span-2" />
        <div className="col-span-2" />
        <div className="col-span-8">
          <AnimeListCarousel isLarge={true} data={movies} />
        </div>
        <div className="col-span-2" />
      </div>
      <Footer />
    </motion.div>
  );
}
