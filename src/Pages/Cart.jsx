import React, { useEffect } from "react";
import "../style/style.css";
import Wrapper from "../layouts/Wrapper";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase, getCartTotal, remove, } from "../store/cartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [dispatch, cartItems]);
  const displayProducts = cartItems.productsCart;

  const handleDecreaseCart = (product) => {
    dispatch(decrease(product));
  };
  const handleIncreaseCart = (product) => {
    dispatch(increase(product));
  };
  const handleRemove = (product) => {
    dispatch(remove(product));
  };
  console.log(cartItems.totalPrice)
  console.log(cartItems.cartCurrency.stateCurrency)
  
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
                {displayProducts.map((product) => (
                  <tr key={product.id}>
                    <td className="cart-item-image">
                      <button
                        style={{
                          padding: "12px",
                          display: "flex",
                          background: "white",
                          border: "none",
                        }}
                        type="button"
                        onClick={() => handleRemove(product)}
                      >
                        x
                      </button>
                      <NavLink
                        style={{
                          margin: "30px 0px",
                          textDecoration: "none",
                          color: "black",
                          display: "flex",
                          gap: 5,
                        }}
                        to={`/collections/collection-products/product/${product.productType}/${product.id}`}
                      >
                        <img
                          style={{ width: "100px" }}
                          className="page-container-img"
                          src={product.imagine}
                          alt={product.nume}
                        />
                        <div
                          style={{
                            textAlign: "left",
                            marginLeft: "10px",
                          }}
                        >
                          <p style={{ color: "#d9d1c9" }}>{product.detalii}</p>
                          <h3
                            style={{
                              fontSize: "16px",
                              fontWeight: "bold",
                            }}
                          >
                            {product.nume}
                          </h3>
                        </div>
                      </NavLink>
                    </td>
                    <td style={{ fontSize: "16px" }}>{product.pret}</td>
                    <td>
                      <span
                        style={{ fontSize: "16px", marginRight: "20px" }}
                        className="money"
                      >
                        {product.cartQuantity}
                      </span>
                      <button
                        style={{ border: "1px solid", width: "40px" }}
                        className="btn"
                        onClick={() => handleDecreaseCart(product)}
                      >
                        -
                      </button>
                      <button
                        style={{ border: "1px solid", width: "40px" }}
                        className="btn"
                        onClick={() => handleIncreaseCart(product)}
                      >
                        +
                      </button>
                    </td>
                    <td>
                      <p
                        style={{
                          width: "60px",
                          textAlign: "center",
                          border: "none",
                          marginRight: "20px",
                          fontSize: "16px",
                        }}
                      >
                        {product.pret * product.cartQuantity}
                      </p>
                    </td>
                  </tr>
                ))}
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
                <span className="money">
                  {cartItems.cartCurrency.stateCurrency === "ron"
                    ? `Lei ${cartItems.totalPrice * 1 }`
                    : ""}
                  {cartItems.cartCurrency.stateCurrency === "eur"
                    ? `€ ${cartItems.totalPrice / 4.9}`
                    : ""}
                  {cartItems.cartCurrency.stateCurrency === "usd"
                    ? `$ ${cartItems.totalPrice / 4.3}`
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
};
export default Cart;
