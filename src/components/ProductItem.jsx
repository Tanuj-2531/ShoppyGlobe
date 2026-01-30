import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import { Link } from "react-router-dom";

export default function ProductItem({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="card">
      <img src={product.thumbnail} loading="lazy" />
      <h4>{product.title}</h4>
      <p>${product.price}</p>
      <Link to={`/product/${product.id}`}>View</Link>
      <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
    </div>
  );
}