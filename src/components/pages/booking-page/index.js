import "./index.css";
import pages from "../pages";
import { useReducer } from "react";
import BookingForm from "./BookingForm";
import { useNavigate } from "react-router-dom";
import { fetchAPI, submitAPI } from "../../../bookingApi";
import restaurantImg from "../../../assets/restaurant.jpg";
import restaurantChefImg from "../../../assets/restaurant-chef.jpg";

const updateTimes = (availableTimes, date) => {
    const response = fetchAPI(new Date(date));
    return (response.length !== 0) ? response : availableTimes;
}

const initializeTimes = (initialAvailableTimes) => {
    return [...initialAvailableTimes, ...fetchAPI(new Date())];
}

export default function BookingPage() {
    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
    const navigate = useNavigate();

    const submitData = (formData) => {
        const response = submitAPI(formData);
        if (response) navigate(pages.get("confirmedReservation").path);
    }

    return (
        <section className="booking-page">
            <h2>Find a table for any occasion</h2>
            <img
                alt="Restaurant"
                id="restaurant-img"
                src={restaurantImg}
            />
            <img
                alt="Restaurant chef"
                id="restaurant-chef-img"
                src={restaurantChefImg}
            />
            <BookingForm
                availableTimes={availableTimes}
                dispatchWhenDateChanges={dispatch}
                submitData={submitData}
            />
        </section>
    )
}