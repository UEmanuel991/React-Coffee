import React from "react";
import ".././style/style.css";
import Wrapper from "../layouts/Wrapper";
import HomeCollectionsCard from "../Components/HomeCollectionsCard/HomeCollectionsCard";

//#2 RANDATA COLLECTIONS path:/collections
//RANDATA STATIC

function Collections() {
  return (
    <Wrapper>
      <h1 style={{}}>Collections PAGE</h1>
      <hr style={{ margin: "0px 40px" }}></hr>
      <div className="page-header">
        <div className="page-header-links">
          <a
            style={{
              textDecoration: "none",
              color: "black",
              fontSize: "14px",
              margin: "0px 5px",
            }}
            href="/"
          >
            Home
          </a>
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
      <HomeCollectionsCard />
    </Wrapper>
  );
}

export default Collections;
