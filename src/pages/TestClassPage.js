import "./TestClassPage.scss";
import React from "react";
import { Component } from "react";
import { withRouter } from "react-router-dom";
import update from "immutability-helper";

export class TestClassPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      level1Name: null,
      level1Object: {
        level2Name: null,
        level2Object: {
          level3Name: null,
          level3Array: [],
        },
      },
    };
  }

  setLevel1Name() {
    this.setState({ level1Name: "level1Name" });
  }

  setLevel2Name() {
    // immutability-helper
    this.setState((prevState) => ({ level1Object: update(prevState.level1Object, { level2Name: { $set: "level2Name" } }) }));
  }

  setLevel3Name() {
    // immutability-helper
    this.setState((prevState) => ({ level1Object: update(prevState.level1Object, { level2Object: { level3Name: { $set: "level3Name" } } }) }));
  }

  setLevel3Array() {
    // immutability-helper
    this.setState((prevState) => ({ level1Object: update(prevState.level1Object, { level2Object: { level3Array: { $set: [1, 2] } } }) }));
  }

  pushLevel3Array() {
    // immutability-helper
    this.setState((prevState) => ({ level1Object: update(prevState.level1Object, { level2Object: { level3Array: { $push: [3, 4] } } }) }));

    // normal
    // let level1Object = { ...this.state.level1Object };
    // level1Object.level2Object.level3Array.push(3);
    // level1Object.level2Object.level3Array.push(4);
    // this.setState({ level1Object: level1Object });
  }

  render() {
    return (
      <div className="test-class-page page">
        <pre>{JSON.stringify(this.state, undefined, 2)}</pre>

        <button onClick={() => this.setLevel1Name()}>setLevel1Name</button>
        <button onClick={() => this.setLevel2Name()}>setLevel2Name</button>
        <button onClick={() => this.setLevel3Name()}>setLevel3Name</button>

        <button onClick={() => this.setLevel3Array()}>setLevel3Array</button>
        <button onClick={() => this.pushLevel3Array()}>pushLevel3Array</button>
      </div>
    );
  }
}

export default withRouter(TestClassPage);
