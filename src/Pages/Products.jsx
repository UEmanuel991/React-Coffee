import "../Components/cStyle.css/componentsStyle.css";
import "../style/style.css";
import Wrapper from "../layouts/Wrapper";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCoffeData,
  selectCoffeData,
} from "../store/productsStore/coffeSlice";
import { useEffect } from "react";
import GenericProducts from "../Components/GenericProducts/GenericProducts";

function Products() {
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
