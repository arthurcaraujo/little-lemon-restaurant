import "./TestimonialCard.css";
import { faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { faStar as faRegularStar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const starIcons = {
    "0": faRegularStar,
    "0.5": faStarHalfStroke,
    "1": faStar
};

export default function TestimonialCard({ props }) {
    return (
        <article className="testimonials-card">
            <img
                alt={props.name}
                className="customer-img"
                src={props.image}
            />
            <h3 className="customer-name">{props.name}</h3>
            <span className="star-rating">
                {props.starRating.map((star, index) =>
                    <FontAwesomeIcon
                        className="star-icon"
                        icon={starIcons[star]}
                        key={index}
                        size="lg"
                    />
                )}
            </span>
            <blockquote className="customer-review">
                "{props.review}"
            </blockquote>
        </article>
    )
}