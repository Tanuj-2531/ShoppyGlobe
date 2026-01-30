import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProducts, setError } from "../features/products/productsSlice";

export default function useFetchProducts() {
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then(res => res.json())
      .then(data => dispatch(setProducts(data.products)))
      .catch(err => dispatch(setError(err.message)));
  }, [dispatch]);
}