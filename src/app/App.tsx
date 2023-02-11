import { Link } from "react-router-dom";

import "./styles/index.scss";

import classNames from "shared/lib/classNames";

import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "app/providers/router";
import { Navbar } from "widgets/Navbar";
import { ThemeToggler } from "widgets/ThemeToggler";
import Sidebar from "widgets/Sidebar/ui/Sidebar";

const App = () => {
  const { theme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <div className="main-content">
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  );
};
export default App;
