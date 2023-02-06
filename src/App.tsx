import { Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";

import "./styles/index.scss";

import { AboutPageAsync } from "./pages/AboutPage/AboutPage.lazy";

import { HomePageAsync } from "./pages/HomePage.tsx/HomePage.lazy";

import { useTheme } from "./theme/useTheme";
import classNames from "./helpers/classNames";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      {theme}
      <button onClick={toggleTheme}>Change theme</button>
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>
      <Suspense fallback={<div>loading</div>}>
        <Routes>
          <Route path={"/about"} element={<AboutPageAsync />} />
          <Route path={"/"} element={<HomePageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};
export default App;
