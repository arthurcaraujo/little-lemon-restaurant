import "./About.css";
import chefsImageA from "../../../assets/mario-and-adrian-a.jpg";
import chefsImageB from "../../../assets/mario-and-adrian-b.jpg";

export default function About() {
    return (
        <section id="about">
            <div className="text-container">
                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
                <p >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sed eu velit ac quam vulputate auctor interdum nec lorem.
                    Aenean lectus diam, elementum ac leo vel, fringilla pharetra est.
                </p>
            </div>
            <div className="img-container">
                <img
                    alt="Mario and Adrian"
                    id="chefs-img-a"
                    src={chefsImageA}
                />
                <img
                    alt="Mario and Adrian"
                    id="chefs-img-b"
                    src={chefsImageB}
                />
            </div>
        </section>
    )
}