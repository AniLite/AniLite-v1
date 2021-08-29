import React from "react";
import { Typography } from "@material-ui/core";
import { ReactComponent as Undraw_Playful_cat } from "../Media/Undraw_Playful_cat.svg";

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
      <Undraw_Playful_cat className="absolute left-2/4 " />
      <Typography
        variant={"body1"}
        style={{
          position: "relative",
          top: "50%",
          textAlign: "center",
          transform: "translateY(-50%)",
        }}
      >
        © AniLite 2021, made with {"<3"} by Shivansh & Aarush
      </Typography>
    </div>
  );
}

export default Footer;
