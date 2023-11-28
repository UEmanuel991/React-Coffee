import "./App.css";
import Homepage from "./Pages/Homepage";
import CollectionsProducts from "./Pages/CollectionsProducts";
import Cart from "./Pages/Cart";
import Cont from "./Pages/Cont";
import Products from "./Pages/Products";
import Product from "./Pages/Product";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Categories from "./Pages/Categories";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },{
    path: "/collections",
    element: <Categories />,
  },{
    path: "/collections/collection-products",
    element: <CollectionsProducts />,
  },{
    path: "/collections/collection-products/product/:productType",
    element: <Products />,
  },{
    path: "/collections/collection-products/product/:productType/:id",
    element: <Product />,
  },{
    path: "/collections/cart",
    element: <Cart />,
  },{
    path: "/collections/cont",
    element: <Cont />,
  },
]);

function App() {
  return <RouterProvider router={route} />;
}
export default App;
