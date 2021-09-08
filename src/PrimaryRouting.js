import React from "react";
import Homepage from "./Pages/Homepage";
import AboutUs from "./Pages/AboutUs";
import AnimeAboutPage from "./Pages/AnimeAboutPage";
import { HashRouter, Switch, Route } from "react-router-dom";
import { Redirect } from "react-router";
import ScrollToTop from "./Components/ScrollToTop";
import Navbar from "./Components/Navbar";
import LatestAnimePage from "./Pages/LatestAnimePage";
import CharacterDetailPage from "./Pages/CharacterDetailPage";
import TopCharactersPage from "./Pages/TopCharactersPage";
import TopAnimePage from "./Pages/TopAnimePage";
import GenrePage from "./Pages/GenrePage";
import AllAnimePage from "./Pages/AllAnimePage";
import { useSelector, useDispatch } from "react-redux";
import { listAnime } from "./store/actions/animeActions";
import { listCharacter } from "./store/actions/characterActions";
import { ReactComponent as Loader } from "./Media/Loader.svg";
import SearchPage from "./Pages/SearchPage";

export default function PrimaryRouting() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(listAnime("sort=rating"));
    dispatch(listCharacter());
  }, [dispatch]);

  const animeList = useSelector((state) => state.animeList);
  const { error, loading } = animeList;

  return loading === true ? (
    <div className="w-full h-full absolute ">
      <Loader
        style={{ maxWidth: "10%" }}
        className="top-1/2 left-1/2 relative transform -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  ) : error ? (
    <h1>Error: {error}</h1>
  ) : (
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
            <Redirect to="/top-anime/all" />
          </Route>

          <Route exact path={"/top-anime/:genre"}>
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

          <Route exact path={"/search"}>
            <SearchPage />
          </Route>

          <Route path={`/search/:searchKey`} component={SearchPage} />

          {/* <Route path={"/profile"}>
            <Profile />
          </Route> */}
        </Switch>
      </div>
    </HashRouter>
  );
}
