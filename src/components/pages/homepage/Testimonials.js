import "./Testimonials.css";
import TestimonialCard from "./TestimonialCard";
import customer1Img from "../../../assets/customer1.jpg";
import customer2Img from "../../../assets/customer2.jpg";
import customer3Img from "../../../assets/customer3.jpg";
import customer4Img from "../../../assets/customer4.jpg";
import customer5Img from "../../../assets/customer5.jpg";
import customer6Img from "../../../assets/customer6.jpg";

const customers = [
    {
        name: "Francisca Matos",
        id: "customer-1",
        image: customer1Img,
        starRating: [1, 1, 1, 1, 1],
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        name: "Joaquim Alves",
        id: "customer-2",
        image: customer2Img,
        starRating: [1, 1, 1, 1, 0.5],
        review: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        name: "Egil Lundstedt",
        id: "customer-3",
        image: customer3Img,
        starRating: [1, 1, 1, 1, 0],
        review: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        name: "Anne Harris",
        id: "customer-4",
        image: customer4Img,
        starRating: [1, 1, 1, 1, 1],
        review: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
        name: "Rose Carter",
        id: "customer-5",
        image: customer5Img,
        starRating: [1, 1, 1, 1, 0.5],
        review: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, et quasi architecto beatae vitae dicta sunt explicabo."
    },
    {
        name: "John Smith",
        id: "customer-6",
        image: customer6Img,
        starRating: [1, 1, 1, 1, 1],
        review: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
    }
];

export default function Testimonials() {
    return (
        <section id="testimonials">
            <h2 className="section-title">What people say about us</h2>
            <div className="cards-container">
                {customers.map(customer =>
                    <TestimonialCard key={customer.id} props={customer} />
                )}
            </div>
        </section>
    )
}