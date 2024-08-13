import Drawer from "@mui/material/Drawer";
import { useSelector, useDispatch } from "react-redux";
import { deleteSingleProduct, setDrawer } from "../redux/slices/basketSlice";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

function DrawerList() {
  const dispatch = useDispatch();
  const { drawer, products } = useSelector((store) => store.basket);
  const navigate = useNavigate();
  const [total, setTotal] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    const totalAmount = products.reduce((acc, product) => {
      return acc + product.price * product.count;
    }, 0);
    setTotal(totalAmount);
  }, [products]);

  return (
    <Drawer
      className="relative"
      open={drawer}
      onClose={() => dispatch(setDrawer(false))}
    >
      {products.length > 0 ? (
        <div className="relative flex flex-col gap-1 p-2 h-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
          {products.map((product) => {
            const { title, image, price, id, count } = product;
            return (
              <div
                className="relative cursor-pointer flex items-center odd:bg-slate-400 even:bg-slate-300 p-1 rounded dark:even:bg-slate-600 dark:odd:bg-slate-500 dark:text-white"
                key={id}
                onClick={() =>
                  navigate(`/react.basic_e-commerce_site/products/${id}`)
                }
              >
                <img
                  className="h-16 w-16 mr-5 select-none"
                  src={image}
                  alt="product image"
                />
                <div>
                  <h2 className="font-medium">
                    {title.length >= 40 ? title.slice(0, 37) + "..." : title}
                  </h2>
                  <span>
                    ${price} | ({count})
                  </span>
                </div>
                <MdDelete
                  className="absolute duration-300 right-2 bottom-2 text-xl hover:text-red-400 text-gray-500 dark:text-gray-300"
                  onClick={(e) => {
                    e.stopPropagation();
                    dispatch(deleteSingleProduct(id));
                  }}
                />
              </div>
            );
          })}
          <div className="absolute bottom-0 w-full pr-4 dark:text-white text-center">
            <hr />
            <span className="text-lg">
              {t("total")}: ${total}
            </span>
          </div>
        </div>
      ) : (
        <div className="h-full w-full flex justify-center items-center text-2xl px-6 text-slate-500 bg-slate-200 dark:bg-slate-700">
          {t("non_products")}!
        </div>
      )}
    </Drawer>
  );
}

export default DrawerList;
