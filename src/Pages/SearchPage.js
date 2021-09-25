import React from "react";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import Pagination from "@material-ui/lab/Pagination";
import { List, ListItem } from "@material-ui/core";
import { motion } from "framer-motion";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { useParams, useLocation } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { listAnime } from "../store/actions/animeActions";
import { listCharacter } from "../store/actions/characterActions";
import { ReactComponent as Loader } from "../Media/Loader.svg";

export default function SearchPage(props) {
  let { searchKey } = useParams();

  const animeList = useSelector((state) => state.animeList);
  const { animes, error, loading } = animeList;

  const characterList = useSelector((state) => state.characterList);
  const { characters } = characterList;

  const newFilter = animes.concat(characters).filter((value) => {
    return value.name_en
      ? value.name_en.toLowerCase().includes(searchKey.toLowerCase())
      : value.name.toLowerCase().includes(searchKey.toLowerCase());
  });

  const data = newFilter;

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
      <List className="grid grid-cols-12 gap-4 top-20">
        <div className="col-span-2" />
        <div className="col-span-8 mb-5">
          <p className="text-white font-roboto text-3xl font-normal ">
            Search Result(s) for{" "}
            <span className="text-purple-500">{searchKey}</span>
          </p>

          {data.map((item, id) => (
            <>
              {item.name_en ? (
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
              ) : (
                <Link to={`/characters/${item.slug}`}>
                  <ListItem
                    key={id}
                    id={item.name}
                    component={motion.button}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.99 }}
                    className="hover:bg-gray-800 absolute my-2 rounded-xl "
                  >
                    <img
                      className="rounded-md max-h-28 "
                      src={
                        item.image === ""
                          ? "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fc0f78fb-9444-4b33-849c-097988b52dc4/d6v4ofz-90d17e73-3600-4298-9f97-1d073ce674b2.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2ZjMGY3OGZiLTk0NDQtNGIzMy04NDljLTA5Nzk4OGI1MmRjNFwvZDZ2NG9mei05MGQxN2U3My0zNjAwLTQyOTgtOWY5Ny0xZDA3M2NlNjc0YjIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.MRQ4WpdkdCbQ8BuGG6a6f5d4fsv0G1ZJHBDXJ2fU2dg"
                          : item.image
                      }
                      alt={item.name}
                    />
                    <p className="text-purple-500 text-xl flex justify-center items-center w-full font-quicksand">
                      {item.name}
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
              )}
            </>
          ))}
        </div>
        <div className="col-span-2" />
      </List>
      <Footer />
    </>
  );
}
