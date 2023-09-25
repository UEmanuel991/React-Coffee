import React from "react";
import Icon from "react-icons-kit";
import Table from "react-bootstrap/Table";
import { facebook } from "react-icons-kit/icomoon/facebook";
import { pinterest } from "react-icons-kit/icomoon/pinterest";
import { twitter } from "react-icons-kit/icomoon/twitter";
import { mail } from "react-icons-kit/icomoon/mail";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";

// function generateProductCard(productDetails) {
function generateProductCard(productDetails) {

  return (
    <>
      {/* {console.log("SADsad", productDetails)} */}
      <div className="main-header-wrapper">
        <hr style={{ margin: "0px 40px" }}></hr>
      </div>
     

      <div className="main-content-wrapper">
        <div className="page-header">
          <div className="page-header-links">
            <NavLink
              style={{
                textDecoration: "none",
                color: "black",
                fontSize: "13px",
                margin: "0px 5px",
              }}
              to={"/"}
            >
              Home
            </NavLink>
            <span style={{ fontSize: "13px" }} className="divider">
              /
            </span>
            <NavLink
              style={{
                textDecoration: "none",
                color: "black",
                fontSize: "13px",
                margin: "0px 5px",
              }}
              to={"/collections/collection-products"}
            >
              Shop
            </NavLink>
            <span style={{ fontSize: "13px" }} className="divider">
              /
            </span>
            <NavLink
              style={{
                textDecoration: "none",
                color: "black",
                fontSize: "13px",
                margin: "0px 5px",
              }}
              to={"/collections/collection-products/product/:productType"}
            >
              Espresso
            </NavLink>
            <span style={{ fontSize: "13px" }} className="divider">
              /
            </span>
            <NavLink
              style={{
                textDecoration: "none",
                color: "#b3a394",
                fontSize: "13px",
                margin: "0px 5px",
              }}
              to={"#"}
            ></NavLink>
          </div>
        </div>

        {productDetails &&
          productDetails.map((prod) => {
            return (
              prod &&
              prod.map((p, index) => (
                <div key={index} className="main-content">
                  <div className="product-wrap">
                    <div className="product-wrap-image">
                      <img src={p.imagine} alt="brazil-img"></img>
                    </div>
                    <div className="product-container-details">
                      <div className="product-form">
                        <div className="product-quantity">
                          <div className="input-wrapper">
                            <label htmlFor="quantity">Cantitate</label>
                            <input
                              style={{ textAlign: "center" }}
                              className="input-quantity"
                              type="text"
                              name="quantity"
                              value="1"
                              id="quantity"
                              onChange={(e) => console.log(e.target.value)}
                            ></input>
                          </div>
                        </div>
                        <div className="product-submit">
                          <span className="product-price"> </span>
                          <input
                            className="add-to-cart"
                            type="submit"
                            value="0"
                          ></input>
                        </div>
                        <div className="product-options"></div>
                      </div>
                      <hr></hr>
                      <div className="products-description">
                        <Table>
                          <thead>
                            <tr>
                              <th>Regiune</th>
                              <th>Altitudine</th>
                              <th>Varietate</th>
                              <th>Procesare</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>{p.descriere.regiune}</td>
                              <td>{p.descriere.altitudine}</td>
                              <td>{p.descriere.varietate}</td>
                              <td>{p.descriere.procesare}</td>
                            </tr>
                          </tbody>
                        </Table>
                        <ul
                          style={{
                            border: "1px solid rgb(223, 217, 217)",
                            borderRadius: "5px",
                          }}
                        >
                          <h3 style={{ fontSize: "18px", marginTop: "10px" }}>
                            Descriere
                          </h3>
                          <p>{p.descriere.informatii}</p>
                        </ul>
                        <ul
                          style={{
                            border: "1px solid rgb(223, 217, 217)",
                            height: "55px",
                            borderRadius: "5px",
                          }}
                        ></ul>
                      </div>
                      <div className="share-buttons">
                        <NavLink
                          target="_blank"
                          to={
                            "https://www.facebook.com/sharer.php?u=https://origocoffee.ro/products/brazilia-olhos-daqua"
                          }
                          rel="noreferrer"
                        >
                          <Icon icon={facebook} />
                        </NavLink>
                        <NavLink
                          target="_blank"
                          to={
                            "https://twitter.com/share?url=https://origocoffee.ro/products/brazilia-olhos-daqua"
                          }
                          rel="noreferrer"
                        >
                          <Icon icon={twitter} />
                        </NavLink>
                        <NavLink
                          target="_blank"
                          to={
                            "https://pinterest.com/pin/create/button/?url=https://origocoffee.ro/products/brazilia-olhos-daqua&media=http://origocoffee.ro/cdn/shop/products/2.BrazilOlhosD_Agua-fata_1024x1024.jpg?v=1667403974&description=Brazil%20Olhos%20d%27Agua"
                          }
                          rel="noreferrer"
                        >
                          <Icon icon={pinterest} />
                        </NavLink>
                        <NavLink
                          target="_blank"
                          to={
                            "mailto:?subject=Brazil Olhos d'Agua&amp;body=Check this out https://origocoffee.ro/products/brazilia-olhos-daqua"
                          }
                          className="share-email"
                          rel="noreferrer"
                        >
                          <Icon icon={mail} />
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            );
          })}
      </div>
    </>
  );
}
function GenericProduct({ productDetailsE, productDetailsF, productDetailsM }) {
  const { id } = useParams();
  console.log(id)

  let productDetails;
  if (id === "espresso") {
    productDetails = productDetailsE;
  } else if (id === "filtru") {
    productDetails = productDetailsF;
  } else if (id === "microlot") {
    productDetails = productDetailsM;
  }
  // console.log("generic last producct", productDetailsE);
  return generateProductCard(productDetails);
}

export default GenericProduct;
