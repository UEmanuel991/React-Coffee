import React from "react";
import "./HomeCollectionsCard.css";
import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";

function HomeCollectionsCard({ detailsProd }) {
  return (
    <div className="main-card-body">
      {detailsProd &&
        detailsProd.map((prod, index) => (
          <Card className="card-comp" key={index}>
            <NavLink to={prod.path}>
              <Card.Img className="home-collection-card-img" variant="top" src={prod.images} />
            </NavLink>
            <Card.Body>
              <NavLink className="nav-link" to={prod.path}>
                <Card.Title>{prod.title}</Card.Title>
              </NavLink>
              {prod.subtitles.map((elem, index) => (
                <NavLink className="nav-link" key={index} to={elem.link}>
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
