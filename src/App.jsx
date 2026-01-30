import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React, { Suspense, lazy } from "react";

const Home = lazy(() => import("./pages/Home"));
const Cart = lazy(() => import("./pages/Cart"));
const Checkout = lazy(() => import("./pages/Checkout"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const NotFound = lazy(() => import("./pages/NotFound"));

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/cart", element: <Cart /> },
  { path: "/checkout", element: <Checkout /> },
  { path: "/product/:id", element: <ProductDetail /> },
  { path: "*", element: <NotFound /> }
]);

export default function App() {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}