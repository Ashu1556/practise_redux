import React, { useState } from "react";
import myStore from "../Redux/Store";
import { useDispatch, useSelector } from "react-redux";

const Inputcomponent = () => {
  const [state, setState] = useState("");

  const dispatch = () => {
    myStore.dispatch({
      type: "name",
      username: state,
    });
  };

  const data1 = useSelector((state) => {
    return state;
  });
  console.log(data1);

  return (
    <div style={{ margin: "50px auto" }}>
      <input
        type="text"
        placehoder="write something"
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
      <button onClick={dispatch}>Submit</button>
      <br></br>

      {data1.name}
    </div>
  );
};

export default Inputcomponent;
