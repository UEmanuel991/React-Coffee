import React from "react";
import "../style/style.css";
import { COFFEE_COLLECTIONS } from "../utils/utils";
import Wrapper from "../layouts/Wrapper";
//#3 RANDATA ca CollectionsProducts path: /collections/collection-products
//RANDATA STATIC

function CollectionsProducts() {
  return (
    <>
      <Wrapper>
        <div className="coffe-container">
          <div className="coffe-container-titles">
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
              <a
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontSize: "14px",
                  margin: "0px 5px",
                }}
                href="/collections"
              >
                Shop
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
                <a
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontSize: "14px",
                    margin: "0px 5px",
                  }}
                  href="/espresso"
                >
                  ESPRESSO
                </a>{" "}
                &nbsp; •&nbsp;&nbsp;
                <a
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontSize: "14px",
                    margin: "0px 5px",
                  }}
                  href="/filtru"
                >
                  FILTRU &nbsp; •&nbsp;&nbsp;
                </a>
                <a
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontSize: "14px",
                    margin: "0px 5px",
                  }}
                  href="/microlot"
                >
                  MICROLOT &nbsp; •&nbsp;&nbsp;
                </a>
              </div>
              {COFFEE_COLLECTIONS.map((e) => (
                <div
                  style={{ display: "flex" }}
                  key={e.id}
                  className="page-container-images"
                >
                  <a href={e.link}>
                    <img
                      className="page-container-img"
                      src={e.image}
                      alt="my-img"
                    />
                  </a>
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
