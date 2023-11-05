import React from "react";
import "../../style/style.css";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function GenerateProductsCards(productDetails) {
  const { productType } = useParams();
  const cartItems = useSelector((state) => state.cart);

  return (
    <>
      {productDetails &&
        productDetails.map((product) => {
          return (
            product &&
            product.map((p, index) => (
              <NavLink
                key={index}
                to={`/collections/collection-products/product/${productType}/${p.id}`}
              >
                <Card
                  key={index}
                  style={{
                    display: "inline-block",
                    width: "33.33%",
                    margin: "30px 0 0",
                  }}
                  className="card-shop"
                >
                  <Card.Img
                    className="card-img"
                    variant="top"
                    src={p.imagine}
                    alt="logos"
                  />

                  <Card.Body>
                    <Card.Title className="card-text-content">
                      {p.nume}
                    </Card.Title>
                    <Card.Text
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      {p.detalii}
                    </Card.Text>
                    <Card.Text
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      {cartItems &&
                      cartItems.cartCurrency.stateCurrency === "ron"
                        ? `Ron ${Number(p.pret * 1).toFixed(2)}`
                        : ""}
                      {cartItems &&
                      cartItems.cartCurrency.stateCurrency === "eur"
                        ? `€ ${Number(p.pret / 4.9).toFixed(2)}`
                        : ""}
                      {cartItems &&
                      cartItems.cartCurrency.stateCurrency === "usd"
                        ? `$ ${Number(p.pret / 4.3).toFixed(2)}`
                        : ""}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </NavLink>
            ))
          );
        })}
    </>
  );
}

function GenericProducts({
  productDetailsE,
  productDetailsF,
  productDetailsM,
}) {
  const { productType } = useParams();

  let productDetails;
  if (productType === "espresso") {
    productDetails = productDetailsE;
  } else if (productType === "filtru") {
    productDetails = productDetailsF;
  } else if (productType === "microlot") {
    productDetails = productDetailsM;
  }

  return GenerateProductsCards(productDetails);
}

export default GenericProducts;
