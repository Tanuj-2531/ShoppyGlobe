import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

export default function Checkout() {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const placeOrder = () => {
    alert("Order placed");
    dispatch(clearCart());
    navigate("/");
  };

  return (
    <>
      <Header />
      <div className="checkout-page">
        <h2>Checkout</h2>

        <form className="checkout-form" onSubmit={e => e.preventDefault()}>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="text" placeholder="Shipping Address" required />
        </form>

        <div className="order-summary">
          <h3>Order Summary</h3>
          {items.map(item => (
            <p key={item.id}>
              {item.title} x {item.quantity} = ${item.price * item.quantity}
            </p>
          ))}
          <h3>Total: ${total.toFixed(2)}</h3>
        </div>

        <button className="place-order-btn" onClick={placeOrder}>
          Place Order
        </button>
      </div>
    </>
  );
}