import { Link } from "react-router-dom";

import "./styles/index.scss";

import classNames from "shared/lib/classNames";

import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "app/providers/router";
import { Navbar } from "widgets/Navbar";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <button onClick={toggleTheme}>Change theme</button>

      <AppRouter />
    </div>
  );
};
export default App;