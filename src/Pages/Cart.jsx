import React, { useEffect } from "react";
import "../PagesStyle/style.css";
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
      <div className="main-header-wrapper">
        <hr />
      </div>
      <div className="cart page">
        <div className="page-header-links">
          <NavLink className="header-navlinks" to={"/"}>
            Home
          </NavLink>
          <span className="divider">/</span>
          <span className="subnavlink">Cart</span>
        </div>
        <h1 className="collection-title">CART</h1>
        <div className="cart-checkout-container">
          <div className="tabel-cart">
            <CartTable />
          </div>
          <div className="checkout-container">
            <div className="cart-tools">
              <div className="cart-instructions">
                <p>
                  Observatii comanda (optional)
                </p>
                <textarea className="text-area" name="note" rows={4}></textarea>
              </div>
            </div>
            <div className="cart-checkout">
              <p className="cart-price">
                <span className="total-cart-money">
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
                className="cart-checkout-button"
                type="submit"
                name="checkout"
                value="CHECKOUT"
              />
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
              <NavLink className="header-navlinks" to={""}>
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
