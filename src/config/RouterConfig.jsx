import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Home from "../pages/Home";
import ProductDetails from "../components/ProductDetails";

function RouterConfig() {
  return (
    <Routes>
      <Route path="/react.basic_e-commerce_site" element={<Home />}></Route>
      <Route
        path="/react.basic_e-commerce_site/products/:id"
        element={<ProductDetails />}
      />
    </Routes>
  );
}

export default RouterConfig;
