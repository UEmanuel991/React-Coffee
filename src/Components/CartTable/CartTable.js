import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { remove, increase, decrease } from "../../store/cartSlice";

function CartTable() {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const displayProducts = cartItems.productsCart;

  const handleRemove = (product) => {
    dispatch(remove(product));
  };
  const handleDecreaseCart = (product) => {
    dispatch(decrease(product));
  };
  const handleIncreaseCart = (product) => {
    dispatch(increase(product));
  };
  return (
    <div>
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
                  {cartItems.cartCurrency.stateCurrency === "ron"
                    ? `Lei ${Number(
                        product.pret * product.cartQuantity
                      ).toFixed(2)}`
                    : ""}
                  {cartItems.cartCurrency.stateCurrency === "eur"
                    ? `€ ${Number(
                        (product.pret * product.cartQuantity) / 4.9
                      ).toFixed(2)}`
                    : ""}
                  {cartItems.cartCurrency.stateCurrency === "usd"
                    ? `$ ${Number(
                        (product.pret * product.cartQuantity) / 4.3
                      ).toFixed(2)}`
                    : ""}
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CartTable;
