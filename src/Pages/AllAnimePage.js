import React from "react";
import animeList from "../Data/animeList.json";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import Pagination from "@material-ui/lab/Pagination";
import { List, ListItem, Box, Divider } from "@material-ui/core";
import { motion } from "framer-motion";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

const index = [
  ".",
  "#",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const data = animeList.map((anime) => [anime.name_en, anime]).sort();

export default function TopAnimePage() {
  const itemsPerPage = 5;
  const [page, setPage] = React.useState(1);
  const [noOfPages] = React.useState(
    Math.ceil(animeList.length / itemsPerPage)
  );
  const [activeIndexID, setActiveIndexID] = React.useState([
    ...new Set(data.slice(0, itemsPerPage).map((item) => item[0][0])),
  ]);
  const handleChange = (event, value) => {
    setPage(value);

    window.scrollTo(0, 0);

    setActiveIndexID([
      ...new Set(
        data
          .slice(itemsPerPage * value - itemsPerPage, itemsPerPage * value)
          .map((item) => item[0][0])
      ),
    ]);
  };

  const handleLetterClick = (event) => {
    const filteredAnime = data.filter((item) => {
      return item[1].name_en[0]
        .toLowerCase()
        .includes(event.currentTarget.innerText.toLowerCase());
    });

    const value =
      data.indexOf(filteredAnime[0]) + 1 > 0
        ? Math.ceil((data.indexOf(filteredAnime[0]) + 1) / itemsPerPage)
        : 0;

    setPage(value);

    setActiveIndexID([
      ...new Set(
        data
          .slice(itemsPerPage * value - itemsPerPage, itemsPerPage * value)
          .map((item) => item[0][0])
      ),
    ]);

    window.scrollTo(0, 0);
  };

  React.useEffect(() => {
    activeIndexID.map(
      (ID) => (document.getElementById(ID).style.backgroundColor = "#8B5CF6")
    );
    return () => {
      activeIndexID.map((ID) =>
        document.getElementById(ID) != null
          ? (document.getElementById(ID).style.backgroundColor = "")
          : null
      );
    };
  });

  return (
    <>
      <div className="grid grid-cols-12 gap-4 mt-20">
        <div className="col-span-1" />
        <div className="col-span-10">
          <p className="text-purple-500 font-quicksand text-5xl font-medium ">
            All Anime
          </p>
        </div>
        <div className="col-span-1" />
        <div className="col-span-1" />
        <div
          className="col-span-10 sticky top-16 z-10 py-2 flex flex-row justify-around"
          style={{ backgroundColor: "#222" }}
        >
          {index.map((letter, key) => (
            <motion.a
              key={key}
              id={letter}
              // component={motion.button}
              whileHover={{ scale: 1.1 }}
              className="hover:bg-purple-500 px-3 rounded-lg cursor-default"
              onClick={(event) => handleLetterClick(event)}
            >
              <p className="text-white font-roboto text-lg">{letter}</p>
            </motion.a>
          ))}
        </div>
        <div className="col-span-1" />
        <div className="col-span-1" />
        <div className="col-span-10">
          <List>
            {data
              .slice((page - 1) * itemsPerPage, page * itemsPerPage)
              .map((item, id) => (
                <>
                  <Link to={`/anime-about/${item[1].slug}`}>
                    <ListItem
                      key={id}
                      id={item[1].name_en}
                      component={motion.button}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.99 }}
                      className="hover:bg-gray-800 absolute my-2 rounded-xl "
                    >
                      <img
                        className="rounded-md max-h-28 "
                        src={item[1].poster_image}
                        alt={item[1].name_en}
                      />
                      <p className="text-white text-xl flex justify-center items-center w-full font-quicksand">
                        {item[1].name_en}
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
              ))}
          </List>

          <Pagination
            id="pagination"
            count={noOfPages}
            page={page}
            onChange={handleChange}
            defaultPage={1}
            variant="outlined"
            color="primary"
            size="large"
            showFirstButton
            showLastButton
            className="flex items-center justify-center"
          />
        </div>
        <div className="col-span-1" />
      </div>
      <Footer />
    </>
  );
}
