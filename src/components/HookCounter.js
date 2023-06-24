import React, { useState } from "react";

function HookCounter() {
  let [count, setCount] = useState(0);
  function incrementFive() {
    for (let i = 1; i <= 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  }
  return (
    <>
      Count: {count}
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
      <button
        onClick={() =>
          setCount((prevCount) =>
            prevCount === 0 ? (prevCount = 0) : prevCount - 1
          )
        }
      >
        Decrement
      </button>
      <button onClick={() => incrementFive()}>Increment 5</button>
      <button onClick={() => setCount((count = 0))}>Reset</button>
    </>
  );
}

export default HookCounter;
