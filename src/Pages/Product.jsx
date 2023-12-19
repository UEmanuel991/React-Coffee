import "./style.css/Product.css";
import React from "react";
import Wrapper from "../layouts/Wrapper";
import { NavLink, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCoffeData } from "../store/productsStore/coffeSlice";
import ProductCard from "../Components/ProductCard/ProductCard";
// import { searchProduct } from "../store/productsStore/coffeSlice";

function Product() {
  const coffeData = useSelector(selectCoffeData);

  const { productType, id } = useParams();
  const allEspressoProducts = coffeData.map((products) => {
    return products[productType];
  });
  const getJsonIndex = () => {
    let index = 0;
    if (productType === "espresso") {
      return index;
    } else if (productType === "filtru") {
      index = 1;
    } else if (productType === "microlot") {
      index = 2;
    }
    return index;
  };
  const prodIndex = getJsonIndex();
  // let espressoSearch = useSelector(
  //   (state) => state.coffe.filteredCoffes
  // );
  // const coffe = useSelector((state) => state.coffe.coffe)
 

  const getLinkPath = () => {
    let pathLink = "";
    if (prodIndex === 1) {
      pathLink = "/collections/collection-products/product/filtru";
    } else if (prodIndex === 2) {
      pathLink = "/collections/collection-products/product/microlot";
    } else if (prodIndex === 0) {
      pathLink = "/collections/collection-products/product/espresso";
    }
    return pathLink;
  };
  const myLink = getLinkPath();

  return (
    <>
      <Wrapper>
        <div className="main-header-wrapper">
          <hr />
        </div>
        <div className="main-content-wrapper">
          <div className="page-header">
            <div>
              <NavLink className="header-navlinks" to={"/"}>
                Home
              </NavLink>
              <span className="divider">/</span>
              <NavLink
                className="header-navlinks"
                to={"/collections/collection-products"}
              >
                Shop
              </NavLink>
              <span className="divider">/</span>
              <NavLink className="header-navlinks" to={myLink}>
                {prodIndex === 0 ? "Espresso" : ""}
                {prodIndex === 1 ? "Filtru" : ""}
                {prodIndex === 2 ? "Microlot" : ""}
              </NavLink>
              <span className="divider">/</span>
              <NavLink className="subnavlink" to={"#"}>
                {allEspressoProducts?.[prodIndex]?.[id - 1].nume}
              </NavLink>
            </div>
          </div>
          <ProductCard />
        </div>
      </Wrapper>
    </>
  );
}

export default Product;
