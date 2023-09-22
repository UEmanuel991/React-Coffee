import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import SearchImg from "../../assets/white-search-icon.svg";
import CoffeLogo from "../../assets/Coffee_Shop.svg";
import "./NavbarApp.css";
import { NavLink } from "react-router-dom";

function NavbarApp(props) {
  console.log()
  return (
    <Navbar expand="lg" className="navbar">
      <Container className="container-navbar" >
        <div className="navbar-logo">
          <Navbar.Brand href="/">
            <img className="nav-logo " src={CoffeLogo} alt="logo" />
          </Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavDropdown
              className={props.theme === "light" ? 'navdropdownbar btn bg-light' : "navdropdown btn  "}
              title="shop"
              id="navbarScrollingDropdown"
            >
            <div className={"navdropdown-item " + props.theme}>
                <NavDropdown.Divider />
                <NavDropdown.Item 
                className={props.theme}
                  style={{ fontWeight: "600"}}
                  href="/collections"
                >
                  cafea
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item
                  style={{ fontWeight: "500" }}
                  href="/collections/collection-products"
                >
                  espresso
                </NavDropdown.Item>
                <NavDropdown.Item href="/collections/products-type">
                  filtru 
                </NavDropdown.Item>
                <NavDropdown.Item href="/collections/products-type/product">
                  microlot
                </NavDropdown.Item>
                <NavDropdown.Item href="/collections/products-type/product">
                  abonamente
                </NavDropdown.Item>
              </div>
              <div className="navdropdown-item">
                <NavDropdown.Divider />
                <NavDropdown.Item
                  style={{ fontWeight: "500" }}
                  className="navdropdown-item"
                  href="/ceai"
                >
                  ceai
                </NavDropdown.Item>

                <NavDropdown.Item href="/ceai-verde">
                  ceai verde
                </NavDropdown.Item>
                <NavDropdown.Item href="/ceai-negru">
                  ceai negru
                </NavDropdown.Item>
              </div>
            </NavDropdown>
            <NavDropdown
              className={props.theme === "light" ? 'navdropdownbar btn bg-light' : "navdropdown btn  "}
              title="prajitorie"
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item
                className="btn btn-light"
                href="/pages/cafeaua-noastra"
              >
                cafeaua noastra
              </NavDropdown.Item>
              <NavDropdown.Item href="/pages/cafea-pentru-evenimente">
                cafea pentru evenimente
              </NavDropdown.Item>
              <NavDropdown.Item href="/pages/cafea-pentru-locatii">
                cafea pentru locatii
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex btn ">
            <Button variant="outline">
              <img src={SearchImg} alt="searchImg" />
            </Button>
            <Form.Control
              type="search"
              placeholder="Cauta"
              className="me-1 "
              aria-label="Search"
            />
          </Form>
          <NavLink to={"/cart"} >
          <Button
            style={{ width: "3rem", height: "3rem", marginRight: "10px", position: "relative", color: "white", backgroundColor: "transparent", border: "none"}}
          >
            <svg style={{color: "brown"}}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
              fill="currentColor"
            >
              <path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z" />
            </svg>

            <div
              className="rounded-circle bg-secondary d-flex justify-content-center align-items-center"
              style={{
                color: "white",
                width: "1rem",
                height: "1rem",
                position: "absolute",
                bottom: 0,
                right: 0,
                transform: "translate(-85%, -160%)",
              }}
            >
              {/* cart-quantity */}
            </div>
          </Button>
          </NavLink>
          <select className="currency-selector">
            <option>eur</option>
            <option>ron</option>
            <option>usd</option>
          </select>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarApp;
