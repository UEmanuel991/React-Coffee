import "./NavbarApp.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { CiSearch } from "react-icons/ci";
import CoffeLogoBlack from "../../assets/react-coffee-logo.svg";
import CoffeLogoWhite from "../../assets/white-logo.svg";
import { NavLink, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { currency } from "../../store/cartStore/cartSlice";
import { searchByName } from "../../store/productsStore/coffeSlice";

function NavbarApp(props) {
  const { totalQuantity, cartCurrency } = useSelector((state) => state.cart);
  const location = useLocation();
  const allCurrency = [
    { label: "Ron", value: "ron" },
    { label: "Eur", value: "eur" },
    { label: "Usd", value: "usd" },
  ];

  const dispatch = useDispatch();
  const handleChange = (value) => {
    dispatch(currency(value));
  };
  const handleSearch = (value) => {
    let myValue = "";
    myValue = myValue.concat(value)
    // console.log(myValue)
    dispatch(searchByName(myValue));
  };

  return (
    <div className={location.pathname === "/" ? "menu-w" : "menu"}>
      <div className=" first-container menu-logo">
        <NavLink to={"/"}>
          {location.pathname === "/" ? (
            <img className="nav-logo-white " src={CoffeLogoWhite} alt="logo" />
          ) : (
            <img className="nav-logo-dark " src={CoffeLogoBlack} alt="logo" />
          )}
        </NavLink>
      </div>
      <div className="navbar-second-div">
        <div className="second-container">
          <input type="checkbox" className="menu-btn" id="menu-btn" />
          <label
            className={location.pathname === "/" ? "menu-icon-w " : "menu-icon"}
            htmlFor="menu-btn"
          >
            <span
              className={location.pathname === "/" ? "navicon-w" : "navicon"}
            />
          </label>
          <div className="for-input-check">
            <div className="dropdown1">
              <NavLink to={"/collections"}>cafea</NavLink>
              <NavLink to={"/collections/collection-products/product/espresso"}>
                espresso
              </NavLink>
              <NavLink to={"/collections/collection-products/product/filtru"}>
                filtru
              </NavLink>
              <NavLink to={"/collections/collection-products/product/microlot"}>
                microlot
              </NavLink>
              <hr />
              <NavLink className={props.theme} to={"/collections"}>
                ceai-verde
              </NavLink>
              <NavLink to={"/collections/collection-products/product/espresso"}>
                ceai-alb
              </NavLink>
              <NavLink to={"/collections/collection-products/product/filtru"}>
                ceai-negru
              </NavLink>
            </div>
          </div>
          <div className="dropdown">
            <button
              className={location.pathname === "/" ? "dropbtn-w" : "dropbtn"}
            >
              shop
            </button>
            <div className="dropdown-content">
              <NavLink to={"/collections"}>produse</NavLink>
              <NavLink to={"/collections/collection-products/product/espresso"}>
                espresso
              </NavLink>
              <NavLink to={"/collections/collection-products/product/filtru"}>
                filtru
              </NavLink>
              <NavLink to={"/collections/collection-products/product/microlot"}>
                microlot
              </NavLink>
            </div>
          </div>
          <div className="dropdown">
            <button
              className={location.pathname === "/" ? "dropbtn-w" : "dropbtn"}
            >
              prajitorie
            </button>
            <div className="dropdown-content">
              <NavLink to={"/collections"}>cafeaua-noastra</NavLink>
              <NavLink to={"/collections/collection-products/product/espresso"}>
                pentru locatii
              </NavLink>
              <NavLink to={"/collections/collection-products/product/filtru"}>
                ceai
              </NavLink>
            </div>
          </div>
        </div>
        <div className="third-container-navbar">
          <Form className="search-navbar-form d-flex btn ">
            <Button variant="outline">
              <CiSearch
                className={
                  location.pathname === "/" ? "search-icon-w" : "search-icon"
                }
              />
            </Button>
            <Form.Control
              type="search"
              placeholder="Cauta"
              className="me-1 text-light search-navbar-input"
              aria-label="Search"
              onChange={(e) => handleSearch(e.target.value)}
            />
          </Form>
          <NavLink to={"/collections/cart"}>
            <Button className="navbar-buttons">
              <svg
                style={{ width: "30px !important" }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                fill="currentColor"
              >
                <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
              </svg>
              <div className="numbers-of-cart bg-secondary d-flex justify-content-center align-items-center">
                {totalQuantity}
              </div>
            </Button>
          </NavLink>
          <select
            value={cartCurrency.stateCurrency}
            onChange={(e) => handleChange(e.target.value)}
            className={
              location.pathname === "/"
                ? "currency-selector-w"
                : "currency-selector"
            }
          >
            {allCurrency &&
              allCurrency.map((currency, index) => (
                <option value={currency.value} key={index}>
                  {currency.label}
                </option>
              ))}
          </select>
        </div>
      </div>
    </div>
  );
}

export default NavbarApp;
