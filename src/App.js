import "./App.css";
import Collections from "./Pages/Collections";
import Homepage from "./Pages/Homepage";
import CollectionCoffee from "./Pages/CollectionCoffee";
import CollectionsProducts from "./Pages/CollectionsProducts";
import Cart from "./Pages/Cart";
import Cont from './Pages/Cont'
import Product from "./Pages/Product";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const route = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />
  },
  {
    path: "/collections",
    element: <Collections/>
  },
  {
    path: "/collections/cafea",
    element: <CollectionCoffee />
  },
  {
    path: "/collections/collection-products",
    element: <CollectionsProducts />
  },
  {
    path: "/collections/product",
    element: <Product/>
  },
  {
    path: "/cart",
    element: <Cart/>
  },
  {
    path: "/cont",
    element: <Cont/>
  }
])


function App() {
  return <RouterProvider router={route} />
   
}

export default App;
