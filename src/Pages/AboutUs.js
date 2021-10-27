import React from "react";
import Footer from "../Components/Footer";
import { ReactComponent as UndrawContentTeam } from "../Media/UndrawContentTeam.svg";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Avatar } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { makeStyles } from "@material-ui/styles";
import { motion } from "framer-motion";
import aarush_dp from "../Media/Aarush_dp.jpg";

const useStyles = makeStyles((theme) => ({
  icon: {
    height: 50,
    width: 50,
    margin: 10,
    color: "white",
    // "&:hover": {
    //   color: "#0A66C2",
    // },
  },
  img: {
    width: "50%",
  },
}));

export default function AboutUs() {
  const classes = useStyles();

  return (
    <>
      <div className="grid grid-cols-12 gap-4 mt-20">
        <div className="col-span-1" />
        <div
          className="col-span-10"
          style={{ display: "flex", flexDirection: "row" }}
        >
          <div style={{ width: "39%" }}>
            <Card className="w-full">
              <CardMedia
                component="img"
                height="140"
                image="https://www.pictureeuropa.com/wp-content/uploads/2020/04/milky-way-starry-sky-night-sky-star-mobile-wallpapers-download-android-ios-iphone.jpeg"
              />
              <div style={{ backgroundColor: "#444444" }}>
                <Avatar
                  alt="Shivansh Shukla"
                  src="https://i.pinimg.com/originals/ef/90/c4/ef90c415f34dc1615664466047952e95.png"
                  style={{
                    height: 120,
                    width: 120,
                    marginTop: -60,
                    marginLeft: "50%",
                    transform: "translateX(-50%)",
                  }}
                />

                <CardContent className="text-white text-center">
                  <Typography gutterBottom variant="h5" component="div">
                    Shivansh Shukla
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h6"
                    style={{ textAlign: "center", marginTop: 40 }}
                    component="div"
                  >
                    Connect with me on
                  </Typography>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <motion.div whileHover={{ scale: 1.2 }}>
                      <a
                        href="https://github.com/hsnavihS"
                        target="_blank"
                        style={{ color: "white" }}
                      >
                        <GitHubIcon
                          style={{ height: 40, width: 40, margin: 10 }}
                        />
                      </a>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.2 }}>
                      <a
                        href="https://www.linkedin.com/in/shivansh-shukla-611769201/"
                        target="_blank"
                      >
                        <LinkedInIcon className={classes.icon} />
                      </a>
                    </motion.div>
                  </div>
                </CardContent>
                {/* <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions> */}
              </div>
            </Card>
          </div>
          <div style={{ width: "22%" }}></div>
          <div style={{ width: "39%" }}>
            <Card className="w-full">
              <CardMedia
                component="img"
                height="140"
                image="https://c4.wallpaperflare.com/wallpaper/823/289/153/your-name-wallpaper-preview.jpg"
              />
              <div style={{ backgroundColor: "#444444" }}>
                <Avatar
                  alt="Aarush Sinha"
                  src={aarush_dp}
                  style={{
                    height: 120,
                    width: 120,
                    marginTop: -60,
                    marginLeft: "50%",
                    transform: "translateX(-50%)",
                  }}
                />

                <CardContent className="text-white text-center">
                  <Typography gutterBottom variant="h5" component="div">
                    Aarush Sinha
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h6"
                    style={{ textAlign: "center", marginTop: 40 }}
                    component="div"
                  >
                    Connect with me on
                  </Typography>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <motion.div whileHover={{ scale: 1.2 }}>
                      <a
                        href="https://github.com/CODElST"
                        target="_blank"
                        style={{ color: "white" }}
                      >
                        <GitHubIcon
                          style={{ height: 40, width: 40, margin: 10 }}
                        />
                      </a>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.2 }}>
                      <a
                        href="https://www.linkedin.com/in/aarush-sinha-66a790201/"
                        target="_blank"
                      >
                        <LinkedInIcon className={classes.icon} />
                      </a>
                    </motion.div>
                  </div>
                </CardContent>
                {/* <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions> */}
              </div>
            </Card>
          </div>
        </div>
        <div className="col-span-1" />
      </div>
      <Footer />
    </>
  );
}
