import { useState } from "react";
import classes from "./Counter.module.scss";
export const Counter = () => {
  const [value, setValue] = useState<number>(0);

  const increment = () => setValue(value + 1);
  const decrement = () => setValue(value - 1);
  return (
    <div>
      <button onClick={increment} className={classes.btn}>
        Plus
      </button>
      <button onClick={decrement}>Minus</button>
      {value}
    </div>
  );
};
