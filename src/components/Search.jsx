import { FaSearch } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useState, useRef } from "react";
import { useSelector } from "react-redux";
import { array, func } from "prop-types";
import { useNavigate } from "react-router-dom";

const ListSearchItems = ({ array, t }) => {
  const classnames =
    "w-full h-16 bg-slate-500 rounded-md text-white flex items-center overflow-hidden";

  const navigate = useNavigate();

  if (!array.length)
    return (
      <li className={classnames + " justify-center"}>
        <p className="text-xl text-gray-300">{t("non_products")}...</p>
      </li>
    );
  return (
    <ul className="w-full h-full gap-2 flex flex-col">
      {array.map((arr) => (
        <li
          className={classnames}
          key={arr.id}
          onClick={() =>
            navigate(`/react.basic_e-commerce_site/products/${arr.id}`)
          }
        >
          <img className="h-full mr-3" src={arr.image} />
          <p className="font-medium">
            {arr.title.length >= 30
              ? arr.title.slice(0, 30) + "..."
              : arr.title}
          </p>
        </li>
      ))}
    </ul>
  );
};

ListSearchItems.propTypes = {
  array: array.isRequired,
  t: func.isRequired,
};

function Search() {
  const classnames =
    "w-full h-16 bg-slate-500 rounded-md text-white flex items-center overflow-hidden";
  const [open, setOpen] = useState(false);
  const [list, setList] = useState([]);
  const { t } = useTranslation();
  const inputRef = useRef();
  const navigate = useNavigate();

  const { products } = useSelector((store) => store.product);

  const changeHandle = () => {
    const value = inputRef.current.value;
    setOpen(true);
    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(value.toLowerCase())
    );
    setList(filteredProducts.slice(0, 5));
  };

  return (
    <div className="w-full relative">
      <div>
        <input
          className="text-white w-full h-8 py-1 px-2 rounded outline-none bg-slate-700 dark:bg-gray-300 dark:text-black"
          type="text"
          placeholder={t("default_search")}
          onChange={changeHandle}
          ref={inputRef}
        />
        <FaSearch
          className="p-1 text-2xl h-full absolute right-0 text-md  cursor-pointer text-white dark:text-black select-none bottom-0"
          onClick={() => setOpen(!open)}
        />
      </div>
      {open && (
        <div
          className="absolute z-20 top-10 w-full rounded px-4 py-3 flex flex-col flex-center bg-slate-600"
          onBlur={() => setOpen(false)}
        >
          {/* <ListSearchItems array={list} t={t} /> */}
          {list.length === 0 ? (
            <li className={classnames + " justify-center"}>
              <p className="text-xl text-gray-300">{t("non_products")}...</p>
            </li>
          ) : (
            <ul className="w-full h-full gap-2 flex flex-col">
              {list.map((arr) => (
                <li
                  className={classnames}
                  key={arr.id}
                  onClick={() => {
                    navigate(`/react.basic_e-commerce_site/products/${arr.id}`);
                    setOpen(false);
                  }}
                >
                  <img className="h-full mr-3" src={arr.image} />
                  <p className="font-medium">
                    {arr.title.length >= 30
                      ? arr.title.slice(0, 30) + "..."
                      : arr.title}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

export default Search;
