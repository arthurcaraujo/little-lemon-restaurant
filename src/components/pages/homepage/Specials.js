import "./Specials.css";
import pages from "../pages";
import { Link } from "react-router-dom";
import SpecialsCard from "./SpecialsCard";
import bruschettaImg from "../../../assets/bruschetta.jpg";
import greekSaladImg from "../../../assets/greek-salad.jpg";
import lemonDessertImg from "../../../assets/lemon-dessert.jpg";

const meals = [
    {
        name: "Greek Salad",
        id: "greek-salad",
        price: "$12.99",
        image: greekSaladImg,
        description: `The famous greek salad of crispy lettuce,
            peppers, olives and our Chicago style feta cheese,
            garnished with crunchy garlic and rosemary croutons.`
    },
    {
        name: "Bruschetta",
        id: "bruschetta",
        price: "$5.99",
        image: bruschettaImg,
        description: `Our bruschetta is made from grilled bread
            that has been smeared with garlic and
            seasoned with salt and olive oil.`
    },
    {
        name: "Lemon Dessert",
        id: "lemon-dessert",
        price: "$5.00",
        image: lemonDessertImg,
        description: `This comes straight from grandma's recipe book,
            every last ingredient has been sourced and
            is as authentic as can be imagined.`
    }
]

export default function Specials() {
    return (
        <section id="specials">
            <h2 className="section-title">This week's specials</h2>
            <Link
                className="btn"
                to={pages.get("orderOnline").path}
            >
                Online menu
            </Link>
            <span className="cards-container">
                {meals.map(meal =>
                    <SpecialsCard key={meal.id} props={meal} />
                )}
            </span>
        </section>
    )
}