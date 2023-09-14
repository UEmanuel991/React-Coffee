import React from "react";
import "./componentsStyle.css";
import Card from "react-bootstrap/Card";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";

function CardComp({ card }) {
  console.log("card", card)
  return (
    <>
      <a href={card.link}>
        <Card
          key={card.id}
          className="card-shop container"
          style={{ width: "33%", display: "flex" }}
        >
          <Card.Img
            className="card-img img-fluid"
            style={{ maxWidth: "100%" }}
            variant="top"
            // src={item[0].cafea[0].mainPresentationImage}
            src={card.image}
            alt="logo"
          />

          <Card.Body>
            <Card.Title className="card-text-content">{card.title}</Card.Title>
          </Card.Body>
        </Card>
      </a>
    </>
  );
}
export default CardComp;
