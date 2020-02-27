import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Saved from "./pages/Saved";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Navbar from "./components/Navbar"
import Jumbotron from "./components/Jumbotron"

function App() {
  return (
    <Router>
    <div>
      <Navbar />
      <Jumbotron />
        <div className="container">
      <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/" component={Search} />
          <Route exact path="/saved" component={Saved} />
      </Switch>
      </div>
    </div>
    </Router>
 
  );
}

export default App;
