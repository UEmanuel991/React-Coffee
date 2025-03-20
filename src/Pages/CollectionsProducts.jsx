import "./style.css/CollectionsProducts.css";
import React from "react";
import { COFFEE } from "../utils/utils";
import Wrapper from "../layouts/Wrapper";
import { NavLink } from "react-router-dom";

function CollectionsProducts() {
  return (
    <div>
      <Wrapper>
        <div className="coffe-container">
          <div className="main-header-wrapper">
            <hr />
          </div>
          <div className="page-header-links">
            <NavLink className="header-navlinks" to={"/"}>
              Home
            </NavLink>
            <span className="divider">/</span>
            <NavLink className="header-navlinks" to={"/collections"}>
              Shop
            </NavLink>
            <span className="divider">/</span>
            <span className="subnavlink">Cafea</span>
          </div>
          <h1 className="collection-title">CAFEA</h1>
          <div className="page-img">
            <div className="page-container-links">
              <NavLink
                className="header-navlinks"
                to={"/collections/collection-products/product/espresso"}
              >
                ESPRESSO
              </NavLink>
              &nbsp; •&nbsp;&nbsp;
              <NavLink
                className="header-navlinks"
                to={"/collections/collection-products/product/filtru"}
              >
                FILTRU &nbsp; •&nbsp;&nbsp;
              </NavLink>
              <NavLink
                className="header-navlinks"
                to={"/collections/collection-products/product/microlot"}
              >
                MICROLOT &nbsp; •&nbsp;&nbsp;
              </NavLink>
            </div>
            <div className="collections-products-render">
              {COFFEE.map((e) => (
                <div key={e.id} className="page-container-images">
                  <NavLink to={e.link}>
                    <img
                      className="page-container-img"
                      src={e.image}
                      alt="my-img"
                    />
                  </NavLink>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}

export default CollectionsProducts;
