import React from "react";
import ReactDOM from "react-dom";
import { NavBar } from "./NavBar/NavBar";
import { routes } from "./routes";
import Favorite from "./NavBar/items/Favorite";
import AllTodos from "./NavBar/items/AllTodos";
import TodoBody from "./TodoBody/TodoBody";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";
const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path={routes.FAVORITE} component={Favorite} />
          <Route path={routes.ALLTODOS} component={AllTodos} />
          <Route path={routes.TODOBODY} component={TodoBody} />
        </Switch>
      </Router>
    </>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
