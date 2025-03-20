import "./Footer.css";
import { NavLink } from "react-router-dom";
import { RiPaypalLine, RiMastercardFill, RiVisaFill } from "react-icons/ri";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="footer-container">
      <hr />
      <div className="footer-content">
        <div className="footer-logo-container">
          <h1 className="footer-logo">
            REACT™ <br /> COFFEE
          </h1>
          <h1 className="footer-title">
            Pioneering specialty coffee since 2013
          </h1>
          <hr></hr>
        </div>
        <div className="info-shop-footer">
          <div className="info-container-footer">
            <h3 className="footer-h3">INFO</h3>
            <ul>
              <li>
                <NavLink to={"/contact"}>Contact</NavLink>
              </li>
              <li>
                <NavLink to={"/contact"}>Termeni si conditii</NavLink>
              </li>
              <li>
                <NavLink to={"/contact"}>Politica Cookie</NavLink>
              </li>
            </ul>
          </div>
          <div className="info-container-footer">
            <h3 className="footer-h3">SHOP</h3>
            <ul>
              <li>
                <NavLink to={"/collections/collection-products"}>Cafea</NavLink>
              </li>
              <li>
                <NavLink to={"#"}>Ceai</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="description-footer">
          <h3>REACT COFFEE</h3>
          <p>
            React Coffee este o comunitate de oameni care s-au împrietenit
            necondiționat, oameni creativi, educați, deschiși care împărtășesc
            experiențe și povești de viață, în timp ce pregătesc cu discreție
            toate detaliile pentru o cafea bună. Ne alăturăm curioși oricărei
            conversații despre cafea - fă-ne o vizită sau scrie-ne
            <a href="https://origocoffee.myshopify.com/pages/contact-1">
              {" "}
              aici.
            </a>
          </p>
        </div>
        <hr></hr>
      </div>
      <hr />
      <footer>
        <span>
          {`Copyright © Upbeat Code ${year} Ucoffee. `}
          <br />
          All rights reserved REACT™ Coffee.
        </span>
        <span className="span-icons">
          <RiPaypalLine className="footer-icons" />
          <RiMastercardFill className="footer-icons" />
          <RiVisaFill className="footer-icons" />
        </span>
      </footer>
    </div>
  );
}

export default Footer;
