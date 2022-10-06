import React from "react";
import { useState } from "react";

const Counter = () => {
  const data = 0;
  const [Count, setCount] = useState(data);

  const Increment = () => {
    setCount(Count + 1);
  };

  const Decrement = () => {
    if (Count === 0) return;
    setCount(Count - 1);
  };

  return (
    <div>
      <h1>
        Counter: <span className="text-cyan">{Count}</span>
      </h1>
      <div className="flex items-center gap-2rem">
        <button
          onClick={Increment}
          className="border-none bg-green-400 p-0.5rem text-white text-xl cursor-pointer"
        >
          Increment
        </button>
        <button
          onClick={Decrement}
          className="border-none bg-rose-400 p-0.5rem text-white text-xl cursor-pointer"
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
