// import { useEffect } from "react";

import Header from "./components/Header";
import HeaderContainer from "./containers/HeaderContainer";
import { useState, useEffect } from "react";
import { getInitialLanguage, changeLanguage } from "./utils/languageUtils";

// import PageContainer from "./containers/PageContainer";

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
    <div>
      <HeaderContainer>
        <Header setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
      </HeaderContainer>
      {/* <PageContainer></PageContainer> */}
    </div>
  );
}

export default App;
