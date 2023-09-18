import React from "react";
import Card from "react-bootstrap/Card";
import { HOMEPAGE_COLLECTIONS } from "../../utils/utils";

function HomeCollectionsCard() {
  return (
    <div className="main-card-comp" style={{ display: "flex" }}>
      {HOMEPAGE_COLLECTIONS.map((prod) => (
        <Card key={prod.id} style={{ width: "33%", margin: "5px" }}>
          <a href={prod.path}>
            <Card.Img variant="top" src={prod.images} />
          </a>
          <Card.Body>
            <a
              style={{ textDecoration: "none", color: "black" }}
              href={prod.path}
            >
              <Card.Title>{prod.title}</Card.Title>
            </a>
            {prod.subtitles.map((elem, index) => (
              <a
                href={elem.link}
                style={{ textDecoration: "none", color: "black" }}
              >
                <Card.Title key={index} prod={prod}>
                  {elem.name}{" "}
                </Card.Title>
              </a>
            ))}
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default HomeCollectionsCard;
