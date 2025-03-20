import "./ProductCard.css";
import React, { useEffect } from "react";
import Table from "react-bootstrap/Table";
import Icon from "react-icons-kit";
import { facebook } from "react-icons-kit/icomoon/facebook";
import { pinterest } from "react-icons-kit/icomoon/pinterest";
import { twitter } from "react-icons-kit/icomoon/twitter";
import { mail } from "react-icons-kit/icomoon/mail";
import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCoffeData,
  selectCoffeData,
} from "../../store/productsStore/coffeSlice";
import { add, setInputValue } from "../../store/cartStore/cartSlice";

function ProductCard() {
  const { productType, id } = useParams();
  const cartItems = useSelector((state) => state.cart);
  const coffeData = useSelector(selectCoffeData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCoffeData());
  }, [dispatch]);

  const allEspressoProducts =
    coffeData.find((products) => products[productType])?.[productType] || [];

  const currentProduct = allEspressoProducts.find(
    (product) => product.id === Number(id)
  );

  const handleAddToCart = () => {
    if (currentProduct) {
      dispatch(add(currentProduct));
    }
  };

  const handleChangeValue = (e) => {
    const newValue = parseFloat(e.target.value);
    if (newValue < 1 || isNaN(newValue)) {
      return (e.target.value = 1);
    } else {
      dispatch(setInputValue(newValue));
    }
  };

  if (!currentProduct) {
    return <div>Product not found</div>;
  }

  return (
    <div className="main-content">
      <div className="product-wrap">
        <div className="product-wrap-image">
          <img src={currentProduct.imagine} alt={currentProduct.nume} />
        </div>
        <div className="product-container-details">
          <div className="product-details">
            <h1 className="page-title">{currentProduct.nume}</h1>
            <span className="product-vendor">{currentProduct.detalii}</span>
          </div>
          <div className="product-form">
            <div className="product-quantity">
              <div className="input-wrapper">
                <label htmlFor="quantity">Cantitate</label>
                <input
                  className="input-quantity"
                  min={1}
                  type="number"
                  name="quantity"
                  defaultValue={"1"}
                  id="quantity"
                  onChange={(e) => handleChangeValue(e)}
                />
              </div>
            </div>
            <div className="product-submit">
              <span className="product-price">
                {cartItems.cartCurrency.stateCurrency === "ron"
                  ? `Lei ${Number(currentProduct.pret).toFixed(2)}`
                  : ""}
                {cartItems.cartCurrency.stateCurrency === "eur"
                  ? `€ ${Number(currentProduct.pret / 4.9).toFixed(2)}`
                  : ""}
                {cartItems.cartCurrency.stateCurrency === "usd"
                  ? `$ ${Number(currentProduct.pret / 4.3).toFixed(2)}`
                  : ""}
              </span>
              <input
                className="add-to-cart"
                type="submit"
                value="Add"
                onClick={handleAddToCart}
              />
            </div>
            <div className="product-options"></div>
          </div>
          <hr />
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
                  <td>{currentProduct.descriere.regiune}</td>
                  <td>{currentProduct.descriere.altitudine}</td>
                  <td>{currentProduct.descriere.varietate}</td>
                  <td>{currentProduct.descriere.procesare}</td>
                </tr>
              </tbody>
            </Table>
            <ul>
              <h3>Descriere</h3>
              <p>{currentProduct.descriere.informatii}</p>
            </ul>
          </div>
          <div className="share-buttons">
            <NavLink
              target="_blank"
              to={`https://www.facebook.com/sharer.php?u=${window.location.href}`}
              rel="noreferrer"
            >
              <Icon icon={facebook} />
            </NavLink>
            <NavLink
              target="_blank"
              to={`https://twitter.com/share?url=${window.location.href}`}
              rel="noreferrer"
            >
              <Icon icon={twitter} />
            </NavLink>
            <NavLink
              target="_blank"
              to={`https://pinterest.com/pin/create/button/?url=${window.location.href}`}
              rel="noreferrer"
            >
              <Icon icon={pinterest} />
            </NavLink>
            <NavLink
              target="_blank"
              to={`mailto:?subject=${currentProduct.nume}&body=Check this out ${window.location.href}`}
              className="share-email"
              rel="noreferrer"
            >
              <Icon icon={mail} />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
