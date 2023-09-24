import React from "react";
import GenericProduct from "../Components/GenericProducts/GenericLastProduct";
import Wrapper from "../layouts/Wrapper";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCoffeData, selectCoffeData } from "../store/coffeSlice";
// import { fetchTeaData } from "../store/teaSlice";
// import { fetchEquipmentsData } from "../store/equipmentsSlice";

//http://localhost:3000/collections/collection-products/product/prod/:idType

function Product() {
  const dispatch = useDispatch();
  const { idType } = useParams();
  const coffeData = useSelector(selectCoffeData);
  console.log("coffeData",coffeData)
  useEffect(() => {
    dispatch(fetchCoffeData());
    // dispatch(fetchTeaData);
    // dispatch(fetchEquipmentsData)
  }, [dispatch]);

  useEffect(() => {
    console.log(idType);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const allEspressoProducts = coffeData.map((products) => {
    if (products > 0) {
      return products;
    }
    return products.espresso;
  });

  const allFiltruProducts = coffeData.map((products) => {
    if (products > 0) {
      return products;
    }
    return products.filtru;
  });
  const allMicrolotProducts = coffeData.map((products) => {
    if (products > 0) {
      return products;
    }
    return products.microlot;
  });
  console.log(coffeData);
  return (
    <>
      <Wrapper>
        <p>asdasaaaa</p>
        <GenericProduct
          productDetailsM={allMicrolotProducts}
          productDetailsE={allEspressoProducts}
          productDetailsF={allFiltruProducts}
        />
      </Wrapper>
    </>
  );
}

export default Product;
