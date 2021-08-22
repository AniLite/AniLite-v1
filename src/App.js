import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import PrimaryRouting from "./PrimaryRouting";
// import LoginSignup from "./Login";

export default function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Switch>
        <Route exact path="/">
          <PrimaryRouting />
        </Route>

        <Route path="/profile">
          <PrimaryRouting />
        </Route>

        <Route path="/about">
          <PrimaryRouting />
        </Route>

        <Route path="/anime-about">
          <PrimaryRouting />
        </Route>

        {/* <Route exact path="/login">
          <LoginSignup />
        </Route>

        <Route exact path="/signup">
          <LoginSignup />
        </Route> */}
      </Switch>
    </HashRouter>
  );
}
