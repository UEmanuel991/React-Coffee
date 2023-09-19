import "../style/style.css";
import BackgroundVideo from "../Components/Background/BackgroundVideo";
import Footer from "../Components/Footer/Footer";
import NavbarApp from "../Components/NavbarApp/NavbarApp";
import HomeCollectionsCard from "../Components/HomeCollectionsCard/HomeCollectionsCard";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCoffeData,
  selectCoffeData,
  selectCoffeError,
  selectCoffeStatus,
} from "../store/coffeSlice";
import {selectTeaData} from '../store/teaSlice'
import Product from "./Product";


const Homepage = ({ theme }) => {
  // eslint-disable-next-line no-unused-vars
  const [navbarAppTheme, setNavbarApp] = useState("light");
  const dispatch = useDispatch();
  const coffeData = useSelector(selectCoffeData);
  const teaData = useSelector(selectTeaData)
  // eslint-disable-next-line no-unused-vars
  const coffeStatus = useSelector(selectCoffeStatus);
  // eslint-disable-next-line no-unused-vars
  const coffeError = useSelector(selectCoffeError);

  useEffect(() => {
    dispatch(fetchCoffeData());
  }, [dispatch]);

  return (
    <div className="homepage">
      {console.log(coffeData.espresso)}

      {coffeData.espresso && 
        coffeData.espresso.map((c) => {
          console.log("c", c)
          return (
           <Product coffe={c} />
          );
        })}



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
            <HomeCollectionsCard />
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
