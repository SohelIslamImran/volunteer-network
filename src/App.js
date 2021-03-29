import React from "react";
import {
  BrowserRouter as Router,

  Route, Switch
} from "react-router-dom";
import AddEvents from "./components/AddEvents/AddEvents";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/addEvents">
          <AddEvents />
        </Route>
        <Route path="/dashboard">

        </Route>
      </Switch>
    </Router>
  );
}

export default App;
