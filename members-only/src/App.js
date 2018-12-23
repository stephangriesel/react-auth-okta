import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/layout/NavBar";
import Home from "./components/pages/Home";
import Members from "./components/pages/Members";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <div className="container">
            <Route path="/" exact={true} component={Home} />
            <Route path="/members" exact={true} component={Members} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
