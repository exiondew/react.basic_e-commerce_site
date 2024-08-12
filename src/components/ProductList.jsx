import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllProducts } from "../redux/slices/productSlice";
import { useSelector } from "react-redux";
import Product from "./Product";

function ProductList() {
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store.product);
  useEffect(() => {
    dispatch(getAllProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="flex flex-wrap h-full w-full gap-3 flex-center">
      {products &&
        products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
    </div>
  );
}

export default ProductList;
