import React from "react";
import "./Footer.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { NavLink } from "react-router-dom";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="footer-container">
      <Container>
        <hr></hr>
        <div>
          <Row>
            <Col>
              <div className="footer-logo-container">
                <h1 className="footer-logo">
                  U™ <br></br> COFFEE
                </h1>
                <h1 className="footer-title">
                  Pioneering specialty coffee since 2013
                </h1>
                <br></br>
                <br></br>
                <br></br>
                <hr></hr>
              </div>
            </Col>
            <Col>
              <div className="info-shop-footer">
                <Row>
                  <Col className="info-container-footer">
                    <h3
                      style={{
                        fontSize: "14px",
                        fontWeight: "700",
                        overflow: "hidden",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      INFO
                    </h3>
                    <ul style={{ listStyle: "none" }}>
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
                  </Col>
                  <Col className="info-container-footer">
                    <h3
                      style={{
                        fontSize: "14px",
                        fontWeight: "700",
                        overflow: "hidden",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      SHOP
                    </h3>
                    <ul style={{ listStyle: "none" }}>
                      <li>
                        <NavLink to={"/collections/collection-products"}>
                          Cafea
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to={""}>Ceai</NavLink>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col className="description-footer">
              <h3 style={{ fontSize: "14px", overflow: "hidden" }}>U COFFEE</h3>
              <p style={{ fontSize: "0.8125rem" }}>
                U COFFEE este o comunitate de oameni care s-au împrietenit
                necondiționat, oameni creativi, educați, deschiși care
                împărtășesc experiențe și povești de viață, în timp ce pregătesc
                cu discreție toate detaliile pentru o cafea bună. Ne alăturăm
                curioși oricărei conversații despre cafea – fă-ne o vizită sau
                scrie-ne aici.
              </p>
            </Col>
            <hr></hr>
            <footer>
              {`Copyright © Upbeat Code ${year} Ucoffee. `}
              <br></br>All rights reserved U™ Coffee.
            </footer>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default Footer;
