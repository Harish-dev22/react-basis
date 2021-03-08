import React, { useState, useEffect } from "react";

const Clock = () => {
  const [currentCount, setCount] = useState(50);
  const timer = () => setCount(currentCount - 1);

  useEffect(() => {
    if (currentCount <= 0) {
      return;
    }
    const id = setInterval(timer, 1000);
    return () => clearInterval(id);
  }, [currentCount]);

  return (
    <div>
      {" "}
      <p>nothing change</p> <div>{currentCount}</div>
    </div>
  );
};

export const App = () => <Clock />;
