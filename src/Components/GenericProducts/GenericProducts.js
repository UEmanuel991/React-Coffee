import React from "react";
import "./GenericProducts.css";
import Card from "react-bootstrap/Card";
import { NavLink, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function GenerateProductsCards(productDetails) {
  const { productType } = useParams();
  const cartItems = useSelector((state) => state.cart);
// console.log(productDetails[0])
  return (
    <div>
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
                      <Card.Text className="card-text-card">
                        {p.detalii}
                      </Card.Text>
                      <Card.Title className="card-text-content">
                        {p.nume}
                      </Card.Title>
                      <Card.Text className="card-text-card">
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
    </div>
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
