import React, { useEffect } from "react";
import Wrapper from "../layouts/Wrapper";
import Icon from "react-icons-kit";
import Table from "react-bootstrap/Table";
import { facebook } from "react-icons-kit/icomoon/facebook";
import { pinterest } from "react-icons-kit/icomoon/pinterest";
import { twitter } from "react-icons-kit/icomoon/twitter";
import { mail } from "react-icons-kit/icomoon/mail";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
//redux
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCoffeData,
  selectCoffeData,
} from "../store/productsStore/coffeSlice";
import { fetchTeaData } from "../store/productsStore/teaSlice";
import { fetchEquipmentsData } from "../store/productsStore/equipmentsSlice";
import { add } from "../store/cartSlice";

function Product() {
  const dispatch = useDispatch();
  const coffeData = useSelector(selectCoffeData);
  const { productType, id } = useParams();

  useEffect(() => {
    dispatch(fetchCoffeData());
    dispatch(fetchTeaData());
    dispatch(fetchEquipmentsData());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const allEspressoProducts = coffeData.map((products) => {
    return products[productType];
  });
  const getJsonIndex = () => {
    let index = 0;
    if (productType === "espresso") {
      return index;
    } else if (productType === "filtru") {
      index = 1;
    } else if (productType === "microlot") {
      index = 2;
    }
    return index;
  };
  const prodIndex = getJsonIndex();

  const handleAddToCart = () => {
    const productToAdd = allEspressoProducts?.[prodIndex]?.[id - 1];
    dispatch(add(productToAdd)); //productToAdd este Action din cartSLice.js
  };

  return (
    <>
      <Wrapper>
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
                to={"/collections/collection-products/product/espresso"}
              >
                Espresso ???
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
              >
                {allEspressoProducts?.[prodIndex]?.[id - 1].nume}
              </NavLink>
            </div>
          </div>
          <div className="main-content">
            <div className="product-wrap">
              <div className="product-wrap-image">
                <img
                  src={allEspressoProducts?.[prodIndex]?.[id - 1].imagine}
                  alt="brazil-img"
                ></img>
              </div>
              <div className="product-container-details">
                <div className="product-details">
                  <h1 className="page-title">
                    {allEspressoProducts?.[prodIndex]?.[id - 1].nume}
                  </h1>
                  <span className="product-vendor">
                    {allEspressoProducts?.[prodIndex]?.[id - 1].detalii}
                  </span>
                </div>
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
                    <span className="product-price">
                      $ {allEspressoProducts?.[prodIndex]?.[id - 1].pret}
                    </span>

                    <input
                      className="add-to-cart"
                      type="submit"
                      value="Add"
                      onClick={() => handleAddToCart(allEspressoProducts?.[prodIndex]?.[id - 1])}
                    ></input>
                  </div>
                  <div className="product-options"></div>
                </div>
                <hr></hr>
                <div className="products-description">
                  {productType === "microlot" ? null : (
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
                          <td>
                            {
                              allEspressoProducts?.[prodIndex]?.[id - 1]
                                .descriere.regiune
                            }
                          </td>
                          <td>
                            {
                              allEspressoProducts?.[prodIndex]?.[id - 1]
                                .descriere.altitudine
                            }
                          </td>
                          <td>
                            {
                              allEspressoProducts?.[prodIndex]?.[id - 1]
                                .descriere.varietate
                            }
                          </td>
                          <td>
                            {
                              allEspressoProducts?.[prodIndex]?.[id - 1]
                                .descriere.procesare
                            }
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  )}

                  <ul
                    style={{
                      border: "1px solid rgb(223, 217, 217)",
                      borderRadius: "5px",
                    }}
                  >
                    <h3 style={{ fontSize: "18px", marginTop: "10px" }}>
                      Descriere
                    </h3>
                    <p>
                      {
                        allEspressoProducts?.[prodIndex]?.[id - 1].descriere
                          .informatii
                      }
                    </p>
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
        </div>
      </Wrapper>
    </>
  );
}

export default Product;
