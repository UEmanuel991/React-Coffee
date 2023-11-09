import "../style/style.css";
import BackgroundVideo from "../Components/Background/BackgroundVideo";
import Footer from "../Components/Footer/Footer";
import NavbarApp from "../Components/NavbarApp/NavbarApp";
import HomeCollectionsCard from "../Components/HomeCollectionsCard/HomeCollectionsCard";
import { HOMEPAGE } from "../utils/utils";
import { useState } from "react";
import { selectCoffeData } from "../store/productsStore/coffeSlice";
import { useSelector } from "react-redux";


const Homepage = ({ theme }) => {
  // eslint-disable-next-line no-unused-vars
  const [navbarAppTheme, setNavbarApp] = useState("light");
  const homepageDatas = HOMEPAGE;

  const filteredProducts = useSelector(selectCoffeData)

  console.log(filteredProducts)
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
        <div className="home-page-content">
          <p style={{ marginBottom: "-80px", color: "white" }}>people </p>
          <p className="home-page-p">
            of speciality{" "}
            <span style={{ fontSize: "3vw", marginTop: "75px" }}>®</span>
          </p>
        </div>
      </div>
      <div className="shop-card-components">
        <div className="shop-coffe-mainpage">
          <div className="home-page-content">
            <h2>
              shop <br></br> coffee
            </h2>
            <HomeCollectionsCard detailsProd={homepageDatas} />
          </div>
        </div>
        <div className="homepage-footer">
          <Footer />
        </div>
      </div>
    </div>
  );
};
export default Homepage;
