import { useTranslation } from "react-i18next";

import { string, shape, number } from "prop-types";

function Product({ product }) {
  const { id, title, description, image, price } = product;
  const { t } = useTranslation();

  return (
    <div
      data-id={id}
      title={description}
      className="bg-gray-300 h-80 border w-60 flex flex-col px-2 overflow-hidden gap-2 hover:shadow-lg duration-300 relative p-2 border-gray-400 rounded-md dark:text-white dark:bg-slate-600"
    >
      <img
        className="max-h-44 object-contain"
        src={image}
        alt="Product Image"
      />
      <hr />
      <div>
        <h3 className="font-semibold text-center w-full max-h-16 text-ellipsis">
          {title.length > 50 ? title.slice(0, 50) + "..." : title}
        </h3>
        <div className="absolute bottom-2 flex items-center justify-between w-full pr-4">
          <a
            className="duration-100 border px-2 py-1 rounded-md border-slate-700 cursor-pointer hover:bg-slate-700 hover:text-white dark:hover:bg-gray-200 dark:hover:text-black dark:border-gray-200 "
            title={title.slice(0, 20) + "..."}
          >
            {t("gotodetails")}
          </a>
          <span
            className="text-white bg-green-600 rounded-md px-2 py-1 dark:bg-green-500"
            title="Price"
          >
            ${price}
          </span>
        </div>
      </div>
    </div>
  );
}

Product.propTypes = {
  product: shape({
    id: number.isRequired,
    title: string.isRequired,
    description: string.isRequired,
    image: string.isRequired,
    price: number.isRequired,
  }),
};

export default Product;
