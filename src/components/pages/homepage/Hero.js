import "./Hero.css";
import pages from "../pages";
import { Link } from "react-router-dom";
import restaurantFoodImg from "../../../assets/restaurant-food.jpg";

export default function Hero() {
    return (
        <section id="hero">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
                We are a family owned Mediterranean restaurant,
                focused on traditional recipes served with a modern twist.
            </p>
            <img
                alt="Restaurant food"
                id="hero-img"
                src={restaurantFoodImg}
            />
            <Link
                className="btn"
                to={pages.get("reservations").path}
            >
                Reserve a table
            </Link>
        </section>
    )
}