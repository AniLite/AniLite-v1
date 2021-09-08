import React from "react";
import { Typography } from "@material-ui/core";
import { ReactComponent as UndrawPlayfulCat } from "../Media/UndrawPlayfulCat.svg";

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
      <UndrawPlayfulCat className="absolute left-2/4 " />
      <Typography
        variant={"body1"}
        style={{
          position: "relative",
          top: "50%",
          textAlign: "center",
          transform: "translateY(-50%)",
        }}
      >
        © AniLite 2021 Made with ❤️ by Shivansh & Aarush
      </Typography>
    </div>
  );
}

export default Footer;
