import React from "react";
import "../componentsStyle.css";
import Card from "react-bootstrap/Card";
import axios from "axios";
import { useState, useEffect } from "react";

function CardComp({ card }) {
  const [path, setPath] = useState(null);
  //vreau sa trimit path-ul din pagina asta dinamic
  useEffect(() => {
    setPath(window.location.pathname.split("/")[2]);
  }, []);

  const [data, setData] = useState(null); //allDatas
  const [cafea, setCafea] = useState(null); //coffeData

  useEffect(() => {
    axios
      .get("http://localhost:3110/cafea")
      .then((res) => {
        if (res) {
          // eslint-disable-next-line array-callback-return
          res.data.map((data) => {
            setData(data);
            if (data.cafea[0] && path) {
              setCafea(data.cafea); //ASTA TREBUIE PUSA PE ULTIMA PAGINA CU UN SINGUR PRODUS
              if (data.cafea && data.cafea.length > 0) {
                // console.log(data.cafea[0].espresso[0].nume)
                if (data.cafea[0].espresso[0].nume === path) {
                  //de vazut cum trimit path-ul
                  setCafea(data.cafea[0].espresso[0].nume);
                }
              }
            }
          });
        }
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, [path]);
  return (
    <>
      <div>
        {cafea &&
          cafea[0].espresso.map((d) => (
            <Card
              style={{
                display: "inline-block",
                width: "33.33%",
                margin: "30px 0 0",
              }}
              key={data.index}
              data={data}
              className="card-shop"
            >
              <a href="/">
                <Card.Img
                  className="card-img"
                  variant="top"
                  src={d.imagine}
                  alt="logo"
                />
              </a>
              <Card.Body>
                <a
                  style={{
                    textDecoration: "none",
                    display: "flex",
                    justifyContent: "center",
                    color: "black",
                    fontFamily: "Inter",
                    fontWeight: "400",
                  }}
                  href="/"
                >
                  <Card.Title className="card-subtitle">{d.detalii}</Card.Title>
                  <Card.Title className="card-text-content"></Card.Title>
                </a>
                <Card.Text
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    textAlign: "center",
                  }}
                >
                  {d.nume}
                  <p>de la {d.pret} $</p>
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
      </div>
    </>
  );
}

export default CardComp;
