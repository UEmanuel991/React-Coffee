import "./CartTable.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { remove, increase, decrease } from "../../store/cartStore/cartSlice";

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
    <div className="main-component-cartTable">
      <table className="tabel">
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {displayProducts.map((product) => (
            <tr className="tableRow-cart" key={product.id}>
              <td className="cart-item-image">
                <button type="button" onClick={() => handleRemove(product)}>
                  x
                </button>
                <NavLink
                  className="cart-responsive-item"
                  to={`/collections/collection-products`}
                >
                  <img
                    className="table-container-img"
                    src={product.imagine}
                    alt={product.nume}
                  />
                  <div className="cart-responsive-titles">
                    <p>{product.detalii}</p>
                    <h3>{product.nume}</h3>
                  </div>
                </NavLink>
              </td>
              <td>
                {cartItems.cartCurrency.stateCurrency === "ron"
                  ? `Lei ${Number(product.pret).toFixed(2)}`
                  : ""}
                {cartItems.cartCurrency.stateCurrency === "eur"
                  ? `€ ${Number(product.pret / 4.9).toFixed(2)}`
                  : ""}
                {cartItems.cartCurrency.stateCurrency === "usd"
                  ? `$ ${Number(product.pret / 4.3).toFixed(2)}`
                  : ""}
              </td>
              <td className="last-td-table">
                <div>
                  <span className="money">{product.cartQuantity}</span>
                  <button
                    className="btns1"
                    onClick={() => handleDecreaseCart(product)}
                  >
                    -
                  </button>
                  <button
                    className="btns2"
                    onClick={() => handleIncreaseCart(product)}
                  >
                    +
                  </button>
                </div>
                <div>
                  <p className="total-price-table">
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
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CartTable;
