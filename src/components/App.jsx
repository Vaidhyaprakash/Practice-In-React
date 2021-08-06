import React from "react";
import Class from "./Class";
import Function from "./Function";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Class" exact component={Class} />
        <Route path="/Function" exact component={Function} />
      </Switch>
    </Router>
  );
}
export default App;
