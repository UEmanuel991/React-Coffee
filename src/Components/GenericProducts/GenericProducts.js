import React from "react";
import "../../style/style.css";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
//pagina de randare toate produsele!!!!!!

function GenerateProductsCards(productDetails) {
  // console.log(productDetails);
  const { productType } = useParams();
  return (
    <>
      {productDetails &&
        productDetails.map((product) => {
          // console.log(productDetails);
          return (
            product &&
            product.map((p, index) => (
              <NavLink key={index} to={`/collections/collection-products/product/${productType}/${p.id}`}>
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
                   $ {p.pret}
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
