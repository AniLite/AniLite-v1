import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import PrimaryRouting from "./PrimaryRouting";
import { ThemeProvider } from "@material-ui/core";
import theme from "./MuiTheme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <HashRouter>
        <ScrollToTop />

        <Switch>
          <Route exact path="/">
            <PrimaryRouting />
          </Route>

          <Route path="/profile">
            <PrimaryRouting />
          </Route>

          <Route path="/about-us">
            <PrimaryRouting />
          </Route>

          <Route path="/anime-about">
            <PrimaryRouting />
          </Route>

          <Route path="/latest-anime">
            <PrimaryRouting />
          </Route>

          <Route path="/top-anime">
            <PrimaryRouting />
          </Route>

          <Route path="/all-anime">
            <PrimaryRouting />
          </Route>

          <Route path="/top-characters">
            <PrimaryRouting />
          </Route>

          <Route path="/characters">
            <PrimaryRouting />
          </Route>

          <Route path="/genre">
            <PrimaryRouting />
          </Route>

          <Route path="/search">
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
    </ThemeProvider>
  );
}
