import Badge from "@mui/material/Badge";
import { FaShoppingBasket } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setDrawer } from "../redux/slices/basketSlice";

function BasketIcon() {
  const { products } = useSelector((store) => store.basket);
  const dispatch = useDispatch();

  return (
    <Badge
      onClick={() => dispatch(dispatch(setDrawer(true)))}
      className="select-none"
      badgeContent={products.length}
      color="info"
    >
      <FaShoppingBasket className="text-slate-800 cursor-pointer hover:text-blue-500 dark:hover:text-sky-400 duration-200 dark:text-slate-200" />
    </Badge>
  );
}

export default BasketIcon;
