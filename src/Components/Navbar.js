import { AppBar, Box, Button, Hidden, Toolbar } from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";
import SearchModal from "./SearchModal";
import animeList from "../Data/animeList.json";

const Navbar = () => {
  return (
    <div>
      <AppBar position="fixed" className="bg-black opacity-100 w-full">
        <Toolbar>
          <div>
            <NavLink
              className="hover:bg-gray-700 pt-1 pb-2.5 rounded"
              activeStyle={{
                borderBottom: "1px solid red",
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
                borderBottom: "1px solid red",
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
                borderBottom: "1px solid red",
              }}
              to="/top-anime"
              exact
            >
              <Button variant="contained" className="text-white bg-transparent">
                Top Anime
              </Button>
            </NavLink>

            <NavLink
              className="hover:bg-gray-700 pt-1 pb-2.5 rounded"
              activeStyle={{
                borderBottom: "1px solid red",
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
                  className="text-white"
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
            <SearchModal data={animeList} />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
