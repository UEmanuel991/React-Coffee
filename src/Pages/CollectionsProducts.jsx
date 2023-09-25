import React from "react";
import "../style/style.css";
import { COFFEE } from "../utils/utils";
import Wrapper from "../layouts/Wrapper";
import { NavLink } from "react-router-dom";

//# 3 RANDATA ca CollectionsProducts path: /collections/collection-products

function CollectionsProducts() {
 
  return (
    <>
      <Wrapper>
        <div className="coffe-container">
          <div className="coffe-container-titles">
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
              <NavLink
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontSize: "14px",
                  margin: "0px 5px",
                }}
                to={"/collections"}
              >
                Shop
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
                Cafea
              </span>
            </div>
            <h1
              style={{
                marginBottom: "50px",
                fontSize: "30px",
                fontWeight: "400",
              }}
            >
              CAFEA
            </h1>
            <div className="page-img">
              <div className="page-container-links">
                <NavLink
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontSize: "14px",
                    margin: "0px 5px",
                  }}
                  to={"/collections/collection-products/product/espresso"}
                >
                  ESPRESSO
                  </NavLink>
                &nbsp; •&nbsp;&nbsp;
                <NavLink
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontSize: "14px",
                    margin: "0px 5px",
                  }}
                  to={"/collections/collection-products/product/filtru"}
                >
                  FILTRU &nbsp; •&nbsp;&nbsp;
                </NavLink>
                <NavLink
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontSize: "14px",
                    margin: "0px 5px",
                  }}
                  to={"/collections/collection-products/product/microlot"}
                >
                  MICROLOT &nbsp; •&nbsp;&nbsp;
                </NavLink>
              </div>
              {COFFEE.map((e) => (
                <div
                  style={{ display: "flex" }}
                  key={e.id}
                  className="page-container-images"
                >
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
    </>
  );
}

export default CollectionsProducts;
