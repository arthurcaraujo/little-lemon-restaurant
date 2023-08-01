const pages = new Map([
    [
        "home",
        { name: "Home", id: "home", path: "/", fixed: true }
    ],
    [
        "about",
        { name: "About", id: "about", path: "/about", fixed: true }
    ],
    [
        "menu",
        { name: "Menu", id: "menu", path: "/menu", fixed: true }
    ],
    [
        "reservations",
        { name: "Reservations", id: "reservations", path: "/reservations", fixed: true }
    ],
    [
        "confirmedReservation",
        { name: "Confirmed Reservation", id: "confirmed-reservation", path: "/confirmed-reservation", fixed: false }
    ],
    [
        "orderOnline",
        { name: "Order Online", id: "order-online", path: "/order-online", fixed: true }
    ],
    [
        "login",
        { name: "Login", id: "login", path: "/login", fixed: true }
    ]
]);

export default pages;