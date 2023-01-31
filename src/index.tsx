import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { createRoot } from "react-dom/client";

import { someFunc } from "./test";

const container = document.getElementById("root");
const root = createRoot(container!); // createRoot(container!) if you use TypeScript

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
