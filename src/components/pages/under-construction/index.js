import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonDigging } from "@fortawesome/free-solid-svg-icons";

export default function UnderConstruction() {
    return (
        <section className="under-construction">
            <div className="icon-container">
                <span className="dot dot-three">.</span>
                <span className="dot dot-two">.</span>
                <span className="dot dot-one">.</span>
                <FontAwesomeIcon className="worker-icon" icon={faPersonDigging} />
            </div>
            <h2>Page under construction</h2>
        </section>
    )
}