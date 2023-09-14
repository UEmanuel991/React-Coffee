import Wrapper from "../../layouts/Wrapper";
import CardComp from "../CardComp";

const COFFEE_CATEGORIES = [
    {id: 1, name: "espresso", image: "", link: "/collections/espresso"},
    {id: 2, name: "filtru", image: "", link: "/collections/filtru"},
    {id: 3, name: "abonamente", image: "", link: "/collections/abonamente"},
    {id: 4, name: "card cadou", image: "", link: "/collections/card-cadou"},
]

const CollectionCoffee = () => {
    return (
        <Wrapper>
            <h1>COFFEEE</h1>
            <div className="coffee-categories">
            {COFFEE_CATEGORIES.map(cateogry => (
                <CardComp key={cateogry.id} card={cateogry} />
            ))}
            </div>
        </Wrapper>
    )
}

export default CollectionCoffee;