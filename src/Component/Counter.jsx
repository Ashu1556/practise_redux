import React, { useState } from "react";

const Counter = () => {
  const [state, setState] = useState(0);

  const handleclick1 = () => {
    setState(state + 1);
  };

  const handleclick2 = () => {
    if (state > 0) {
      setState(state - 1);
    }
  };

  return (
    <div>
      {state}
      <button onClick={handleclick1}>Increment</button>
      <button onClick={handleclick2}>Decrement</button>
    </div>
  );
};

export default Counter;
