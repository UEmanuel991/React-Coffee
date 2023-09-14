import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Homepage from "../Pages/Homepage"
import CollectionsShop from "../Pages/Collections(1)"
import CollectionsProducts from "../Pages/CollectionsProducts(2)"
import ProductsType from "../Pages/ProductsType(3)"
import Product from "../Pages/Product(4)"
import Cart from "../Pages/Cart"
import CollectionCoffee from "../Components/Collections/CollectionCoffee"
import CollectionsOutlet from "../layouts/Outlet"
import CollectionsProductsJSX from "../Pages/CollectionProducts"

const RouterContainer = () => {
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/collections" element={<CollectionsOutlet />}>
            <Route index element={<CollectionsShop />} />
            <Route path="cafea"
              element={
                <CollectionCoffee />
              }
            />
            <Route path="ceai"
              element={
                <CollectionCoffee />
              }
            />
            <Route path="espresso" element={<CollectionsProductsJSX />} />
            <Route path="filtru" element={<CollectionsProductsJSX />} />
            <Route path="echipamente" element={<CollectionsProductsJSX />} />
          </Route>
          <Route
            path="/collections/collection-products"
            element={<CollectionsProducts />}
          />
          <Route path="/collections/products-type" element={<ProductsType />} />
          <Route
            path="/collections/products-type/product"
            element={<Product />}
          />
          <Route path="/cart" element={<Cart />} />
        <Route path="*" element={(<h1>NOT FOUND</h1>)} />
        </Routes>
      </Router>

    )
}

export default RouterContainer;