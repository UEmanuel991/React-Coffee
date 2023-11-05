import React, { useEffect } from "react";
import "../style/style.css";
import Wrapper from "../layouts/Wrapper";
import CartTable from "../Components/CartTable/CartTable";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCartTotal } from "../store/cartSlice";

function Cart() {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch, cartItems]);

  return (
    <Wrapper>
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
            <CartTable />
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
                <span className="money">
                  {cartItems.totalPrice &&
                  cartItems.cartCurrency.stateCurrency === "ron"
                    ? `Ron ${Number(cartItems.totalPrice * 1).toFixed(2)}`
                    : ""}
                  {cartItems.totalPrice &&
                  cartItems.cartCurrency.stateCurrency === "eur"
                    ? `€ ${Number(cartItems.totalPrice / 4.9).toFixed(2)}`
                    : ""}
                  {cartItems.totalPrice &&
                  cartItems.cartCurrency.stateCurrency === "usd"
                    ? `$ ${Number(cartItems.totalPrice / 4.3).toFixed(2)}`
                    : ""}
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
}
export default Cart;
