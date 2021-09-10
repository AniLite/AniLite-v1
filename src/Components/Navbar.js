import { AppBar, Box, Button, Hidden, Toolbar } from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";
import SearchModal from "./SearchModal";
import { useSelector } from "react-redux";
import { ReactComponent as Loader } from "../Media/Loader.svg";

const Navbar = () => {
  const animeList = useSelector((state) => state.animeList);
  const { animes, error, loading } = animeList;

  const characterList = useSelector((state) => state.characterList);
  const { characters } = characterList;
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
    <div>
      <AppBar position="fixed" className="bg-black opacity-100 w-full">
        <Toolbar>
          <div>
            <NavLink
              className="hover:bg-gray-700 pt-1 pb-2.5 rounded"
              activeStyle={{
                // borderBottom: "1px solid red",
                backgroundColor: "rgba(139, 92, 246, 0.5)",
              }}
              to="/"
              exact
            >
              <Button variant="contained" className="text-white bg-transparent">
                Home
              </Button>
            </NavLink>

            <NavLink
              className="hover:bg-gray-700 pt-1 pb-2.5 rounded"
              activeStyle={{
                // borderBottom: "1px solid red",
                backgroundColor: "rgba(139, 92, 246, 0.5)",
              }}
              to="/all-anime"
              exact
            >
              <Button variant="contained" className="text-white bg-transparent">
                All Anime
              </Button>
            </NavLink>

            <NavLink
              className="hover:bg-gray-700 pt-1 pb-2.5 rounded"
              activeStyle={{
                // borderBottom: "1px solid red",
                backgroundColor: "rgba(139, 92, 246, 0.5)",
              }}
              to="/top-anime"
            >
              <Button variant="contained" className="text-white bg-transparent">
                Top Anime
              </Button>
            </NavLink>

            <NavLink
              className="hover:bg-gray-700 pt-1 pb-2.5 rounded"
              activeStyle={{
                // borderBottom: "1px solid red",
                backgroundColor: "rgba(139, 92, 246, 0.5)",
              }}
              to="/about-us"
              exact
            >
              <Button variant="contained" className="text-white bg-transparent">
                About Us
              </Button>
            </NavLink>
          </div>
          <div className="absolute left-2/4 transform -translate-x-1/2">
            <NavLink to={`/`} exact>
              <Hidden smDown>
                <Box
                  fontWeight={500}
                  fontSize="h4.fontSize"
                  className="text-purple-500"
                >
                  ANILITE
                </Box>
              </Hidden>
              <Hidden mdUp>
                <Box
                  fontWeight={500}
                  fontSize="h4.fontSize"
                  className="text-white"
                >
                  AL
                </Box>
              </Hidden>
            </NavLink>
          </div>
          <div className="flex ml-auto mr-3">
            <SearchModal data={animes.concat(characters)} />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
