// import { useEffect } from "react";

import Header from "./components/Header";
import HeaderContainer from "./containers/HeaderContainer";
import { useState, useEffect } from "react";
import { getInitialLanguage, changeLanguage } from "./utils/languageUtils";

import PageContainer from "./containers/PageContainer";
import RouterConfig from "./config/RouterConfig";
import Loading from "./components/Loading";

function App() {
  const [darkTheme, setDarkTheme] = useState(() => {
    return (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });

  useEffect(() => {
    const html = document.documentElement;
    if (darkTheme) {
      html.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      html.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [darkTheme]);

  useEffect(() => {
    changeLanguage(getInitialLanguage());
  }, []);

  return (
    <div className="min-h-screen min-w-full flex flex-col duration-bg-300 bg-gray-100 dark:bg-slate-900">
      <HeaderContainer>
        <Header setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
      </HeaderContainer>
      <PageContainer>
        <RouterConfig />
        <Loading />
      </PageContainer>
    </div>
  );
}

export default App;
