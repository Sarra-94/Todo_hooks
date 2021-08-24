import React, { useEffect, useState } from "react";

const CounterFunction = () => {
  const [count, setCount] = useState(1);

  const increment = () => setCount(count + 1);

  // component did mount
  useEffect(() => alert("mount"), []);
  // updating when the count is updated
  useEffect(() => alert("updated"), [count]);
  // unmounted
  useEffect(() => {
    return () => {
      alert("goodbye");
    };
  }, []);
  return (
    <div>
      <button onClick={increment}>+</button>
      <h3>{count}</h3>
      <button onClick={() => count && setCount(count - 1)}>-</button>
    </div>
  );
};

export default CounterFunction;
