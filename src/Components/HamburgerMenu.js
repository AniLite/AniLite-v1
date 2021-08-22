import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton, List, ListItem, ListItemText } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { grey } from "@material-ui/core/colors";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },

  ListItem: {
    margin: "0 10px",
    color: "black",
    "&:hover": {
      backgroundColor: grey[400],
    },
  },

  CloseIcon: {
    left: "80%",
    width: "50px",
  },
});

export default function HamburgerMenu(props) {
  const direction = props.direction;
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <NavLink style={{ textDecoration: "none" }} to="/" exact>
          <ListItem className={classes.ListItem} button>
            <ListItemText primary={"Home"} />
          </ListItem>
        </NavLink>
        <NavLink style={{ textDecoration: "none" }} to="/about" exact>
          <ListItem className={classes.ListItem} button>
            <ListItemText primary={"Forum"} />
          </ListItem>
        </NavLink>
        <NavLink style={{ textDecoration: "none" }} to="/anime-about" exact>
          <ListItem className={classes.ListItem} button>
            <ListItemText primary={"Recommendation"} />
          </ListItem>
        </NavLink>
        <NavLink style={{ textDecoration: "none" }} to="/about" exact>
          <ListItem className={classes.ListItem} button>
            <ListItemText primary={"About Us"} />
          </ListItem>
        </NavLink>
        <NavLink style={{ textDecoration: "none" }} to="/profile" exact>
          <ListItem className={classes.ListItem} button>
            <ListItemText primary={"Profile"} />
          </ListItem>
        </NavLink>
      </List>
    </div>
  );

  return (
    <div>
      {direction.map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton
            onClick={toggleDrawer(anchor, true)}
            aria-label="menu"
            style={{ color: "white", marginLeft: "0px" }}
          >
            <MenuIcon style={{ color: "white" }} />
          </IconButton>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            <IconButton className={classes.CloseIcon}>
              <CloseIcon onClick={toggleDrawer(anchor, false)} />
            </IconButton>
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
