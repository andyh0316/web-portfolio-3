import logo from "./logo.svg";
import { Component } from "react";
import "./App.scss";
import ResumePage from "pages/ResumePage";
import HomePage from "pages/HomePage";
import TestClassPage from "pages/TestClassPage";
import TestFuncPage from "pages/TestFuncPage";
import { BrowserRouter as Router, Switch, Route, withRouter, Redirect, Link } from "react-router-dom";

export class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/">
            <HomePage></HomePage>
          </Route>
          <Route exact path="/resume">
            <ResumePage></ResumePage>
          </Route>
          <Route exact path="/testclass">
            <TestClassPage></TestClassPage>
          </Route>
          <Route exact path="/testfunc">
            <TestFuncPage></TestFuncPage>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
