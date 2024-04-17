// react
import React from "react";
import ReactDOM from "react-dom/client";

// router
import { BrowserRouter } from "react-router-dom";

// web vitals
import reportWebVitals from "./reportWebVitals";

// containers
// -- routes
import Routes from "./containers/routes";

// ----------------------------------------------------------------------

// libphonenumber
import "react-phone-input-2/lib/style.css";

// swiper
import "swiper/css";
import "swiper/css/effect-cards";

// ----------------------------------------------------------------------

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement,
);

// ----------------------------------------------------------------------

root.render(
    <React.StrictMode>
        <BrowserRouter basename="/">
            <Routes />
        </BrowserRouter>
    </React.StrictMode>,
);

// ----------------------------------------------------------------------

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
