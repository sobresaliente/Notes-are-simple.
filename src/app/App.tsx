import { Link } from "react-router-dom";

import "./styles/index.scss";

import classNames from "shared/lib/classNames";

import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "app/providers/router";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      {theme}
      <button onClick={toggleTheme}>Change theme</button>
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>
      <AppRouter />
    </div>
  );
};
export default App;
