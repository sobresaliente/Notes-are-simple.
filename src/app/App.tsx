import { Link } from "react-router-dom";

import "./styles/index.scss";

import classNames from "shared/lib/classNames";

import { useTheme } from "app/providers/ThemeProvider";
import { AppRouter } from "app/providers/router";
import { Navbar } from "widgets/Navbar";

import Sidebar from "widgets/Sidebar/ui/Sidebar";
import { Suspense } from "react";
import { useTranslation } from "react-i18next";

const App = () => {
  const { theme } = useTheme();
  return (
    <Suspense fallback="loading">
      <div className={classNames("app", {}, [theme])}>
        <Navbar />
        <div className="main-content">
          <Sidebar />
          <AppRouter />
        </div>
      </div>
    </Suspense>
  );
};
export default App;
