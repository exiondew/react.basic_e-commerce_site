import { IoIosSunny } from "react-icons/io";
import logo from "../images/logo.png";
import { FaMoon } from "react-icons/fa";
import { useState } from "react";
import { IoLanguage } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import BasketIcon from "./BasketIcon";
import Search from "./Search";

function Header({ darkTheme, setDarkTheme }) {
  const [showSelectLanguage, setShowSelectLanguage] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <header className="cursor-pointer px-3 h-16 flex items-center justify-between duration-300 bg-slate-400 dark:bg-slate-800">
      <div
        className="flex flex-center gap-2 md:gap-4"
        onClick={() => navigate("/react.basic_e-commerce_site")}
      >
        <img src={logo} alt="Logo" className="h-10 animation-rotate" />
        <span className="font-medium text-black dark:text-white">
          {t("exion_store")}
        </span>
      </div>
      <div className="w-1/3 relative">
        <Search />
      </div>
      <div className="flex flex-center gap-4 text-white text-lg lg:gap-8">
        <BasketIcon />
        <div className="flex flex-col flex-center relative">
          <IoLanguage
            className="text-slate-800 cursor-pointer hover:text-blue-500 dark:hover:text-sky-400 duration-200 dark:text-slate-200 select-none"
            onClick={() => setShowSelectLanguage(!showSelectLanguage)}
          />
          {showSelectLanguage && (
            <div className="absolute top-6 -right-1 z-10">
              <LanguageSwitcher showFunc={setShowSelectLanguage} />
            </div>
          )}
        </div>
        <div className="">
          {!darkTheme ? (
            <FaMoon
              className="text-slate-800 cursor-pointer hover:text-blue-500 dark:hover:text-sky-400 duration-200 dark:text-slate-200 select-none"
              onClick={() => setDarkTheme((prevTheme) => !prevTheme)}
            />
          ) : (
            <IoIosSunny
              className="text-slate-800 cursor-pointer hover:text-blue-500 dark:hover:text-sky-400 duration-200 dark:text-slate-200 select-none"
              onClick={() => setDarkTheme((prevTheme) => !prevTheme)}
            />
          )}
        </div>
      </div>
    </header>
  );
}

Header.propTypes = {
  setDarkTheme: PropTypes.func.isRequired,
  darkTheme: PropTypes.bool.isRequired,
};

export default Header;
