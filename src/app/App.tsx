import { Link } from "react-router-dom";

import "./styles/index.scss";

import classNames from "shared/lib/classNames";

import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "app/providers/router";
import { Navbar } from "widgets/Navbar";
import { ThemeToggler } from "widgets/ThemeToggler";

const App = () => {
  const { theme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <ThemeToggler />
      <AppRouter />
    </div>
  );
};
export default App;
