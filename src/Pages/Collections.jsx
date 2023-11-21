import React from "react";
import ".././PagesStyle/style.css";
import Wrapper from "../layouts/Wrapper";
import HomeCollectionsCard from "../Components/HomeCollectionsCard/HomeCollectionsCard";
import { COLLECTIONS } from "../utils/utils";
import { NavLink } from "react-router-dom";

function Collections() {
  const collectionsData = COLLECTIONS;
  return (
    <Wrapper>
      <div className="main-header-wrapper">
        <hr />
      </div>
      <div className="page-header">
        <div className="page-header-links">
          <NavLink className="header-navlinks" to={"/"}>
            Home
          </NavLink>
          <span className="divider">/</span>
          <span className="subnavlink">Shop</span>
        </div>
      </div>
      <h1 className="collection-title">SHOP</h1>
      <HomeCollectionsCard detailsProd={collectionsData} />
    </Wrapper>
  );
}

export default Collections;
