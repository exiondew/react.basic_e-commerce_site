import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Home from "../pages/Home";

function RouterConfig() {
  return (
    <Routes>
      <Route path="/react.basic_e-commerce_site" element={<Home />}>
        {/* <Route path="" element={<Home />} /> */}
      </Route>
    </Routes>
  );
}

export default RouterConfig;
