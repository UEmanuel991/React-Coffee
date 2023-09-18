import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "../Pages/Homepage";
import Collections from "../Pages/Collections";
import CollectionsProducts from "../Pages/CollectionsProducts";
import Cart from "../Pages/Cart";
import CollectionCoffee from "../Pages/CollectionCoffee";
import CollectionsOutlet from "../layouts/Outlet";
import Product from "../Pages/Product";

const RouterContainer = () => {
  //Incercare de creare de <ROUTE /> nested pentru ultima pagina.

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/collections" element={<CollectionsOutlet />}>
          <Route path="collections/cafea" element={<CollectionCoffee />} />
          <Route index element={<Collections />} />
          <Route path="cafea" element={<CollectionCoffee />} />
          <Route path="ceai" element={<CollectionCoffee />} />
          <Route path="echipamente" element={<CollectionCoffee />} />
        </Route>
        <Route path="/collections/product" element={<Product />}/>
        <Route
          path="/collections/collection-products"
          element={<CollectionsProducts />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<h1>NOT FOUND</h1>} />
      </Routes>
    </Router>
  );
};

export default RouterContainer;
