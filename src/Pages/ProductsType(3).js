import React from "react";
import NavbarApp from "../Components/NavbarApp/NavbarApp";
import Footer from "../Components/Footer/Footer";
import '../style/style.css'
import Card from "react-bootstrap/Card";
import BrazilOlhos from "../assets/products-assets/brazil olhos d-agua.jpg.png";

import ColombiaPerlitas from '../assets/products-assets/COLOMBIA LAS PERLITAS.png'

import ConfortBlend from "../assets/products-assets/confort-blend.jpg.png";
import EthiopiaKeramo from "../assets/products-assets/ETHIOPIA KERAMO.png";
import KenyaTegu from "../assets/products-assets/kenya tegu.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function ProductsType() {
  const cardInfo = [
    {
      image: BrazilOlhos,
      subtitle: "chocolate, nuts, butter",
      title: "BRAZIL OLHOS D'AGUA",
      text: "de la €10.10",
      link: "/shop/cafea/espresso/brazil-olhos",
    },
    {
      image: ColombiaPerlitas,
      subtitle: "floral, citrus, exotic",
      title: "COLOMBIA LAS PERLITAS",
      text: "de la €13.13",
      link: "/collections/ceai",
    },
    {
      image: ConfortBlend,
      subtitle: "marzipan, raisins, caramel",
      title: "CONFORT BLEND",
      text: "de la €10.10",
      link: "/pages/cafeaua-noastra",
    },
    {
      image: EthiopiaKeramo,
      subtitle: "jasmine, vanilla, citrus",
      title: "ETHIOPIA KERAMO",
      text: "de la €13.13",
      link: "/pages/cafeaua-noastra",
    },
    {
      image: KenyaTegu,
      subtitle: "black currant, citrus, caramel",
      title: "KENYA TEGU",
      text: "de la €13.13",
      link: "/pages/cafeaua-noastra",
    },
  ];
  const renderCard = (card, index) => {
    return (
      <>
        <Card style={{ display: "inline-block", width: "33.33%", margin: "30px 0 0" }} key={index} className="card-shop">
          <a href={card.link}>
          <Card.Img
            className="card-img"
            variant="top"
            src={card.image}
            alt="logo"
          />
          </a>
          <Card.Body>
            <Card.Title className="card-subtitle">{card.subtitle}</Card.Title>
            <Card.Title className="card-text-content">
              <a
                style={{
                  textDecoration: "none",
                  display: "flex",
                  justifyContent: "center",
                  color: "black",
                  fontFamily: "Inter",
                  fontWeight: "400",
                }}
                href={card.link}
              >
                {card.title}
              </a>
            </Card.Title>
            <Card.Text style={{ display: "flex", justifyContent: "center" }}>
              {card.text}
            </Card.Text>
          </Card.Body>
        </Card>
      </>
    );
  };
  return (
    <>
      <NavbarApp />
      <Container>
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
          <span style={{ fontSize: "13px" }} className="divider">
            /
          </span>
          <a
            style={{
              textDecoration: "none",
              color: "black",
              fontSize: "14px",
              margin: "0px 5px",
            }}
            href="/shop"
          >
           Shop
          </a>
          <span style={{ fontSize: "13px" }} className="divider">
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
            Espresso
          </span>
        </div>
        <h1 style={{fontSize: "30px", marginBottom: "50px"}}>ESPRESSO</h1>
        <div className="grid">
          <Row md={2} xs={1} lg={3}>
            {cardInfo.map(renderCard)}
          </Row>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default ProductsType;
