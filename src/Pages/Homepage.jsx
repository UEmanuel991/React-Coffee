import "../PagesStyle/style.css";
import Footer from "../Components/Footer/Footer";
import NavbarApp from "../Components/NavbarApp/NavbarApp";
import HomeCollectionsCard from "../Components/HomeCollectionsCard/HomeCollectionsCard";
import HomeBgImage from "../assets/desktop.webp";
import { HOMEPAGE } from "../utils/utils";
import { useState } from "react";

const Homepage = ({ theme }) => {
  // eslint-disable-next-line no-unused-vars
  const [navbarAppTheme, setNavbarApp] = useState("light");
  const homepageDatas = HOMEPAGE;

  return (
    <div className="homepage">
      <div className="home-top-page">
        <div className="nav-home">
          <NavbarApp
            className={"navdropdown btn "}
            theme={navbarAppTheme}
            title="shop"
          />
        </div>
        <div className="desktop-home">
          <img className="img-desktop" src={HomeBgImage} alt="desktop-bg" />
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
