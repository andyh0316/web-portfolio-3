import logo from "./logo.svg";
import { Component } from "react";
import "./App.scss";
import Resume from "components/Resume";
import { BrowserRouter as Router, Switch, Route, withRouter, Redirect, Link } from "react-router-dom";

export class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/resume">
            <Resume></Resume>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
