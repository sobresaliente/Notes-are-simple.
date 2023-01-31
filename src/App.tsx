import { Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Counter } from "./components/Counter";
import "./index.scss";
import AboutPage from "./pages/AboutPage/AboutPage";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.lazy";
import HomePage from "./pages/HomePage.tsx/HomePage";
import { HomePageAsync } from "./pages/HomePage.tsx/HomePage.lazy";
const App = () => {
  return (
    <div className="app">
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
