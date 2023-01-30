import { render } from "react-dom";
import { Counter } from "./components/Counter";
import { someFunc } from "./test";

const flex: number = 42;
someFunc(flex);
console.log("bbb");

render(<Counter />, document.getElementById("root"));
