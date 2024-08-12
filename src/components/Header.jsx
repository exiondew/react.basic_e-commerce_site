import { IoIosSunny } from "react-icons/io";
import logo from "../images/logo.png";
import { FaMoon, FaSearch, FaShoppingBasket } from "react-icons/fa";
import { useState } from "react";
import { IoLanguage } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import PropTypes from "prop-types";

function Header({ darkTheme, setDarkTheme }) {
  const [showSelectLanguage, setShowSelectLanguage] = useState(false);
  const { t } = useTranslation();

  return (
    <header className="px-3 h-16 flex items-center justify-between duration-300 bg-slate-400 dark:bg-slate-800">
      <div className="flex flex-center gap-2 md:gap-4">
        <img src={logo} alt="Logo" className="h-10 animation-rotate" />
        <span className="font-medium text-black dark:text-white">
          {t("exion_store")}
        </span>
      </div>
      <div className="flex flex-center relative w-1/3">
        <input
          className="text-white w-full h-8 py-1 px-2 rounded outline-none bg-slate-700 dark:bg-gray-300 dark:text-black"
          type="text"
          placeholder={t("default_search")}
        />
        <FaSearch className="absolute right-1.5 cursor-pointer text-white dark:text-black select-none" />
      </div>
      <div className="flex flex-center gap-4 text-white text-lg lg:gap-8">
        <FaShoppingBasket className="text-slate-800 cursor-pointer hover:text-blue-500 dark:hover:text-sky-400 duration-200 dark:text-slate-200 select-none" />
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
