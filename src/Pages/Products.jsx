import "../PagesStyle/style.css";
import Wrapper from "../layouts/Wrapper";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useParams } from "react-router-dom";
import {
  fetchCoffeData,
  selectCoffeData,
} from "../store/productsStore/coffeSlice";
import { useEffect } from "react";
import GenericProducts from "../Components/GenericProducts/GenericProducts";

function Products() {
  const params = useParams();

  const dispatch = useDispatch();
  const coffeData = useSelector(selectCoffeData);

  useEffect(() => {
    dispatch(fetchCoffeData());
  }, [dispatch]);

  const allEspressoProducts = coffeData.map((products) =>
    products > 0 ? products : products.espresso
  );
  const allFiltruProducts = coffeData.map((products) =>
    products > 0 ? products : products.filtru
  );
  const allMicrolotProducts = coffeData.map((products) =>
    products > 0 ? products : products.microlot
  );

  return (
    <>
      <Wrapper>
        <div className="main-header-wrapper">
          <hr />
        </div>
        <div className="page-header-links">
          <NavLink className="header-navlinks" to={"/"}>
            Home
          </NavLink>
          <span className="divider">/</span>
          <NavLink className="header-navlinks" to={"/collections"}>
            Shop
          </NavLink>
          <span className="divider">/</span>
          <span className="subnavlink">
            {params.productType === "espresso" ? "Espresso" : ""}
            {params.productType === "filtru" ? "Filtru" : ""}
            {params.productType === "microlot" ? "Microlot" : ""}
          </span>
        </div>
        <h1 className="collection-title">
          {params.productType === "espresso" ? "ESPRESSO" : ""}
          {params.productType === "filtru" ? "FILTRU" : ""}
          {params.productType === "microlot" ? "MICROLOT" : ""}
        </h1>
        ;
        <div className="page-container-links">
          <NavLink
            className="header-navlinks"
            to={"/collections/collection-products/product/espresso"}
          >
            ESPRESSO
          </NavLink>
          &nbsp; •&nbsp;&nbsp;
          <NavLink
            className="header-navlinks"
            to={"/collections/collection-products/product/filtru"}
          >
            FILTRU &nbsp; •&nbsp;&nbsp;
          </NavLink>
          <NavLink
            className="header-navlinks"
            to={"/collections/collection-products/product/microlot"}
          >
            MICROLOT &nbsp; •&nbsp;&nbsp;
          </NavLink>
        </div>
        <GenericProducts
          productDetailsM={allMicrolotProducts}
          productDetailsE={allEspressoProducts}
          productDetailsF={allFiltruProducts}
        />
      </Wrapper>
    </>
  );
}

export default Products;
