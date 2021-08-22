import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { Button, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { InputBase } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  // root:{
  //   position: 'absolute',
  //   top: '50%',
  //   left: '50%',
  //   transform: 'translate(-50%, -50%)',
  // },

  icon: {
    marginRight: 10,
    backgroundColor: "transparent",
    transition: "background 0.3s ease-in-out",
    "&:hover": {
      backgroundColor: "rgba(209, 42, 100, 0.3)",
    },
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  // paper: {
  //   backgroundColor: theme.palette.background.paper,
  //   border: '2px solid #000',
  //   boxShadow: theme.shadows[5],
  //   padding: theme.spacing(2, 4, 3),
  // },
  input: {
    color: "black",
    backgroundColor: "white",
    borderRadius: 4,
    padding: "2px 5px",
    textAlign: "end",
    width: "80%",
    height: "8%",
    transform: "translateY(-200%)",
  },
}));

export default function SearchModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton
        className={classes.icon}
        aria-label="Search"
        color="secondary"
        onClick={handleOpen}
      >
        <SearchIcon />
      </IconButton>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <InputBase className={classes.input} placeholder="Search"></InputBase>
          {/* <button type="submit">Search</button> */}
        </Fade>
      </Modal>
    </div>
  );
}
