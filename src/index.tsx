import { render } from "react-dom";
import App from "./App";

import { someFunc } from "./test";

const flex: number = 42;
someFunc(flex);
console.log("bbb");

render(<App />, document.getElementById("root"));
