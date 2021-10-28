import React from "react";
import { Typography, Button } from "@material-ui/core";
import { motion } from "framer-motion";
import GitHubIcon from "@material-ui/icons/GitHub";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div
      style={{
        marginTop: 50,
        height: 300,
        width: "100%",
        backgroundColor: "black",
        color: "white",
      }}
    >
      <Typography
        variant={"h4"}
        style={{
          position: "relative",
          top: "20%",
          textAlign: "center",
          transform: "translateY(-50%)",
          fontFamily: "quicksand",
          cursor: "default",
        }}
      >
        A N I L I T E
      </Typography>
      <Link to="/about-us" exact>
        <Typography
          variant={"body1"}
          component={motion.div}
          whileHover={{ scale: 1.09 }}
          style={{
            color: "white",
            textTransform: "capitalize",
            fontFamily: "quicksand",
            position: "relative",
            top: "30%",
            textAlign: "center",
            cursor: "pointer",
          }}
        >
          Made with ❤️ by SHIVANSH & AARUSH
        </Typography>
      </Link>

      {/* <motion.div
        whileHover={{ scale: 1.2 }}
        style={{
          position: "relative",
          top: "30%",
          textAlign: "center",
        }}
      >
        <a
          href="https://github.com/hsnavihS"
          target="_blank"
          style={{ color: "white" }}
        >
          <GitHubIcon style={{ margin: 10 }} />
        </a>
      </motion.div> */}
      <div
        style={{
          position: "relative",
          top: "40%",
          textAlign: "center",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Link to="/" exact>
          <Typography
            variant={"caption"}
            component={motion.button}
            whileHover={{ scale: 1.09 }}
            style={{
              color: "whitesmoke",
              textTransform: "capitalize",
              fontFamily: "quicksand",
              margin: 5,
              cursor: "pointer",
            }}
          >
            Home
          </Typography>
        </Link>
        <Link to="/all-anime" exact>
          <Typography
            variant={"caption"}
            component={motion.button}
            whileHover={{ scale: 1.09 }}
            style={{
              color: "whitesmoke",
              textTransform: "capitalize",
              fontFamily: "quicksand",
              margin: 5,
              cursor: "pointer",
            }}
          >
            All Anime
          </Typography>
        </Link>
        <Link to="/top-anime">
          <Typography
            variant={"caption"}
            component={motion.button}
            whileHover={{ scale: 1.09 }}
            style={{
              color: "whitesmoke",
              textTransform: "capitalize",
              fontFamily: "quicksand",
              margin: 5,
              cursor: "pointer",
            }}
          >
            Top Anime
          </Typography>
        </Link>
        <Link to="/about-us" exact>
          <Typography
            variant={"caption"}
            component={motion.button}
            whileHover={{ scale: 1.09 }}
            style={{
              color: "whitesmoke",
              textTransform: "capitalize",
              fontFamily: "quicksand",
              margin: 5,
              cursor: "pointer",
            }}
          >
            About Us
          </Typography>
        </Link>
      </div>
      <Typography
        style={{
          color: "white",
          textTransform: "capitalize",
          fontFamily: "quicksand",
          position: "relative",
          top: "40%",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
          cursor: "default",
        }}
      >
        © AniLite 2021
      </Typography>
    </div>
  );
}

export default Footer;
