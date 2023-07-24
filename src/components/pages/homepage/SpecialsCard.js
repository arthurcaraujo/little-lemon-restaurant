import "./SpecialsCard.css";
import pages from "../pages";
import { Link } from "react-router-dom";
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SpecialsCard({ props }) {
    return (
        <article className="specials-card">
            <img alt={props.name} className="card-img" src={props.image} />
            <h3 className="card-title">{props.name}</h3>
            <span className="card-price">{props.price}</span>
            <p className="card-description">{props.description}</p>
            <Link
                className="btn"
                to={pages.get("orderOnline").path}
            >
                Order a delivery <FontAwesomeIcon icon={faMotorcycle} />
            </Link>
        </article>
    )
}