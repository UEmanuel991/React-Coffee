import React from "react";
import ".././style/style.css";
import Wrapper from "../layouts/Wrapper";
import HomeCollectionsCard from "../Components/HomeCollectionsCard/HomeCollectionsCard";
import { COLLECTIONS } from "../utils/utils";
import { NavLink } from "react-router-dom";

function Collections() {
  const collectionsData = COLLECTIONS;
  return (
    <Wrapper>
      <h1 style={{}}>Collections PAGE</h1>
      <hr style={{ margin: "0px 40px" }}></hr>
      <div className="page-header">
        <div className="page-header-links">
          <NavLink
            style={{
              textDecoration: "none",
              color: "black",
              fontSize: "14px",
              margin: "0px 5px",
            }}
            to={"/"}
          >
            Home
          </NavLink>
          <span style={{ fontSize: "14px" }} className="divider">
            /
          </span>
          <span
            style={{
              textDecoration: "none",
              color: "#b3a394",
              fontSize: "14px",
              margin: "0px 5px",
            }}
          >
            Shop
          </span>
        </div>
      </div>
      <h1 style={{ marginBottom: "50px", fontSize: "30px", fontWeight: "400" }}>
        SHOP
      </h1>
      <HomeCollectionsCard detailsProd={collectionsData} />
    </Wrapper>
  );
}

export default Collections;
