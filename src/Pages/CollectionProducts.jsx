import Wrapper from "../layouts/Wrapper";
import { useEffect, useState } from "react";
import axios from "axios";
import CardComp from "../Components/CardComp";

const CollectionsProductsJSX = () => {
  const [products, setProducts] = useState(null);
  const [path, setPath] = useState(null);

  useEffect(() => {
    setPath(window.location.pathname.split("/")[2]);
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3010/categories")
      .then((res) => {
        if (res) {
          res.data.map((data) => {
            if (data.products && path) {
              if (data.products && data.products.length > 0) {
                if (data.products[0].name === path) {
                  setProducts(data.products[0].sub_products);
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
    <Wrapper>
      <h1>PRoducts</h1>
      {products &&
        products.map((product, i) => <CardComp key={i} card={product} />)}
    </Wrapper>
  );
};

export default CollectionsProductsJSX;
