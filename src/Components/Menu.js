import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/styles";
import { PinDropSharp } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "white",
    border: "1px solid white",
    marginLeft: 10,
    width: 80,
  },
}));

export default function SimpleMenu(props) {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [value, setValue] = React.useState("Anime");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, title) => {
    setValue(title);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        className={classes.root}
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        {value}
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={(event) => handleMenuItemClick(event, "Anime")}>
          Anime
        </MenuItem>
        <MenuItem onClick={(event) => handleMenuItemClick(event, "Manga")}>
          Manga
        </MenuItem>
        <MenuItem onClick={(event) => handleMenuItemClick(event, "Manhwa")}>
          Manhwa
        </MenuItem>
        {/* {props.data.map((item, id) => {
          return (
            <MenuItem
              key={id}
              onClick={(event) => handleMenuItemClick(event, item)}
            >
              {item}
            </MenuItem>
          );
        })} */}
      </Menu>
    </div>
  );
}
