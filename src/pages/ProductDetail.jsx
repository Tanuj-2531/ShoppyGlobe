import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import Header from "../components/Header";

export default function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(err => setError("Failed to load product"));
  }, [id]);

  if (error) return <h2>{error}</h2>;
  if (!product) return <h2>Loading product...</h2>;

  return (
    <>
      <Header />
      <div className="product-detail">
        <img src={product.thumbnail} alt={product.title} loading="lazy" />
        
        <div className="product-info">
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <h3>${product.price}</h3>
          <p><strong>Brand:</strong> {product.brand}</p>
          <p><strong>Category:</strong> {product.category}</p>

          <button onClick={() => dispatch(addToCart(product))}>
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
}