import { useDispatch } from "react-redux";
import { removeFromCart, increaseQty, decreaseQty } from "../features/cart/cartSlice";

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <img src={item.thumbnail} />
      <h4>{item.title}</h4>
      <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>
      {item.quantity}
      <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
      <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
    </div>
  );
}