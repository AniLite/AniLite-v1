import React from "react";
import Homepage from "./Pages/Homepage";
import AboutUs from "./Pages/AboutUs";
import AnimeAboutPage from "./Pages/AnimeAboutPage";
import { HashRouter, Switch, Route } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import Navbar from "./Components/Navbar";
import LatestAnimePage from "./Pages/LatestAnimePage";
import CharacterDetailPage from "./Pages/CharacterDetailPage";
import TopCharactersPage from "./Pages/TopCharactersPage";
import TopAnimePage from "./Pages/TopAnimePage";
import GenrePage from "./Pages/GenrePage";
import AllAnimePage from "./Pages/AllAnimePage";

export default function PrimaryRouting() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Navbar />
      <div>
        <Switch>
          <Route exact path={"/"}>
            <Homepage />
          </Route>

          <Route exact path={"/about-us"}>
            <AboutUs />
          </Route>

          <Route exact path={"/anime-about"}>
            <AnimeAboutPage />
          </Route>

          <Route path={`/anime-about/:animeName`}>
            <AnimeAboutPage />
          </Route>

          <Route exact path={"/latest-anime"}>
            <LatestAnimePage />
          </Route>

          <Route path={"/latest-anime"}>
            <LatestAnimePage />
          </Route>

          <Route exact path={"/all-anime"}>
            <AllAnimePage />
          </Route>

          <Route exact path={"/top-anime"}>
            <TopAnimePage />
          </Route>

          <Route exact path={"/top-characters"}>
            <TopCharactersPage />
          </Route>

          <Route exact path={"/characters"}>
            <CharacterDetailPage />
          </Route>

          <Route path={`/characters/:characterName`}>
            <CharacterDetailPage />
          </Route>

          <Route exact path={"/genre"}>
            <GenrePage />
          </Route>

          <Route path={`/genre/:genre`}>
            <GenrePage />
          </Route>

          {/* <Route path={"/profile"}>
            <Profile />
          </Route> */}
        </Switch>
      </div>
    </HashRouter>
  );
}
