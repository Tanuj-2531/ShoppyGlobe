import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import Header from "../components/Header";

export default function Cart() {
  const items = useSelector(state => state.cart.items);

  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      <Header />

      <div className="cart-page">
        <h2>Your Cart</h2>

        {items.length === 0 ? (
          <div className="cart-empty">
            <p>Your cart is empty 🛒</p>
            <Link to="/">Go Shopping</Link>
          </div>
        ) : (
          <>
            {items.map(item => (
              <CartItem key={item.id} item={item} />
            ))}

            <div className="cart-summary">
              <h3>Total: ${totalPrice.toFixed(2)}</h3>
              <Link to="/checkout" className="checkout-btn">
                Proceed to Checkout
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
}