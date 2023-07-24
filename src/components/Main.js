import pages from "./pages/pages";
import HomePage from "./pages/homepage";
import { Routes, Route } from "react-router-dom";

export default function Main() {
    return (
        <main>
            <Routes>
                <Route path={pages.get("home").path} element={<HomePage />} />
            </Routes>
        </main>
    )
}