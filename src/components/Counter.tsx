import { useState } from "react";
import "./Counter.scss";
export const Counter = () => {
  const [value, setValue] = useState<number>(0);

  const increment = () => setValue(value + 1);
  const decrement = () => setValue(value - 1);
  return (
    <div>
      <button onClick={increment}>Plus</button>
      <button onClick={decrement}>Minus</button>
      {value}
    </div>
  );
};
