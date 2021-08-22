import React from "react";
import { makeStyles } from "@material-ui/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import HamburgerMenu from "./HamburgerMenu";
import { Hidden, Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import SimpleMenu from "./Menu";
import SearchModal from "./Search";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "rgba(0,0,0,0.6)",
    width: "100%",
    margin: 0,
    padding: 0,
  },
  drawer: {
    margin: 0,
  },

  menu: {
    marginLeft: 10,
  },

  Button: {
    color: "white",
    "&:hover": {
      backgroundColor: grey[900],
    },
  },

  heading: {
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
  },

  endbar: {
    display: "flex",
    marginLeft: "auto",
    marginRight: 10,
  },

  button: {
    display: "flex",
    margin: 10,
    textTransform: "capitalize",
    padding: "3px 5px",
  },
}));

function Header(props) {
  const classes = useStyles();

  let isLoggedIn = localStorage.getItem("isLogged");
  // const isLoggedIn = false;
  // const [isLoggedIn, setisLoggedIn] = React.useState(false);
  // function changeStatus() {
  //   setisLoggedIn((isLoggedIn) => !isLoggedIn);
  // }
  // console.log(isLoggedIn);
  return (
    <>
      <header>
        <AppBar className={classes.root} position="fixed">
          <Toolbar style={{ margin: 0, width: "100%", padding: 0 }}>
            <Hidden lgUp>
              <HamburgerMenu className={classes.drawer} direction={["left"]} />
            </Hidden>

            <SimpleMenu className={classes.menu} />

            <Hidden mdDown>
              <div className={classes.menu}>
                <NavLink
                  style={{ textDecoration: "none" }}
                  activeStyle={{
                    borderBottom: "1px solid red",
                    paddingBottom: 11,
                  }}
                  to="/"
                  exact
                >
                  <Button className={classes.Button}>Home</Button>
                </NavLink>

                {/* <NavLink
                  style={{ textDecoration: "none" }}
                  activeStyle={{
                    borderBottom: "1px solid red",
                    paddingBottom: 11,
                  }}
                  to="/about"
                  exact
                >
                  <Button className={classes.Button}>Forum</Button>
                </NavLink> */}

                {/* <NavLink
                  style={{ textDecoration: "none" }}
                  activeStyle={{
                    borderBottom: "1px solid red",
                    paddingBottom: 11,
                  }}
                  to="/anime-about"
                  exact
                >
                  <Button className={classes.Button}>Recommendation</Button>
                </NavLink> */}

                <NavLink
                  style={{ textDecoration: "none" }}
                  activeStyle={{
                    borderBottom: "1px solid red",
                    paddingBottom: 11,
                  }}
                  to="/about"
                  exact
                >
                  <Button className={classes.Button}>About Us</Button>
                </NavLink>

                {/* <NavLink
                  style={{ textDecoration: "none" }}
                  activeStyle={{
                    borderBottom: "1px solid red",
                    paddingBottom: 11,
                  }}
                  to="/profile"
                >
                  <Button className={classes.Button}>Profile</Button>
                </NavLink> */}
              </div>
            </Hidden>
            <Hidden smDown>
              <div className={classes.heading}>
                <Typography variant="h4">ANILITE</Typography>
              </div>
            </Hidden>
            <Hidden mdUp>
              <div className={classes.heading}>
                <Typography variant="h4">AL</Typography>
              </div>
            </Hidden>
            <div className={classes.endbar}>
              {/* <IconButton aria-label="Search" color='secondary'>
                <SearchIcon />
              </IconButton>   */}
              <SearchModal />

              {/* {isLoggedIn ? (
                <LogoutMenu />
              ) : (
                <>
                  <Hidden smDown>
                    <Link to="/login" exact>
                      <Button className={classes.button} variant="contained">
                        Sign in
                      </Button>
                    </Link>
                  </Hidden>
                  <Link to="/signup" exact>
                    <Button className={classes.button} variant="contained">
                      Sign up
                    </Button>
                  </Link>
                </>
              )} */}
            </div>
          </Toolbar>
        </AppBar>
      </header>
      {/* <Typography variant='h1' style={{marginTop: '1000px'}}>Hello</Typography> */}
    </>
  );
}

export default Header;
