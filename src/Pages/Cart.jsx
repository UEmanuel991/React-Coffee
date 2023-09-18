import "../style/style.css";
import Footer from "../Components/Footer/Footer";
import NavbarApp from "../Components/NavbarApp/NavbarApp";
// import Table from "react-bootstrap/Table";
import BrazilOlhosImg from "../assets/products-assets/brazil olhos d-agua.jpg.png";

const Cart = () => {
  return (
    <div className="cart page">
      <NavbarApp />
      <div className="page-header-links">
        <a
          style={{
            textDecoration: "none",
            color: "black",
            fontSize: "14px",
            margin: "0px 5px",
          }}
          href="/"
        >
          Home
        </a>
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
          letterSpacing: "0.2rem"
        }}
      >
        CART
      </h1>
      <div className="cart-checkout-container">
        <div className="tabel-cart">
          <table  className="tabel">
            <thead>
              <tr >
                <th style={{fontSize: "16px"}}>Product</th>
                <th style={{fontSize: "16px"}}>Price</th>
                <th style={{fontSize: "16px"}}>Quantity</th>
                <th style={{fontSize: "16px"}}>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="cart-item-image">
                  <span style={{ padding: "12px", display: "flex" }}>X</span>

                  <a
                    style={{
                      margin: "30px 0px",
                      textDecoration: "none",
                      color: "black",
                    }}
                    href="/collections/espresso"
                  >
                    <img
                      style={{ width: "100px" }}
                      className="page-container-img"
                      src={BrazilOlhosImg}
                      alt="my-cart-img"
                    />
                    <div style={{ textAlign: "left", marginLeft: "10px" }}>
                      <p style={{ color: "#d9d1c9" }}>
                        chocolate, nuts, butter
                      </p>
                      <h3 style={{ fontSize: "16px", fontWeight: "bold" }}>
                        Brazil Olhos
                      </h3>
                    </div>
                  </a>
                </td>
                <td style={{fontSize: "16px"}}>pret</td>
                <td>
                  <input
                    style={{
                      width: "20px",
                      textAlign: "center",
                      border: "none",
                      marginRight: "20px",
                      fontSize: "16px"
                    }}
                    type="text"
                    name="cantitate"
                    value="0"
                  ></input>
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
                  <span style={{fontSize: "16px"}}
                    class="money"
                    data-currency-ron="150,00 lei"
                    data-currency-eur="&amp;euro;30.26"
                    data-currency="EUR"
                    data-currency-usd="$32.45"
                  >
                    €30.26
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="checkout-container">
          <div className="cart-tools">
            <div className="cart-instructions">
              <p style={{ marginTop: "40px" }}>Observatii comanda (optional)</p>
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
                class="money"
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
              class="secondary"
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
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
            <a style={{textDecoration: "none", color:"black", marginLeft:"5px"}} href="/terms">
            <label for="vehicle1"> Am citit și am luat la cunoștință Politica privind prelucrarea datelor cu caracter personal</label></a>
            </form>
          </div>
      </div>
      <Footer />
    </div>
  );
};
export default Cart;
