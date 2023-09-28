import React from "react";
import "../style/style.css";
import Wrapper from "../layouts/Wrapper";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.productsCart);
  console.log( cartItems );
  const { quantity } = useSelector((state) => state.cart);

  const testState = useSelector((state) => state.cart);
  console.log(testState);
  return (
    <Wrapper>
      {quantity}

      <div className="cart page">
        <div className="page-header-links">
          <NavLink
            to={"/"}
            style={{
              textDecoration: "none",
              color: "black",
              fontSize: "14px",
              margin: "0px 5px",
            }}
          >
            Home
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
            Cart
          </span>
        </div>
        <h1
          style={{
            marginBottom: "50px",
            fontSize: "30px",
            fontWeight: "400",
            letterSpacing: "0.2rem",
          }}
        >
          CART
        </h1>
        <div className="cart-checkout-container">
          <div className="tabel-cart">
            <table className="tabel">
              <thead>
                <tr>
                  <th style={{ fontSize: "16px" }}>Product</th>
                  <th style={{ fontSize: "16px" }}>Price</th>
                  <th style={{ fontSize: "16px" }}>Quantity</th>
                  <th style={{ fontSize: "16px" }}>Total</th>
                </tr>
              </thead>

              <tbody>
                {/* {cartItems.map((item) => ( */}
                <tr>
                  <td className="cart-item-image">
                    <span style={{ padding: "12px", display: "flex" }}>X</span>
                    <NavLink
                      style={{
                        margin: "30px 0px",
                        textDecoration: "none",
                        color: "black",
                      }}
                      // to={`/collections/collection-products/product/${item.productType}/${item.id}`}
                    >
                      <img
                        style={{ width: "100px" }}
                        className="page-container-img"
                        src={""}
                        alt={""}
                      />
                      <div
                        style={{
                          textAlign: "left",
                          marginLeft: "10px",
                        }}
                      >
                        <h3
                          style={{
                            fontSize: "16px",
                            fontWeight: "bold",
                          }}
                        >
                          {/* {item.name} */}
                        </h3>
                      </div>
                    </NavLink>
                  </td>
                  {/* <td style={{ fontSize: "16px" }}>{item.price}</td> */}
                  <td>
                    <input
                      style={{
                        width: "20px",
                        textAlign: "center",
                        border: "none",
                        marginRight: "20px",
                        fontSize: "16px",
                      }}
                      type="text"
                      name="cantitate"
                      value="1"
                      onChange={(e) => console.log(e.target.value)}
                    />
                    <button
                      style={{ border: "1px solid", width: "40px" }}
                      className="btn"
                    >
                      -
                    </button>
                    <button
                      style={{ border: "1px solid", width: "40px" }}
                      className="btn"
                    >
                      +
                    </button>
                  </td>
                  <td>
                    <span style={{ fontSize: "16px" }} className="money">
                      {/* {item.total} */}
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="checkout-container">
            <div className="cart-tools">
              <div className="cart-instructions">
                <p style={{ marginTop: "40px" }}>
                  Observatii comanda (optional)
                </p>
                <textarea
                  name="note"
                  rows={4}
                  style={{
                    width: "600px",
                    resize: "both",
                    height: "140px",
                    borderRadius: "5px",
                    color: "#525252",
                    border: "1px solid #e5e5e5",
                  }}
                ></textarea>
              </div>
            </div>
            <div className="cart-checkout">
              <p className="cart-price">
                <span
                  className="money"
                  data-currency-ron="150,00 lei"
                  data-currency-eur="&amp;euro;30.26"
                  data-currency="EUR"
                  data-currency-usd="$32.45"
                >
                  €30.26
                </span>
              </p>
              <input
                className="m-1"
                style={{
                  color: "white",
                  background: "#c3bdb7",
                  fontFamily: "Source Sans Pro, sans-serif",
                  fontWeight: "700",
                  padding: "15px 20px",
                  borderRadius: "5px",
                  fontSize: "14px",
                  border: "none",
                }}
                type="submit"
                name="update"
                value="UPDATE"
                // // eslint-disable-next-line react/jsx-no-duplicate-props
                // className="secondary"
              ></input>
              <input
                style={{
                  color: "white",
                  background: "#686868",
                  fontFamily: "Source Sans Pro, sans-serif",
                  fontWeight: "700",
                  padding: "15px 20px",
                  borderRadius: "5px",
                  fontSize: "14px",
                  border: "none",
                }}
                type="submit"
                name="checkout"
                value="CHECKOUT"
              ></input>
            </div>
          </div>
          <div className="checked-input mt-4 mb-4">
            <form action="/action-page">
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
              ></input>
              <NavLink
                style={{
                  textDecoration: "none",
                  color: "black",
                  marginLeft: "5px",
                }}
                to={""}
              >
                <label htmlFor="vehicle1">
                  {" "}
                  Am citit și am luat la cunoștință Politica privind prelucrarea
                  datelor cu caracter personal
                </label>
              </NavLink>
            </form>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default Cart;
