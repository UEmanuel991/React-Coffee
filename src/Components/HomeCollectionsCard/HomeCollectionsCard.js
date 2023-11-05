import React from "react";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";

function HomeCollectionsCard({ detailsProd }) {
  return (
    <div className="main-card-comp" style={{ display: "flex" }}>
      {detailsProd &&
        detailsProd.map((prod, index) => (
          <Card key={index} style={{ width: "33%", margin: "5px" }}>
            <NavLink to={prod.path}>
              <Card.Img variant="top" src={prod.images} />
            </NavLink>
            <Card.Body>
              <NavLink
                style={{ textDecoration: "none", color: "black" }}
                to={prod.path}
              >
                <Card.Title>{prod.title}</Card.Title>
              </NavLink>
              {prod.subtitles.map((elem, index) => (
                <NavLink
                  key={index}
                  to={elem.link}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <Card.Title key={index} prod={prod}>
                    {elem.name}
                  </Card.Title>
                </NavLink>
              ))}
            </Card.Body>
          </Card>
        ))}
    </div>
  );
}

export default HomeCollectionsCard;
