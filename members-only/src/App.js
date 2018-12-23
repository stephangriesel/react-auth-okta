import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Security, SecureRoute, ImplicitCallback } from "@okta/okta-react";
import NavBar from "./components/layout/NavBar";
import Home from "./components/pages/Home";
import Members from "./components/pages/Members";
import Login from "./components/auth/Login"

import "./App.css";

function onAuthRequired({ history }) {
  history.push("/login");
}

class App extends Component {
  render() {
    return (
      <Router>
        <Security
          issuer="https://dev-363097.oktapreview.com/oauth2/default"
          client_id="0oaij6dz9y4NP6L610h7"
          redirect_uri={window.location.origin + "/implicit/callback"}
          onAuthRequired={onAuthRequired}
        >
          <div className="App">
            <NavBar />
            <div className="container">
              <Route path="/" exact={true} component={Home} />
              <SecureRoute path="/members" exact={true} component={Members} />
              <Route
                path="/login"
                render={() => (
                  <Login baseUrl="https://dev-363097.oktapreview.com" />
                )}
              />
              <Route path="/implicit/callback" component={ImplicitCallback} />
            </div>
          </div>
        </Security>
      </Router>
    );
  }
}

export default App;
