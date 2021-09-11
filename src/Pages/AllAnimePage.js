import React from "react";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import Pagination from "@material-ui/lab/Pagination";
import { List, ListItem } from "@material-ui/core";
import { motion } from "framer-motion";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { useSelector } from "react-redux";
import { ReactComponent as Loader } from "../Media/Loader.svg";

const index = [
  "All",
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

export default function TopAnimePage() {
  const animeList = useSelector((state) => state.animeList);
  const { animes, error, loading } = animeList;
  const [data, setData] = React.useState(
    animes.map((anime) => [anime.name_en, anime]).sort()
  );

  const completeList = [
    ...animes.map((anime) => [anime.name_en, anime]).sort(),
  ];

  const itemsPerPage = 10;

  const [page, setPage] = React.useState(1);

  const [noOfPages, setNoOfPages] = React.useState(
    Math.ceil(animes.length / itemsPerPage)
  );

  const [activeIndexID, setActiveIndexID] = React.useState(["All"]);

  const handleChange = (event, value) => {
    setPage(value);
    window.scrollTo(0, 0);
  };

  const handleLetterClick = (event) => {
    if (event.currentTarget.innerText === "All") {
      const filteredAnime = completeList;
      setData(filteredAnime);
      setNoOfPages(Math.ceil(filteredAnime.length / itemsPerPage));
      setPage(1);
      setActiveIndexID([event.currentTarget.innerText]);
    } else if (
      event.currentTarget.innerText !== "All" ||
      "." ||
      "1" ||
      "2" ||
      "3" ||
      "4" ||
      "5" ||
      "6" ||
      "7" ||
      "8" ||
      "9" ||
      "0"
    ) {
      const filteredAnime = completeList.filter((item) => {
        return item[1].name_en[0]
          .toLowerCase()
          .includes(event.currentTarget.innerText.toLowerCase());
      });
      setData(filteredAnime);
      setNoOfPages(Math.ceil(filteredAnime.length / itemsPerPage));
      setPage(1);
      setActiveIndexID([event.currentTarget.innerText]);
    } else {
      const filteredAnime = completeList.filter((item) => {
        return ['".", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"'].some(
          (el) => item[1].name_en[0].toLowerCase().includes(el)
        );
      });
      setData(filteredAnime);
      setNoOfPages(Math.ceil(filteredAnime.length / itemsPerPage));
      setPage(1);
      setActiveIndexID([event.currentTarget.innerText]);
    }
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
      <div className="grid grid-cols-12 gap-4 mt-20">
        <div className="col-span-2" />
        <div className="col-span-8">
          <p className="text-purple-500 font-quicksand text-5xl font-medium ">
            All Anime
          </p>
        </div>
        <div className="col-span-2" />
        <div className="col-span-2" />
        <div
          className="col-span-8 sticky top-16 z-10 py-2 flex flex-row justify-around"
          style={{ backgroundColor: "#222" }}
        >
          {index.map((letter, key) => (
            <motion.a
              key={key}
              id={letter}
              whileHover={{ scale: 1.1 }}
              className="hover:bg-purple-500 px-2.5 rounded-lg cursor-default"
              onClick={(event) => handleLetterClick(event)}
            >
              <p className="text-white font-roboto text-lg">{letter}</p>
            </motion.a>
          ))}
        </div>
        <div className="col-span-2" />
        <div className="col-span-2" />
        <div className="col-span-8">
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
        <div className="col-span-2" />
      </div>
      <Footer />
    </>
  );
}
