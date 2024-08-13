import { useEffect } from "react";
import {} from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getSingleProduct,
  setSelectedProduct,
} from "../redux/slices/productSlice";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { addToBasket } from "../redux/slices/basketSlice";

function ProductDetails() {
  const { id } = useParams();
  const { products, selectedProduct } = useSelector((store) => store.product);
  const { title, description, image, price } = selectedProduct;
  const [count, setCount] = useState(1);
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const getProductByID = () => {
    const res = products.find((product) => product.id == id);
    if (res) {
      dispatch(setSelectedProduct(res));
    } else {
      dispatch(getSingleProduct(id));
    }
  };

  const addBasket = () => {
    const payload = {
      id,
      image,
      price,
      count,
      title,
    };
    dispatch(addToBasket(payload));
  };
  useEffect(() => {
    getProductByID();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  return (
    <div className="product-detail-zone w-full bg-white flex items-center gap-4 dark:bg-transparent dark:text-gray-200">
      <img className="h-152" src={image} alt="Product Image" />
      <div className="flex flex-col h-full flex-center gap-5">
        <h1 className="font-medium text-3xl">{title}</h1>
        <p>{description}</p>
        <span className="text-green-600 text-4xl font-medium">${price}</span>
        <div className="flex items-center justify-between w-full select-none px-6">
          <div className="flex flex-center h-full">
            <div
              className="cursor-pointer w-14 border h-full flex flex-center text-2xl bg-gray-200 font-medium dark:bg-gray-600"
              onClick={() => setCount(count <= 1 ? 1 : count - 1)}
            >
              -
            </div>
            <div className="w-14 border h-full flex flex-center text-xl font-medium">
              {count}
            </div>
            <div
              className="cursor-pointer w-14 border h-full flex flex-center text-2xl bg-gray-200 font-medium dark:bg-gray-600"
              onClick={() => setCount(count + 1)}
            >
              +
            </div>
          </div>
          <button
            className="bg-green-500 py-3 px-4 text-2xl text-white rounded-lg hover:bg-green-600 duration-300"
            onClick={addBasket}
          >
            {t("add_cart")}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
