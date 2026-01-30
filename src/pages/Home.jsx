import { useSelector } from "react-redux";
import useFetchProducts from "../hooks/useFetchProducts";
import ProductItem from "../components/ProductItem";
import Header from "../components/Header";

export default function Home() {
  useFetchProducts();
  const products = useSelector(state => state.products.list);
  const search = useSelector(state => state.cart.searchTerm);

  const filtered = products.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Header />
      <div className="grid">
        {filtered.map(p => <ProductItem key={p.id} product={p} />)}
      </div>
    </>
  );
}