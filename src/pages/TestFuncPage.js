import React, { useState } from "react";
import update from "immutability-helper";

export default function TestFuncPage(props) {
  // Declare a new state variable, which we'll call "count"
  const [level1Name, setLevel1Name] = useState(null);
  const [level1Object, setLevel1Object] = useState({
    level2Name: null,
    level2Object: {
      level3Name: null,
      level3Array: [],
    },
  });

  function setLevel2Name() {
    setLevel1Object(update(level1Object, { level2Name: { $set: "level2Name" } }));
  }

  return (
    <div className="func-page page">
      <pre>
        <div>{JSON.stringify(level1Name, undefined, 2)}</div>
        <div>{JSON.stringify(level1Object, undefined, 2)}</div>
      </pre>

      <button onClick={() => setLevel1Name("level1Name")}>setLevel1Name</button>
      <button onClick={() => setLevel2Name()}>setLevel2Name</button>
      {/* <button onClick={() => setLevel3Name()}>setLevel3Name</button>

      <button onClick={() => setLevel3Array()}>setLevel3Array</button>
      <button onClick={() => pushLevel3Array()}>pushLevel3Array</button> */}
    </div>
  );
}
