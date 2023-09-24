import React from "react";
import "../../style/style.css";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-bootstrap";
import { useParams } from "react-router-dom";
//pagina de randare toate produsele!!!!!!

function generateProductsCards(productDetails) {
  console.log(productDetails);
  return (
    <>
      {productDetails &&
        productDetails.map((product) => {
          console.log(productDetails);
          return (
            product &&
            product.map((p, index) => (
              <Card
                key={index}
                style={{
                  display: "inline-block",
                  width: "33.33%",
                  margin: "30px 0 0",
                }}
                className="card-shop"
              >
                <NavLink to={""}>
                  <Card.Img
                    className="card-img"
                    variant="top"
                    src={p.imagine}
                    alt="logos"
                  />
                </NavLink>
                <Card.Body>
                  <Card.Title className="card-text-content">
                    <NavLink
                      style={{
                        textDecoration: "none",
                        display: "flex",
                        justifyContent: "center",
                        color: "black",
                        fontFamily: "Inter",
                        fontWeight: "400",
                      }}
                      to={""}
                    >
                      {p.nume}
                    </NavLink>
                  </Card.Title>
                  <Card.Text
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    {p.detalii}
                  </Card.Text>
                </Card.Body>
              </Card>
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
  return generateProductsCards(productDetails);
}

export default GenericProducts;
