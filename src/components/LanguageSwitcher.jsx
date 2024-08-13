import { string, func } from "prop-types";
import { changeLanguage } from "../utils/languageUtils";

const LanguageSwitcher = ({ showFunc }) => {
  const base = window.location.origin + "/react.basic_e-commerce_site";

  const clickHandle = (lang) => {
    showFunc(false);
    changeLanguage(lang);
  };

  const LangListItem = ({ name, icon, lang }) => {
    return (
      <li
        className="select-none duration-300 list-none cursor-pointer flex flex-center w-full px-5 py-1 gap-3 bg-slate-500 hover:bg-slate-600 dark:bg-slate-700 dark:hover:bg-slate-400"
        onClick={() => clickHandle(lang)}
      >
        <img className="h-5" src={base + icon} alt="Flag" />
        <span>{name}</span>
      </li>
    );
  };

  LangListItem.propTypes = {
    name: string.isRequired,
    icon: string.isRequired,
    lang: string.isRequired,
  };

  return (
    <ul className="text-center flex flex-col flex-center gap-1 bg-slate-700 rounded-md overflow-hidden dark:bg-slate-400">
      <LangListItem name="English" icon="/images/flags/en.svg" lang="en" />
      <LangListItem name="Türkçe" icon="/images/flags/tr.svg" lang="tr" />
    </ul>
  );
};

LanguageSwitcher.propTypes = {
  showFunc: func,
};

export default LanguageSwitcher;
