import React from "react";
import { Switch, Route } from "react-router-dom";
import DisplayPost from "./DisplayPost";
import MainAppContainer from "./MainAppContainer";

function Routing() {
  return (
    <Switch>
      <Route exact path="/" component={MainAppContainer} />
      <Route path={`/post/:id`}>
        <DisplayPost />
      </Route>
    </Switch>
  );
}

export default Routing;
