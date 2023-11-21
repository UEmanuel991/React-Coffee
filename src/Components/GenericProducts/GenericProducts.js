import React from "react";
import "../../PagesStyle/style.css";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function GenerateProductsCards(productDetails) {
  const { productType } = useParams();
  const cartItems = useSelector((state) => state.cart);

  return (
    <>
      <div className="main-generateProductsCard">
        {productDetails &&
          productDetails.map((product) => {
            return (
              product &&
              product.map((p, index) => (
                <NavLink
                  className="main-card-navlinks"
                  key={index}
                  to={`/collections/collection-products/product/${productType}/${p.id}`}
                >
                  <Card className="generic-card-shop" key={index}>
                    <Card.Img
                      className="card-img"
                      variant="top"
                      src={p.imagine}
                      alt="logos"
                    />
                    <Card.Body>
                      <Card.Text
                        style={{ display: "flex", justifyContent: "center", textDecoration:"none" }}
                      >
                        {p.detalii}
                      </Card.Text>
                      <Card.Title className="card-text-content">
                        {p.nume}
                      </Card.Title>
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
      </div>
    </>
  );
}

const GenericProducts = ({
  productDetailsE,
  productDetailsF,
  productDetailsM,
}) => {
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
};

export default GenericProducts;
