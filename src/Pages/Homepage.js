import "../style/style.css";
import BackgroundVideo from "../Components/BackgroundVideo";
import Footer from "../Components/Footer/Footer";
import NavbarApp from "../Components/NavbarApp/NavbarApp";
import CardComp from "../Components/CardComp";
import { useState, useEffect } from "react";

const Homepage = ({ theme }) => {
  // eslint-disable-next-line no-unused-vars
  const [navbarAppTheme, setNavbarApp] = useState("light");

  return (
    <div className="homepage">
      <div style={{ backgroundColor: "black" }} className="nav-home">
        <NavbarApp
          className={"navdropdown btn "}
          theme={navbarAppTheme}
          title="shop"
          id="navbarScrollingDropdown_light"
        />
      </div>
      <div className="video-home">
        <BackgroundVideo />
        <div className="home-modules"></div>

        <div className="home-page-content">
          <p style={{ marginBottom: "-80px" }}>people </p>
          <p className="home-page-p">
            of speciality{" "}
            <p style={{ fontSize: "3vw", marginTop: "75px" }}>®</p>
          </p>
        </div>
      </div>
      <div className="shop-card-components">
        <div className="shop-coffe-mainpage">
          <h2 style={{ marginLeft: "72px", fontSize: "20px" }}>
            {/* shop <br></br> coffee */}
          </h2>
          {
                // products.map((product) => (
                //   <CardComp key={product.id} card={product}/>
                // ))
              } 
        </div> 
        <Footer />
      </div>
      <div className="homepage-footer"></div>
    </div>
  );
};
export default Homepage;
