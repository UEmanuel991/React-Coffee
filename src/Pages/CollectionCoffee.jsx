import Wrapper from "../layouts/Wrapper";
import CardComp from "../Components/CardComp/CardComp";
import { COFFEE_COLLECTIONS } from "../utils/utils";

//#4 Ar trebui sa fie pagina de randare cafea (espresso, microlot, echipamente) 
// path: /collections/cafea
//de randat DINAMIC !!!!

const CollectionCoffee = () => {
  return (
    <Wrapper>
      <h1>COLLECTIONS COFFEE RANDARE</h1>
      <div style={{ marginTop: "60px" }} className="page-header-links">
        <a
          style={{
            textDecoration: "none",
            color: "black",
            fontSize: "14px",
            margin: "0px 5px",
          }}
          href="/"
        >
          Home
        </a>
        <span style={{ fontSize: "14px" }} className="divider">
          /
        </span>
        <a
          style={{
            textDecoration: "none",
            color: "black",
            fontSize: "14px",
            margin: "0px 5px",
          }}
          href="/collections"
        >
          Shop
        </a>
        <span style={{ fontSize: "14px" }} className="divider">
          /
        </span>
        <span
          style={{
            textDecoration: "none",
            color: "#b3a394",
            fontSize: "14px",
            margin: "0px 5px",
          }}
        >
          Cafea
        </span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        {COFFEE_COLLECTIONS.map((e) => (
          <a style={{ textDecoration: "none", color: "black" }} href={e.link}>
            <h2>{e.name}</h2>
          </a>
        ))}
      </div>
      <div className="coffee-categories" style={{ marginBottom: "60px" }}>
        {COFFEE_COLLECTIONS.map((cateogry) => (
          <CardComp key={cateogry.id} card={cateogry} />
        ))}
      </div>
    </Wrapper>
  );
};

export default CollectionCoffee;
