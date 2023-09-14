import React from "react";
import NavbarApp from '../Components/NavbarApp/NavbarApp';
import Footer from "../Components/Footer/Footer";
import EspressoImg from "../assets/coffePageAssets/espresso-caffe.jpg.jpg";
import FiltruImg from "../assets/coffePageAssets/filtru-caffe.jpg.jpg";
import MicrolotImg from "../assets/coffePageAssets/microlot-caffe.jpg.jpg";
import AbonamentImg from '../assets/coffePageAssets/abonamente-caffe.jpg'
import CardImg from '../assets/coffePageAssets/cardCadou-caffe.jpg.jpg'
import "../style/style.css";

function CollectionsProducts() {
  return (
    <>
      <NavbarApp />
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
            <div className="page-container-images">
              <a href="/collections/cafea/espresso">
                <img
                  className="page-container-img"
                  src={EspressoImg}
                  alt="my-img"
                />
              </a>
              <a href="/shop/filtru">
                <img
                  className="page-container-img"
                  src={FiltruImg}
                  alt="my-img"
                />
              </a>
              <a href="/microlot">
                <img
                  className="page-container-img"
                  src={MicrolotImg}
                  alt="my-img"
                />
              </a>
              <a href="/espresso">
                <img
                  className="page-container-img"
                  src={CardImg}
                  alt="my-img"
                />
              </a>
              <a href="/espresso">
                <img
                  className="page-container-img"
                  src={AbonamentImg}
                  alt="my-img"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CollectionsProducts;
