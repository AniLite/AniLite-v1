import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import { ReactComponent as UndrawLocationSearch } from "../Media/UndrawLocationSearch.svg";
import { ReactComponent as UndrawVoid } from "../Media/UndrawVoid.svg";

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: 10,
    backgroundColor: "transparent",
    transition: "background 0.3s ease-in-out",
    "&:hover": {
      backgroundColor: "rgba(209, 42, 100, 0.3)",
    },
  },
}));

export default function SearchModal({ data }) {
  const [open, setOpen] = React.useState(false);
  const [filteredData, setFilteredData] = React.useState([]);
  const [searchWord, setSearchWord] = React.useState("");
  // const [border, setBorder] = React.useState("0.75rem 0.75rem 0 0");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setFilteredData([]);
    setSearchWord("");
  };

  const classes = useStyles();

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setSearchWord(searchWord);
    const newFilter = data.filter((value) => {
      return value.name_en
        ? value.name_en.toLowerCase().includes(searchWord.toLowerCase())
        : value.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  return (
    <div>
      <IconButton
        className={classes.icon}
        aria-label="Search"
        color="primary"
        onClick={handleOpen}
      >
        <SearchIcon />
      </IconButton>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 1000,
        }}
        style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
      >
        <Fade in={open}>
          <>
            <input
              className="w-1/2 outline-none text-white relative left-1/2 transform -translate-x-1/2 px-3 py-3 "
              style={{
                top: "15%",
                borderRadius: "0.75rem 0.75rem 0 0",
                backgroundColor: "rgba(34,34,34,0.7)",
                WebkitBackdropFilter: "blur(10px) saturate(180%)",
                backdropFilter: "blur(10px) saturate(180%)",
                boxShadow: "0px -1px 5px 0px rgba(255,255,255,0.5)",
                border: "0.01rem solid rgba(255,255,255,0.2)",
              }}
              placeholder="Search..."
              onChange={handleFilter}
            />
            {filteredData.length !== 0 ? (
              <div
                className="relative text-center w-1/2 left-1/2 transform -translate-x-1/2 rounded-b-xl"
                style={{
                  backgroundColor: "rgba(34,34,34,0.7)",
                  WebkitBackdropFilter: "blur(10px) saturate(180%)",
                  backdropFilter: "blur(10px) saturate(180%)",
                  boxShadow: "0px 1px 5px 0px rgba(255,255,255,0.5)",
                  border: "0.01rem solid rgba(255,255,255,0.2)",
                  top: "15%",
                }}
              >
                {filteredData.slice(0, 9).map((value, key) => {
                  return (
                    <div key={key} className="py-2 hover:bg-gray-800">
                      {value.name_en ? (
                        <Link
                          to={`/anime-about/${value.slug}`}
                          onClick={handleClose}
                          className="text-white py-2"
                        >
                          <p>{value.name_en}</p>
                        </Link>
                      ) : (
                        <Link
                          to={`/characters/${value.slug}`}
                          onClick={handleClose}
                          className="text-white py-2"
                        >
                          <p className="text-red-500">{value.name}</p>
                        </Link>
                      )}
                    </div>
                  );
                })}
                <div className="py-2 hover:bg-gray-800 rounded-b-2xl">
                  <Link
                    to={{
                      pathname: `/search/${searchWord}`,
                      param1: filteredData,
                    }}
                    onClick={handleClose}
                    className="text-white"
                  >
                    <p className="text-purple-500">Show All...</p>
                  </Link>
                </div>
              </div>
            ) : searchWord === "" ? (
              <div
                className="relative w-1/2 h-auto left-1/2 transform -translate-x-1/2"
                style={{
                  zIndex: -1,
                  top: "14%",
                  backgroundColor: "rgba(34,34,34,0.7)",
                  WebkitBackdropFilter: "blur(10px) saturate(180%)",
                  backdropFilter: "blur(10px) saturate(180%)",
                  boxShadow: "0px 1px 5px 0px rgba(255,255,255,0.5)",
                  border: "0.01rem solid rgba(255,255,255,0.2)",
                  borderRadius: "0 0 0.75rem 0.75rem",
                }}
                onClick={handleClose}
              >
                <UndrawLocationSearch className="relative w-7/12 py-5 h-auto left-2/4 top-1/4 transform -translate-x-1/2" />
              </div>
            ) : (
              <div
                className="relative w-1/2 h-auto left-1/2 transform -translate-x-1/2"
                style={{
                  zIndex: -1,
                  top: "14%",
                  backgroundColor: "rgba(34,34,34,0.7)",
                  WebkitBackdropFilter: "blur(10px) saturate(180%)",
                  backdropFilter: "blur(10px) saturate(180%)",
                  boxShadow: "0px 1px 5px 0px rgba(255,255,255,0.5)",
                  border: "0.01rem solid rgba(255,255,255,0.2)",
                  borderRadius: "0 0 0.75rem 0.75rem",
                }}
                onClick={handleClose}
              >
                <UndrawVoid className="relative w-5/12 py-9 h-auto left-2/4 top-1/4 transform -translate-x-1/2 " />
                <p className="absolute top-1/3 left-1/2 text-purple-500 font-normal  font-roboto text-xl">
                  No Result Found
                </p>
              </div>
            )}
          </>
        </Fade>
      </Modal>
    </div>
  );
}
