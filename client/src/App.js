import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Saved from "./pages/Saved";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import Navbar from "./components/Navbar"
import Jumbotron from "./components/Jumbotron"
import Footer from "./components/Footer"

function App() {
  return (
    <Router>
    <div className="mb-5">
      <Navbar />
      <Jumbotron />
        <div className="container mb-5">
      <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/saved" component={Saved} />
      </Switch>
      </div>
    </div>
  
    
    <Footer />
    
    </Router>
    
    
 
  );
}

export default App;
