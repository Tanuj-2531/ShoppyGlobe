import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setSearchTerm } from "../features/cart/cartSlice";

export default function Header() {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const totalQty = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="header">
      <Link to="/">ShoppyGlobe</Link>
      <input placeholder="Search..." onChange={e => dispatch(setSearchTerm(e.target.value))}/>
      <Link to="/cart">Cart ({totalQty})</Link>
    </header>
  );
}