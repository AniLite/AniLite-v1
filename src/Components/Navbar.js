import { AppBar, Box, Button, Hidden, Toolbar } from "@material-ui/core";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import SearchModal from "./SearchModal";
import { useSelector } from "react-redux";
import { ReactComponent as Loader } from "../Media/Loader.svg";

const Navbar = () => {
  const location = useLocation();
  const animeList = useSelector((state) => state.animeList);
  const { animes, error, loading } = animeList;

  const characterList = useSelector((state) => state.characterList);
  const { characters } = characterList;

  const [background, setBackground] = React.useState(0);
  const listenScrollEvent = () => {
    if (window.scrollY > window.innerHeight / 2) {
      let opacity =
        ((window.scrollY - window.innerHeight / 2) / window.innerHeight) * 2;
      setBackground(opacity);
    } else {
      setBackground(0);
    }
  };
  React.useEffect(() => {
    if (
      location.pathname === "/" ||
      location.pathname.includes("/anime-about/")
    ) {
      setBackground(0);
      window.addEventListener("scroll", listenScrollEvent);
      return () => window.removeEventListener("scroll", listenScrollEvent);
    } else {
      setBackground(1);
    }
  }, [location.pathname]);

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
      <AppBar
        position="fixed"
        className="w-full"
        style={{ background: `rgba(0,0,0,${background})`, boxShadow: "none" }}
      >
        <Toolbar>
          <div>
            <NavLink
              className="hover:bg-purple-400 hover:bg-opacity-50 pt-1 pb-2.5 rounded"
              activeStyle={{
                // borderBottom: "1px solid red",
                backgroundColor: "rgba(139, 92, 246, 1)",
              }}
              to="/"
              exact
            >
              <Button
                variant="contained"
                className="text-white bg-transparent shadow-none"
                style={{ textShadow: "4px 4px 8px purple" }}
              >
                Home
              </Button>
            </NavLink>

            <NavLink
              className="hover:bg-purple-400 hover:bg-opacity-50 pt-1 pb-2.5 rounded"
              activeStyle={{
                // borderBottom: "1px solid red",
                backgroundColor: "rgba(139, 92, 246, 1)",
              }}
              to="/all-anime"
              exact
            >
              <Button
                variant="contained"
                className="text-white bg-transparent shadow-none"
                style={{ textShadow: "4px 4px 8px purple" }}
              >
                All Anime
              </Button>
            </NavLink>

            <NavLink
              className="hover:bg-purple-400 hover:bg-opacity-50 pt-1 pb-2.5 rounded"
              activeStyle={{
                // borderBottom: "1px solid red",
                backgroundColor: "rgba(139, 92, 246, 1)",
              }}
              to="/top-anime"
            >
              <Button
                variant="contained"
                className="text-white bg-transparent shadow-none"
                style={{ textShadow: "4px 4px 8px purple" }}
              >
                Top Anime
              </Button>
            </NavLink>

            <NavLink
              className="hover:bg-purple-400 hover:bg-opacity-50 pt-1 pb-2.5 rounded"
              activeStyle={{
                // borderBottom: "1px solid red",
                backgroundColor: "rgba(139, 92, 246, 1)",
              }}
              to="/about-us"
              exact
            >
              <Button
                variant="contained"
                className="text-white bg-transparent shadow-none"
                style={{ textShadow: "4px 4px 8px purple" }}
              >
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
                  style={{ textShadow: "1px 1px 3px black" }}
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
