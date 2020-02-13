import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./home";
import List from "./list";

export default () => {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/list/1990">List</Link>
        </li>
      </ul>
      <Route path="/" exact component={Home} />
      <Route path="/list/:id" component={List} />
    </Router>
  );
};
