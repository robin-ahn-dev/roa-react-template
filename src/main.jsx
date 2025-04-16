import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Test from "./Test.jsx";
import "./style.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Main = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/test" element={<Test />} />
            </Routes>
        </Router>
    );
};

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Main />
    </StrictMode>,
);
