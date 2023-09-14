import React from "react";
import ".././style/style.css";
import CardComp from "../Components/CardComp";
import { COLLECTIONS } from "../utils/utils";
import Wrapper from "../layouts/Wrapper";

function CollectionsShop({ card }) {
  return (
    <Wrapper>
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
      {COLLECTIONS.map((el) => (
        <CardComp key={el.id} card={el} />
      ))}
    </Wrapper>
  );
}

export default CollectionsShop;
