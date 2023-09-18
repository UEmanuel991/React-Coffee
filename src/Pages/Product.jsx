import React from "react";
import Icon from "react-icons-kit";
import { facebook } from "react-icons-kit/icomoon/facebook";
import { pinterest } from "react-icons-kit/icomoon/pinterest";
import { twitter } from "react-icons-kit/icomoon/twitter";
import { mail } from "react-icons-kit/icomoon/mail";
import "../Components/componentsStyle.css";
import Table from "react-bootstrap/Table";
import "../style/style.css";
import axios from "axios";
import Wrapper from "../layouts/Wrapper";
import { useState, useEffect } from "react";

//#5 Pagina PRODUCT care randeaza PRODUSUL INAINTE DE CART
//de randat DINAMIC

function Product() {
  const [allProd, setAllProd] = useState(null);
  const [coffe, setCoffe] = useState("");
  const [tea, setTea]= useState(null);
  const [echipaments, setEchipaments] = useState(null);

  const fetchData = async () => {
    const coffeAPI = "http://localhost:3110/cafea";
    const teaAPI = "http://localhost:3110/ceai";
    const echipAPI = "http://localhost:3110/echipamente";

    const getCoffeeData = await axios.get(coffeAPI).then(
      res => setCoffe(res.data[0].espresso)
    );
    console.log("hellow")

    console.log("hellow111")
    console.log("hy")
   
    const getTeaData = axios.get(teaAPI); 
    const getEchipData = axios.get(echipAPI);

    axios.all([getCoffeeData, getTeaData, getEchipData]).then(
      axios.spread((...allData) => {
        const allProducts = allData;
        // const allCoffeData = allData.data;
        // const allTeaData = allData[1].data
        // const allEchipamentsData = allData[2].data
        setAllProd(allProducts);
        // setCoffe(allCoffeData);
        // setTea(allTeaData)
        // setEchipaments(allEchipamentsData)
      })
    );
  };
  useEffect(() => {
    fetchData();
  }, []);
  
  return (
    <Wrapper>
      {console.log(allProd)}
      {/* {coffe &&
        coffe.map((c) => ( */}
          <div className="subcard-body">
            <div className="main-header-wrapper">
              <hr style={{ margin: "0px 40px" }}></hr>
            </div>
            <div className="main-content-wrapper">
              <div className="page-header">
                <div className="page-header-links">
                  <a
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontSize: "13px",
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
                      fontSize: "13px",
                      margin: "0px 5px",
                    }}
                    href="/shop"
                  >
                    Shop
                  </a>
                  <span style={{ fontSize: "13px" }} className="divider">
                    /
                  </span>
                  <a
                    style={{
                      textDecoration: "none",
                      color: "black",
                      fontSize: "13px",
                      margin: "0px 5px",
                    }}
                    href="/espresso"
                  >
                    Espresso
                  </a>
                  <span style={{ fontSize: "13px" }} className="divider">
                    /
                  </span>
                  <span
                    style={{
                      textDecoration: "none",
                      color: "#b3a394",
                      fontSize: "13px",
                      margin: "0px 5px",
                    }}
                    href="/espresso/products/brazil-olhos"
                  > 
                    {/* {coffe[0].espresso[0].nume} */}
                  </span>
                </div>
              </div>

              <div className="main-content">
                <div className="product-wrap">
                  <div className="product-wrap-image">
                    {/* <img src={coffe[0].espresso[0].imagine} alt="brazil-img"></img> */}
                  </div>

                  <div className="product-container-details">
                    <div className="product-details">
                      {/* <h1 className="page-title">{coffe[0].espresso[0].nume}</h1> */}
                      <span className="product-vendor"></span>
                    </div>
                    <div className="product-form">
                      <div className="product-quantity">
                        <div className="input-wrapper">
                          <label htmlFor="quantity">Cantitate</label>

                          <input
                            style={{ textAlign: "center" }}
                            className="input-quantity"
                            type="text"
                            name="quantity"
                            value="1"
                            id="quantity"
                            onChange={(e) => console.log(e.target.value)}
                          ></input>
                        </div>
                      </div>
                      <div className="product-submit">
                        <span className="product-price"> </span>
                        <input
                          className="add-to-cart"
                          type="submit"
                          value="0"
                        ></input>
                      </div>
                      <div className="product-options"></div>
                    </div>
                    <hr></hr>
                    <div className="products-description">
                      <Table>
                        <thead>
                          <tr>
                            <th>Regiune</th>
                            <th>Altitudine</th>
                            <th>Varietate</th>
                            <th>Procesare</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            {/* <td>{prod[0].cafea[0].espresso[0].descriere.regiune}</td> */}
                            <td><div>
                              {coffe.length > 0 && coffe.map(c => (
                                <p key={c.index} >{c.nume}</p>
                              )
                               
                              )}
                              </div></td>
                            <td>YELLOW CATUAI</td>
                            <td>NATURALĂ</td>
                          </tr>
                        </tbody>
                      </Table>
                      <ul
                        style={{
                          border: "1px solid rgb(223, 217, 217)",
                          borderRadius: "5px",
                        }}
                      >
                        <h3 style={{ fontSize: "18px", marginTop: "10px" }}>
                          Descriere
                        </h3>
                        <p>
                          Aproape 5 ani de contact direct cu Brazilia. Aequitas
                          Coffee. Ferma Olhos d'Agua.
                        </p>
                        <p>
                          <b>
                            La degustare, Brazil Olhos d'Agua s-a remarcat prin
                            corpolența crescută, textura cremoasă și aciditatea
                            scăzută, lactică. 84 puncte QGrading - evaluare
                            pentru calitatea cafelei verzi.
                          </b>
                        </p>
                        <p>
                          Cafeaua care provine de la această fermă are o poveste
                          fascinantă. Aflată la 4 generații de producători,
                          aparține familiei lui Nicolau Minami, de origine
                          japoneză, stabilită în Brazilia în 1927. Cu ajutorul
                          lui Yuki Minami, fiica acestuia, au îmbunătățit
                          calitatea procesării și au stabilit o cale mai bună de
                          a exporta cafeaua. În 2018 am fost impresionați de
                          profilul curat al boabelor cultivate la ferma Olhos
                          d'Agua. Yuki Minami este recunoscută în domeniu pentru
                          îmbunătățirile pe care le-a adus în procesarea și
                          exportul cafelei.{" "}
                        </p>
                        <p>
                          Proiectul Aequitas înseamnă transparență și echitate,
                          valori pe care le cultivă în relația cu fermierii,
                          importatorii și prăjitoriile. Dacă 40 de ani cafeaua a
                          fost vândută printr-un proces care urma traseul
                          fermier cooperativă intermediar exportator importator
                          roaster coffee shop consumator, din 2015, acest lanț
                          al producției a fost îmbunătățit. Obținând 86 de
                          puncte cu cafeaua lor, în urma unui cupping ținut cu
                          un prăjitor Q-grader, și replicând rezultatul prin
                          alte 3 cupping-uri cu alți 3 Q-graderi, Aequitas au
                          început să vândă cafea verde către coffee shop-uri și
                          prăjitorii. Astfel, orientându-se către o nouă piață
                          care evaluează calitatea boabelor, în 2016 au exportat
                          cafele cu punctaj între 82 și 87 de puncte către un
                          importator din Europa.{" "}
                        </p>
                      </ul>
                      <ul
                        style={{
                          border: "1px solid rgb(223, 217, 217)",
                          height: "55px",
                          borderRadius: "5px",
                        }}
                      ></ul>
                    </div>
                    <div className="share-buttons">
                      <a
                        target="_blank"
                        href="https://www.facebook.com/sharer.php?u=https://origocoffee.ro/products/brazilia-olhos-daqua"
                        rel="noreferrer"
                      >
                        <Icon icon={facebook} />
                      </a>
                      <a
                        target="_blank"
                        href="https://twitter.com/share?url=https://origocoffee.ro/products/brazilia-olhos-daqua"
                        rel="noreferrer"
                      >
                        <Icon icon={twitter} />
                      </a>
                      <a
                        target="_blank"
                        href="https://pinterest.com/pin/create/button/?url=https://origocoffee.ro/products/brazilia-olhos-daqua&media=http://origocoffee.ro/cdn/shop/products/2.BrazilOlhosD_Agua-fata_1024x1024.jpg?v=1667403974&description=Brazil%20Olhos%20d%27Agua"
                        rel="noreferrer"
                      >
                        <Icon icon={pinterest} />
                      </a>
                      <a
                        target="_blank"
                        href="mailto:?subject=Brazil Olhos d'Agua&amp;body=Check this out https://origocoffee.ro/products/brazilia-olhos-daqua"
                        className="share-email"
                        rel="noreferrer"
                      >
                        <Icon icon={mail} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        {/* ))} */}
    </Wrapper>
  );
}

export default Product;
