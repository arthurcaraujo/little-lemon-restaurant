import pages from "./pages/pages";
import HomePage from "./pages/homepage";
import BookingPage from "./pages/booking-page";
import ConfirmedBooking from "./pages/confirmed-booking";
import UnderConstruction from "./pages/under-construction";
import { Routes, Route } from "react-router-dom";

export default function Main() {
    return (
        <main>
            <Routes>
                <Route
                    element={<HomePage />}
                    path={pages.get("home").path}
                />
                <Route
                    element={<UnderConstruction />}
                    path={pages.get("about").path}
                />
                <Route
                    element={<UnderConstruction />}
                    path={pages.get("menu").path}
                />
                <Route
                    element={<BookingPage />}
                    path={pages.get("reservations").path}
                />
                <Route
                    element={<ConfirmedBooking />}
                    path={pages.get("confirmedReservation").path}
                />
                <Route
                    element={<UnderConstruction />}
                    path={pages.get("orderOnline").path}
                />
                <Route
                    element={<UnderConstruction />}
                    path={pages.get("login").path}
                />
            </Routes>
        </main>
    )
}