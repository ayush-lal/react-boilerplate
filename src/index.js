import React from "react";
import ReactDOM from "react-dom";
import "./assets/scss/index.scss";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import { Home, Page1 } from "./pages/index";

ReactDOM.render(
  <>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/page1" component={Page1} />
      </Switch>
    </BrowserRouter>
  </>,
  document.getElementById("root")
);
