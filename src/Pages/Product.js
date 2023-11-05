import React from "react";
import Wrapper from "../layouts/Wrapper";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCoffeData } from "../store/productsStore/coffeSlice";
import ProductCard from "../Components/ProductCard/ProductCard";

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
          <hr style={{ margin: "0px 40px" }}></hr>
        </div>
        <div className="main-content-wrapper">
          <div className="page-header">
            <div className="page-header-links">
              <NavLink
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontSize: "13px",
                  margin: "0px 5px",
                }}
                to={"/"}
              >
                Home
              </NavLink>
              <span style={{ fontSize: "13px" }} className="divider">
                /
              </span>
              <NavLink
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontSize: "13px",
                  margin: "0px 5px",
                }}
                to={"/collections/collection-products"}
              >
                Shop
              </NavLink>
              <span style={{ fontSize: "13px" }} className="divider">
                /
              </span>
              <NavLink
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontSize: "13px",
                  margin: "0px 5px",
                }}
                to={myLink}
              >
                {prodIndex === 0 ? "Espresso" : ""}
                {prodIndex === 1 ? "Filtru" : ""}
                {prodIndex === 2 ? "Microlot" : ""}
              </NavLink>
              <span style={{ fontSize: "13px" }} className="divider">
                /
              </span>
              <NavLink
                style={{
                  textDecoration: "none",
                  color: "#b3a394",
                  fontSize: "13px",
                  margin: "0px 5px",
                }}
                to={"#"}
              >
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
