import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

export default function ConfirmedBooking() {
    return (
        <section className="confirmed-booking">
            <FontAwesomeIcon className="check-icon" icon={faCircleCheck} />
            <h2>Your reservation has been confirmed!</h2>
            <p>You will receive a message with all the details.</p>
        </section>
    )
}